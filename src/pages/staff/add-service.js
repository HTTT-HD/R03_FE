import React from 'react';
import { Link ,Redirect} from 'react-router-dom'
import axios from 'axios'

import { StaffSidebar } from './staff-sidebar';

// Import Images
import UserImg from '../../assets/img/customers/customer.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/fontawesome-free-solid';

class AddService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data :[],
            redirect:false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const newData = {...this.state.data};
        newData[e.target.name]=e.target.value;
        this.setState({data:newData})
    }
    handleSubmit(event) {
		event.preventDefault();
		//console.log(this.state)
		axios.post('http://localhost:3000/admin/service/add',this.state.data)
			.then(res => {
                if(res.data.save)
				    {this.setState({redirect:true})}
			})
			.catch(error => {
				console.log(error)
			})
	}
    render() {
        const { redirect } = this.state;
     	if (redirect) {
       		return <Redirect to='/edit-service'/>;
     	}
        return (
            <div>
                {/* Breadcrumb */}
                <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Thêm dịch vụ</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Thêm dịch vụ</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb */}

                {/* Page Content */}
                <div className="content">
                    <div className="container">
                        <div className="row">
                            {/* Profile Sidebar */}
                            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                                <StaffSidebar />
                            </div>
                            {/* Profile Sidebar */}

                            <div className="col-md-7 col-lg-8 col-xl-9">
                                <div className="card">
                                    <div className="card-body">

                                        {/* add service Form */}
                                        <form action="" method="POST" onSubmit={this.handleSubmit}>
                                            <div className="row form-row">
                                                <div className="col-12 col-md-12">
                                                    <div className="form-group">
                                                        <div className="change-avatar">
                                                            <div className="profile-img">
                                                                <img src={UserImg} alt="User Image" />
                                                            </div>
                                                            <div className="upload-img">
                                                                <div className="change-photo-btn">
                                                                    <span><FontAwesomeIcon icon={faUpload} /> Tải ảnh lên</span>
                                                                    <input onChange={(e)=>this.handleChange(e)} type="file" className="upload" name="img"/>
                                                                </div>
                                                                <small className="form-text text-muted">Cho phép JPG, GIF hoặc PNG. Kích thước tối đa 2MB</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Mã dịch vụ</label>
                                                        <input onChange={(e)=>this.handleChange(e)} type="text" className="form-control" name ="id"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Tên dịch vụ</label>
                                                        <input onChange={(e)=>this.handleChange(e)} type="text" className="form-control" name ="name"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Giá (Ví dụ: 30.000 VND)</label>
                                                        <input onChange={(e)=>this.handleChange(e)} type="text" className="form-control" name="price" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Thời gian thực hiện (Ví dụ: 50 phút)</label>
                                                        <input onChange={(e)=>this.handleChange(e)} type="text" className="form-control" name ="duration"/>
                                                    </div>
                                                </div>
                                                <div className="submit-section">
                                                    <button type="submit" className="btn btn-primary submit-btn">Thêm dịch vụ</button>
                                                </div>
                                                {/* add service Form */}

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                {/* Page Content */}
            </div >
        )
    }
}
export { AddService };