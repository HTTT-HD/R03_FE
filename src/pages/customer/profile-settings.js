import React from 'react';
import { Link,Redirect } from 'react-router-dom'
import axios from 'axios'
import { CustomerSidebar } from './customer-sidebar';

// Import Images
import UserImg from '../../assets/img/customers/customer.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/fontawesome-free-solid';
import { DOMAIN } from '../../constants';

class ProfileSettings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
            data:[],
			data_up:[],
			redirect:false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		fetch(`${DOMAIN}/ThanhVien/user-login`,
		{
			method:"GET",
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`
			}
		})
			.then(res => res.json())
			.then(
				(result) => {
					console.log(result)
					this.setState({
						isLoaded: true,
						data: result.data
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
        const newData = {...this.state.data_up};
        newData["idc"] = localStorage.getItem("id_cus")
        newData[e.target.name]=e.target.value;
        this.setState({data_up:newData})
    }
	handleSubmit(event) {
		event.preventDefault();
		//console.log(this.state)
		axios.post('http://localhost:3000/user/profile/update',this.state.data_up)
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
       		return <Redirect to='/customer-dashboard'/>;
     	}
		let {data}=this.state;
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
											<li className="breadcrumb-item active" aria-current="page">Cài đặt cấu hình</li>
										</ol>
									</nav>
									<h2 className="breadcrumb-title">Cài đặt cấu hình</h2>
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
									<CustomerSidebar />
								</div>
								{/* Profile Sidebar */}

								<div className="col-md-7 col-lg-8 col-xl-9">
									<div className="card">
										<div className="card-body">
											
											{/* Profile Settings Form */}
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
																	{/*	<input onChange={(e)=>this.handleChange(e)} name="img" type="file" defaultValue={data.img} className="upload" />*/}
																	</div>
																	<small className="form-text text-muted">Cho phép JPG, GIF hoặc PNG. Kích thước tối đa 2MB</small>
																</div>
															</div>
														</div>
													</div>
													<div className="col-12 col-md-6">
														<div className="form-group">
															<label>Họ và tên</label>
															<input onChange={(e)=>this.handleChange(e)} type="text" name="tenThanhVien"className="form-control" defaultValue={data.tenThanhVien} />
														</div>
													</div>
													<div className="col-12 col-md-6">
														<div className="form-group">
															<label>Giới tính</label>
															<input onChange={(e)=>this.handleChange(e)} type="date" name="dob" className="form-control datetimepicker" defaultValue={data.tenGioiTinh} />
														</div>
													</div>
													<div className="col-12 col-md-6">
														<div className="form-group">
															<label>Email</label>
															<input onChange={(e)=>this.handleChange(e)} type="email" name="tenDangNhap" className="form-control" defaultValue={data.tenDangNhap} />
														</div>
													</div>
													<div className="col-12 col-md-6">
														<div className="form-group">
															<label>Số điện thoại</label>
															<input onChange={(e)=>this.handleChange(e)} type="text" name="soDienThoai" defaultValue={data.soDienThoai} className="form-control" />
														</div>
													</div>
													<div className="col-12">
														<div className="form-group">
														<label>Địa chỉ</label>
															<input onChange={(e)=>this.handleChange(e)} type="text" name="diaChi" className="form-control" defaultValue={data.diaChi} />
														</div>
													</div>
													<div className="col-12">
														<div className="form-group">
														<label>CMND</label>
															<input onChange={(e)=>this.handleChange(e)} type="text" name="cmnd" className="form-control" defaultValue={data.cmnd} />
														</div>
													</div>
												</div>
												<div className="submit-section">
													<button type="submit" className="btn btn-primary submit-btn">Lưu thay đổi</button>
												</div>
											</form>
											{/* Profile Settings Form */}
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>		
					{/* Page Content */}
			</div>
        )
    }
}
export { ProfileSettings };