import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { StaffSidebar } from './staff-sidebar';

// Import Images
import UserImg from '../../assets/img/customers/customer.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/fontawesome-free-solid';

class DeleteService extends React.Component {

     constructor(props) {
     	super(props);
     	this.state = {
     		error: null,
     		isLoaded: false,
     		services: [],
             data:"",
             redirect:false
     	}
         this.handleSubmit = this.handleSubmit.bind(this);
    }
    
     handleSubmit(event) {
     	event.preventDefault();
     	//console.log(this.state)
     	axios.post('http://localhost:3000/admin/service/del',localStorage.getItem("sv_id").toString())
     		.then(res => {
     			console.log(res.data)
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
        // let {services} = this.state;
        // const sv=services.filter(item=>{
        //     return item.idservice == localStorage.getItem("sv_id")
        // })
        // console.log(sv)
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
                                        <li className="breadcrumb-item active" aria-current="page">Xóa dịch vụ</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Xóa dịch vụ</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb */}

                {/* Page Content */}
                <form action="" method="POST" onSubmit={this.handleSubmit}>
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
                                            <div className="row form-row">
                                                {/* Success Card */}
                                                <div className="card success-card">
                                                    <div className="card-body">
                                                        <div className="success-cont">
                                                            <FontAwesomeIcon icon={faQuestion} />
                                                            <h3>Bạn chắc chắn xóa dịch vụ này không?</h3>
                                                            <p>Nếu bạn nhấn "Xác nhận" thì dịch vụ này được xóa, nếu bạn muốn thêm lại dịch vụ thì vào phần "Chỉnh sửa dịch vụ" để thêm dịch vụ mới.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Success Card */}
                                                <div className="submit-section">
                                                    <button type="submit" className="btn btn-primary submit-btn">Xác nhận</button>
                                                </div>
                                                {/* add service Form */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </form>
                {/* Page Content */}
            </div >
        )
    }
}
export { DeleteService };