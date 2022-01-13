import React from 'react';
import { Link, Redirect } from 'react-router-dom'

import { useContext } from 'react';
// Import Image
import LoginImg from '../../assets/img/login-banner.png';
import UserRolesContext from '../../authenticationContext';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AirlineSeatIndividualSuiteSharp } from '@material-ui/icons';
import { DOMAIN } from '../../constants';
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			submitted: false,
			redirect: false,
			path: ''
		};
		this.handleChangeUsername = this.handleChangeUsername.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeUsername(event) {
		this.setState({ username: event.target.value });
	}

	handleChangePassword(event) {
		this.setState({ password: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({ submitted: true });
		console.log(this.state)
		fetch(`${DOMAIN}/ThanhVien/login`,
			{
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					taiKhoan: this.state.username,
					matKhau: this.state.password
				})
			}
		).then(res => res.json().then(
			res => {
				console.log(res.data);
				if (res.succeeded) {
					alert("Đăng nhập thành công.")
					localStorage.setItem("role", res.data.quyens);
					localStorage.setItem("isAuthenticated", "True")
					localStorage.setItem("Accesstoken", res.data.acessToken);
					this.setState({ redirect: true, path: '/customer-dashboard' })
				} else {
					alert(res.message)
					localStorage.setItem("isAuthenticated", "False")
					this.setState({ redirect: false })
				}
			})
		).catch(
			res => { console.log(res) }
		)
	}
	render() {
		const { redirect, path } = this.state;
		if (redirect) {
			return <Redirect to={path} />;
		}
		return (
			<div>
				{/* Page Content */}
				<div className="account-page">
					<div className="content">
						<div className="container">
							<div className="row">
								<div className="col-md-8 offset-md-2">
									{/* Login Tab Content */}
									<div className="account-content">
										<div className="row align-items-center justify-content-center">
											<div className="col-md-7 col-lg-6 login-left">
												<img src={LoginImg} className="img-fluid" alt="DreamsEdu Login" />
											</div>
											<div className="col-md-12 col-lg-6 login-right">
												<div className="login-header">
													<h3>Đăng nhập</h3>
												</div>
												<form action="/index" onSubmit={this.handleSubmit}>
													<div className="form-group form-focus">
														<input type="text" className="form-control floating" value={this.state.username} onChange={this.handleChangeUsername} />
														<label className="focus-label">Tài khoản</label>
													</div>
													<div className="form-group form-focus">
														<input type="password" className="form-control floating" value={this.state.password} onChange={this.handleChangePassword} />
														<label className="focus-label">Mật khẩu</label>
													</div>
													<div className="text-right">
														<Link to="/forgot-password" className="forgot-link">Quên mật khẩu ?</Link>
													</div>
													<button className="btn btn-primary btn-block btn-lg login-btn" type="submit" onClick={this.login}>Đăng nhập</button>

													<div className="login-or">
														<span className="or-line"></span>
														<span className="span-or">hoặc</span>
													</div>
													<div className="row form-row social-login">
														<div className="col-6">
															<Link to="#" className="btn btn-facebook btn-block"><FontAwesomeIcon icon={faFacebookF} className="mr-1" /> Đăng nhập</Link>
														</div>
														<div className="col-6">
															<Link to="#" className="btn btn-google btn-block"><FontAwesomeIcon icon={faGoogle} className="mr-1" /> Đăng nhập</Link>
														</div>
													</div>
													<div className="text-center dont-have">Bạn có tài khoản chưa? <Link to="/register">Đăng ký</Link></div>
												</form>
											</div>
										</div>
									</div>
									{/* Login Tab Content */}

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
export { Login };