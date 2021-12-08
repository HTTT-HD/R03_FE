import React from 'react';
import { Link,Redirect } from 'react-router-dom'
import $ from "jquery";
import axios from 'axios'

// Import Sidebar
import { StaffSidebar } from './staff-sidebar';

// Import Images
import UserImg from '../../assets/img/stylists/stylist-thumb-02.jpg';
import formImg from '../../assets/img/features/feature-01.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AddStylist extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            data :[],
            redirect:false,
			selectValue:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const newData = {...this.state.data};
        newData[e.target.name]=e.target.value;
        this.setState({data:newData})
		console.log(this.state.data)
	}
	handleChange_sl(e) {
		this.setState({
			selectValue:e.target.value
		})
		console.log(this.state.selectValue)
	}
	handleSubmit(event){
		event.preventDefault();
		axios.post('http://localhost:3000/admin/emp/add',{"data":this.state.data,"gender":this.state.selectValue})
		.then(res => {
			if(res.data.save)
				{this.setState({redirect:true})}
		})
		.catch(error => {
			console.log(error)
		})
	}
	componentDidMount() {
		// Pricing Options Show
		$('#pricing_select input[name="rating_option"]').on('click', function() {
			if ($(this).val() == 'price_free') {
				$('#custom_price_cont').hide();
			}
			if ($(this).val() == 'custom_price') {
				$('#custom_price_cont').show();
			}
			else {
			}
		});
	
		// Education Add More
		
		$(".education-info").on('click','.trash', function () {
			$(this).closest('.education-cont').remove();
			return false;
		});
	
		$(".add-education").on('click', function () {
			
			var educationcontent = '<div class="row form-row education-cont">' +
				'<div class="col-12 col-md-10 col-lg-11">' +
					'<div class="row form-row">' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>Degree</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>College/Institute</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>Year of Completion</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-2 col-lg-1"><label class="d-md-block d-sm-none d-none">&nbsp;</label><Link to="#" class="btn btn-danger trash">&times;</Link></div>' +
			'</div>';
			
			$(".education-info").append(educationcontent);
			return false;
		});
		
		// Experience Add More
		
		$(".experience-info").on('click','.trash', function () {
			$(this).closest('.experience-cont').remove();
			return false;
		});
	
		$(".add-experience").on('click', function () {
			
			var experiencecontent = '<div class="row form-row experience-cont">' +
				'<div class="col-12 col-md-10 col-lg-11">' +
					'<div class="row form-row">' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>University Name</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>From</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>To</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>Designation</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-2 col-lg-1"><label class="d-md-block d-sm-none d-none">&nbsp;</label><Link to="#" class="btn btn-danger trash">&times;</Link></div>' +
			'</div>';
			
			$(".experience-info").append(experiencecontent);
			return false;
		});
		
		// Awards Add More
		
		$(".awards-info").on('click','.trash', function () {
			$(this).closest('.awards-cont').remove();
			return false;
		});
	
		$(".add-award").on('click', function () {
	
			var regcontent = '<div class="row form-row awards-cont">' +
				'<div class="col-12 col-md-5">' +
					'<div class="form-group">' +
						'<label>Awards</label>' +
						'<input type="text" class="form-control">' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-5">' +
					'<div class="form-group">' +
						'<label>Year</label>' +
						'<input type="text" class="form-control">' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-2">' +
					'<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
					'<Link to="#" class="btn btn-danger trash">&times;</Link>' +
				'</div>' +
			'</div>';
			
			$(".awards-info").append(regcontent);
			return false;
		});
		
		// Membership Add More
		
		$(".membership-info").on('click','.trash', function () {
			$(this).closest('.membership-cont').remove();
			return false;
		});
	
		$(".add-membership").on('click', function () {
	
			var membershipcontent = '<div class="row form-row membership-cont">' +
				'<div class="col-12 col-md-10 col-lg-5">' +
					'<div class="form-group">' +
						'<label>Memberships</label>' +
						'<input type="text" class="form-control">' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-2 col-lg-2">' +
					'<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
					'<Link to="#" class="btn btn-danger trash">&times;</Link>' +
				'</div>' +
			'</div>';
			
			$(".membership-info").append(membershipcontent);
			return false;
		});
		
		// Registration Add More
		
		$(".registrations-info").on('click','.trash', function () {
			$(this).closest('.reg-cont').remove();
			return false;
		});
	
		$(".add-reg").on('click', function () {
	
			var regcontent = '<div class="row form-row reg-cont">' +
				'<div class="col-12 col-md-5">' +
					'<div class="form-group">' +
						'<label>Registrations</label>' +
						'<input type="text" class="form-control">' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-5">' +
					'<div class="form-group">' +
						'<label>Year</label>' +
						'<input type="text" class="form-control">' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-2">' +
					'<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
					'<Link to="#" class="btn btn-danger trash">&times;</Link>' +
				'</div>' +
			'</div>';
			
			$(".registrations-info").append(regcontent);
			return false;
		});


	}
	
    render() {
		const { redirect } = this.state;
        if (redirect) {
              return <Redirect to='/edit-stylist'/>;
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
										<li className="breadcrumb-item active" aria-current="page">Thêm nhân viên</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Thêm nhân viên</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content */}
				<div className="content">
					<div className="container">
					<form action="" method="POST" onSubmit={this.handleSubmit}>
						<div className="row">
							<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
								<StaffSidebar />
							</div>

							<div className="col-md-7 col-lg-8 col-xl-9">

								{/* Basic Information */}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Thông tin cơ bản</h4>
										<div className="row form-row">
											<div className="col-md-12">
												<div className="form-group">
													<div className="change-avatar">
														<div className="profile-img">
															<img src={UserImg} alt="User Image" />
														</div>
														<div className="upload-img">
															<div className="change-photo-btn">
																<span><FontAwesomeIcon icon="upload" /> Tải ảnh lên</span>
																<input onChange={(e)=>this.handleChange(e)} type="file" className="upload" name="img"/>
															</div>
															<small className="form-text text-muted">Được phép JPG, GIF hoặc PNG. Kích thước tối đa 2MB</small>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Email <span className="text-danger">*</span></label>
													<input onChange={(e)=>this.handleChange(e)} type="email" name="email" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Số điện thoại <span className="text-danger">*</span></label>
													<input onChange={(e)=>this.handleChange(e)} type="text" name="phone" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Họ và tên lót <span className="text-danger">*</span></label>
													<input onChange={(e)=>this.handleChange(e)} type="text" name="lastname" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Tên <span className="text-danger">*</span></label>
													<input onChange={(e)=>this.handleChange(e)} type="text" name="firstname" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group mb-0">
													<label>Ngày sinh</label>
													<input onChange={(e)=>this.handleChange(e)} type="text" name="dob" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Giới tính</label>
													<select className="form-control select" name="gender" value={this.state.selectValue} onChange={(e)=>this.handleChange_sl(e)}>
														<option>Chọn lựa</option>
														<option value="nam">Nam</option>
														<option value="nữ">Nữ</option>
														<option value="khác">Giới tính khác</option>
													</select>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Basic Information */}

								{/* About Me */}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Về tôi</h4>
										<div className="form-group mb-0">
											<label>Tiểu sử <span className="text-danger">*</span></label>
											<textarea onChange={(e)=>this.handleChange(e)} name="biography" className="form-control" rows="5"></textarea>
										</div>
									</div>
								</div>
								{/* About Me */}

								{/* Contact Details */}
								<div className="card contact-card">
									<div className="card-body">
										<h4 className="card-title">Chi tiết liên hệ</h4>
										<div className="row form-row">
											<div className="col-md-6">
												<div className="form-group">
													<label>Số nhà và tên đường <span className="text-danger">*</span></label>
													<input onChange={(e)=>this.handleChange(e)} name="street" type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Tên phường <span className="text-danger">*</span></label>
													<input onChange={(e)=>this.handleChange(e)} name="ward" type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Tên quận <span className="text-danger">*</span></label>
													<input onChange={(e)=>this.handleChange(e)} name="dist" type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Thành phố <span className="text-danger">*</span></label>
													<input onChange={(e)=>this.handleChange(e)} name="city" type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Quốc gia <span className="text-danger">*</span></label>
													<input onChange={(e)=>this.handleChange(e)} name="nation" type="text" className="form-control" />
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Contact Details */}

								{/* Mạng xã hội */}
								<div className="card contact-card">
									<div className="card-body">
										<h4 className="card-title">Mạng xã hội</h4>
										<div className="row form-row">
											<div className="col-md-6">
												<div className="form-group">
													<label>Facebook URL</label>
													<input onChange={(e)=>this.handleChange(e)} name="fburl" type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label className="control-label">Twitter URL</label>
													<input onChange={(e)=>this.handleChange(e)} name="twitterurl" type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label className="control-label">Instagram URL</label>
													<input onChange={(e)=>this.handleChange(e)} name="igurl" type="text" className="form-control" />
												</div>
											</div>

											<div className="col-md-6">
												<div className="form-group">
													<label className="control-label">Pinterest URL</label>
													<input onChange={(e)=>this.handleChange(e)} name="pinteresturl" type="text" className="form-control" />
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Mạng xã hội */}

								<div className="submit-section submit-btn-bottom">
									<button type="submit" className="btn btn-primary submit-btn">Lưu thay đổi</button>
								</div>
							
							</div>

							
						</div>
					</form>
					</div>
				</div>		
				{/* Page Content */}

			</div>
        )
    }
}
export { AddStylist };