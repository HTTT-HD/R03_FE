import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { StaffSidebar } from './staff-sidebar';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/fontawesome-free-solid';

class EditEditProduct extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			sanphams: [],
            data:[],
            redirect:false
		}
        this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		fetch("http://localhost:3003/product/")
			.then(res => res.json())
			.then(
				(result) => {
                    //console.log(result);
					this.setState({
						isLoaded: true,
						sanphams: result
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}
    handleChange(e) {
        const newData = {...this.state.data};
        newData["id_sp"] = localStorage.getItem("pro_id")
        newData[e.target.name]=e.target.value;
        this.setState({data:newData})
    }
    handleSubmit(event) {
		event.preventDefault();
		//console.log(this.state)
		axios.put(`http://localhost:3003/product/update/${localStorage.getItem("pro_id")}`,this.state.data)
			.then(res => {
				console.log(res.data)
				if(res.data==="True")
				    {this.setState({redirect:true})}
			})
			.catch(error => {
				console.log(error)
			})
	}

    render() {
        const { redirect } = this.state;
     	if (redirect) {
       		return <Redirect to='/edit-product'/>;
     	}
        //console.log(this.state.sanphams);
        let {sanphams} = this.state;
        //console.log(sanphams);
        const pr=sanphams.filter(item=>{
            return item.id == localStorage.getItem("pro_id")
        })
        //console.log(pr);
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
                                        <li className="breadcrumb-item active" aria-current="page">Chỉnh sửa sản phẩm</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Chỉnh sửa sản phẩm</h2>
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
                                        {   pr.map((item)=>
                                            <div className="row form-row">
                                                <div className="col-12 col-md-12">
                                                    <div className="form-group">
                                                        <div className="change-avatar">
                                                            <div className="profile-img">
                                                                <img src={item.img} alt="User Image" />
                                                            </div>
                                                            <div className="upload-img">
                                                                <div className="change-photo-btn">
                                                                    <span><FontAwesomeIcon icon={faUpload} /> Tải ảnh lên</span>
                                                                    <input onChange={(e)=>this.handleChange(e)} type="file" name="img" className="upload" />
                                                                </div>
                                                                <small className="form-text text-muted">Cho phép JPG, GIF hoặc PNG. Kích thước tối đa 2MB</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Tên sản phẩm</label>
                                                        <input defaultValue={item.tensanpham} onChange={(e)=>this.handleChange(e)} type="text" className="form-control" name ="tensanpham"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Giá sản phẩm (Ví dụ: 30.000 VND)</label>
                                                        <input defaultValue={item.dongia} onChange={(e)=>this.handleChange(e)} type="text" className="form-control" name ="dongia"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Loại sản phẩm</label>
                                                        <input defaultValue={item.loaisanpham} onChange={(e)=>this.handleChange(e)} type="text" className="form-control" name="loaisanpham" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Số lượng tồn</label>
                                                        <input defaultValue={item.soluong} onChange={(e)=>this.handleChange(e)} type="text" className="form-control" name ="soluong"/>
                                                    </div>
                                                </div>
                                                {/* <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Mô tả</label>
                                                        <input onChange={(e)=>this.handleChange(e)} type="text" className="form-control" name ="soluong"/>
                                                    </div>
                                                </div> */}
                                                <div className="submit-section">
                                                    <button type="submit" className="btn btn-primary submit-btn">Lưu thay đổi</button>
                                                </div>
                                                {/* add service Form */}
                                            </div>
                                        )}
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
export { EditEditProduct };