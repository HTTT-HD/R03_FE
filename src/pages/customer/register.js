import React from 'react';
import { Link,Redirect } from 'react-router-dom'


// Import Image
import LoginImg from '../../assets/img/register-banner.png';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

function makeid(length) {
	var result           = '';
	var characters       = '0123456789';
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ ) {
	   result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
 }

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data:[],
			submitted:false,
			redirect:false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(e) {
        const newData = {...this.state.data};
		newData['maThanhVien']='tv'+makeid(3);
        newData[e.target.name]=e.target.value;
        this.setState({data:newData})
	}
	
	handleSubmit(event) {
		event.preventDefault();
		this.setState({ submitted: true });
		console.log(this.state)
		fetch(
				"https://localhost:5001/api/ThanhVien/create",
				{
					method: "POST",
					headers: {
						'Content-Type': 'application/json'
					},
					body:JSON.stringify(this.state.data)
				}
			).then(res => res.json().then(
				res => {
					if(res.succeeded){
						alert("Đăng ký thành công")
						this.setState({redirect:true})
					}
					else{
						alert(res.message)
					}
					console.log(res);
				})
			).catch(
				res => { console.log(res) }
			)
	}
    render() {
		const { redirect } = this.state;
     	if (redirect) {
       		return <Redirect to='/login'/>;
		}
        return (
			<div>

				{/* Page Content */}
				<div className="account-page">
					<div className="content">
						<div className="container">
							<div className="row">
								<div className="col-md-8 offset-md-2">
							
									{/* Account Content */}
									<div className="account-content">
										<div className="row align-items-center justify-content-center">
											<div className="col-md-7 col-lg-6 login-left">
												<img src={LoginImg} className="img-fluid" alt="Login Banner" />	
											</div>
											<div className="col-md-12 col-lg-6 login-right">
												<div className="login-header">
													<h3>Khách Hàng Đăng Ký </h3>
												</div>
												
												{/* Register Form */}
												<form action="/" onSubmit={this.handleSubmit}>
													<div className="form-group form-focus">
														<input onChange={(e)=>this.handleChange(e)} type="text" className="form-control floating" name="tenThanhvien" />
														<label className="focus-label">Tên</label>
													</div>
													<div className="form-group form-focus">
														<input onChange={(e)=>this.handleChange(e)} type="text" className="form-control floating" name="soDienThoai" />
														<label className="focus-label">Số điện thoại</label>
													</div>
													<div className="form-group form-focus">
														<input onChange={(e)=>this.handleChange(e)} type="text" className="form-control floating" name="diaChi" />
														<label className="focus-label">Địa chỉ</label>
													</div>
													<div className="form-group form-focus">
														<input onChange={(e)=>this.handleChange(e)} type="text" className="form-control floating" name="tenDangnhap" />
														<label className="focus-label">Tên đăng nhập</label>
													</div>
													<div className="form-group form-focus">
														<input onChange={(e)=>this.handleChange(e)} type="text" className="form-control floating" name="cmnd" />
														<label className="focus-label">CMND</label>
													</div>
													<div className="form-group form-focus">
														<input onChange={(e)=>this.handleChange(e)} type="text" className="form-control floating" name="matKhau" />
														<label className="focus-label">Mật khẩu</label>
													</div>
													<div className="terms-and-policy pt-2 pb-2">
														<input type="checkbox" required name="checkbox" defaultValue="check" id="agree" /><span className="agree">Tôi đồng ý với các <span className="terms"><Link to="/terms-condition" target="_blank">Điều khoản sử dụng</Link> và <Link to="/privacy-policy" target="_blank">Chính sách bảo mật</Link> này.</span></span>
													</div>
													<div className="text-right">
														<Link to="/login" className="forgot-link">Bạn đã có sẵn tài khoản?</Link>
													</div>
													<button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Đăng ký</button>
												</form>
												{/* Register Form */}
												
											</div>
										</div>
									</div>
									{/* Account Content */}
										
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
export { Register };