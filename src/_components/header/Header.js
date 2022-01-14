import React from 'react';
import { Dropdown } from 'react-bootstrap';
import $ from "jquery";
import { Link } from 'react-router-dom';
import { DOMAIN } from './../../constants'

// Import Images
import LogoWhite from '../../assets/img/logo-white.png';
import Logo from '../../assets/img/logo.png';
import UserIcon from '../../assets/img/stylists/stylist-thumb-02.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faShoppingCart, faTimes, faUser, faSearch } from '@fortawesome/fontawesome-free-solid';
import { UserRolesContext } from '../../authenticationContext';

function logOut(params) {
	localStorage.clear();
	history.pushState('/login')
}

class Header extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        }
    }
	static contextType = UserRolesContext;
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
	
	handleLogout() {
		localStorage.clear();
		localStorage.removeItem("token");
	}

	render() {
		const exclusionArray = []
		if (exclusionArray.indexOf(this.props.location.pathname) >= 0) {
			return '';
		}
		const pathname = this.props.location.pathname;
		let isAuthenticated = false;
		if (localStorage.getItem("isAuthenticated")=="True"){isAuthenticated = true;}
			
		// let user = JSON.parse(localStorage.getItem('user-info'));
		console.log(pathname, "Pathnames")
		return (
			<header className={`header ${(pathname === ('/') ? 'min-header' : '')}`}>
				<nav className="navbar navbar-expand-lg header-nav">
					<div className="navbar-header">
						<Link to="" id="mobile_btn">
							<span className="bar-icon">
								<span></span>
								<span></span>
								<span></span>
							</span>
						</Link>
						<Link to="/" className="navbar-brand logo">
							<img src={pathname === ('/') ? LogoWhite : Logo} className="img-fluid" alt="Logo" />
						</Link>
					</div>
					<div className="main-menu-wrapper">
						<div className="menu-header">
							<Link to="/" className="menu-logo">
								<img src={Logo} className="img-fluid" alt="Logo" />
							</Link>
							<Link to="" id="menu_close" className="menu-close">
								<FontAwesomeIcon icon={faTimes} />
							</Link>
						</div>
						<ul className="main-nav">
							<li className={pathname === ('/') ? 'active' : ''}>
								<Link to="/">Trang chủ</Link>
							</li>
							<li className={pathname === ('/staff-dashboard') ? 'active' : ''}>
								<Link to="/staff-dashboard">Admin</Link>
							</li>
							<li className={pathname === ('/stylist-dashboard') ? 'active' : ''}>
								<Link to="/list-cuahang">Danh sách Cửa hàng</Link>
							</li>
							<li className={`has-submenu ${pathname === ('/search') ? 'active' : pathname === ('/booking') ? 'active' : pathname === ('/customer-dashboard') ? 'active' : pathname === ('/login') ? 'active' : pathname === ('/register') ? 'active' : ''}`}>
								<Link to="">Khách hàng <FontAwesomeIcon icon={faChevronDown} /></Link>
								<ul className="submenu">
									<li className={`${pathname === ('/customer-dashboard') ? 'active' : ''}`}>
										<Link to="/customer-dashboard">Dashboard</Link>
									</li>
									<li className={`${pathname === ('/register') ? 'active' : ''}`}>
										<Link to="/register">Đăng ký</Link>
									</li>
									<li className={pathname === ('/cart') ? 'active' : ''}>
										<Link to="/cart">Giỏ hàng</Link>
									</li>
								</ul>
							</li>
							<li className={pathname === ('/shipper-dashboard') ? 'active' : ''}>
								<Link to="/shipper-dashboard">Shipper</Link>
							</li>
							<li className={`has-submenu ${pathname === ('/list-rice') ? 'active' : pathname === ('/list-meat') ? 'active' : pathname === ('/list-seafood') ? 'active' : pathname === ('/other-categories') ? 'active' : ''}`}>
								<Link to="">Danh mục sản phẩm <FontAwesomeIcon icon={faChevronDown} /></Link>
								<ul className="submenu">
									<li className={`${pathname === ('/list-rice') ? 'active' : ''}`}>
										<Link to="/list-rice">Gạo</Link>
									</li>
									<li className={`${pathname === ('/list-meat') ? 'active' : ''}`}>
										<Link to="/list-meat">Thịt</Link>
									</li>
									<li className={pathname === ('/list-seafood') ? 'active' : ''}>
										<Link to="/list-seafood">Hải sản</Link>
									</li>
									<li className={pathname === ('/other-categories') ? 'active' : ''}>
										<Link to="/other-categories">Khác</Link>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					{/* <ul className="nav header-navbar-rht menu-select">
						{(pathname === ('/') || pathname === ('login') ?
							(
								<li className={pathname === ('/login') ? 'active' : ''}>
									<Link to="/login"><FontAwesomeIcon icon={faUser} /> Login/Register</Link>
								</li>
							) :
							(
								<li className="nav-item dropdown has-arrow logged-item user-listdrop">
									<Dropdown>
										<Dropdown.Toggle variant="light" id="dropdown-basic">
											<span className="user-img">
												<img className="rounded-circle" src={UserIcon} width="31" alt="Ryan Taylor" />
											</span>
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item href="">
												<div className="user-header">
													<div className="avatar avatar-sm">
														<img src={UserIcon} alt="User Image" className="avatar-img rounded-circle" />
													</div>
													<div className="user-text">
														<h6>Darren Elder</h6>
														<p className="text-muted mb-0">Stylist</p>
													</div>
												</div>
											</Dropdown.Item>
											<Dropdown.Item href="/stylist-dashboard">
												Dashboard
											</Dropdown.Item>
											<Dropdown.Item href="/stylist-profile-settings">
												Profile Settings
											</Dropdown.Item>
											<Dropdown.Item href="/">
												Logout
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</li>

							))
						}
					</ul> */}
					{(!isAuthenticated ?
						(
							<li className={pathname === ('/login') ? 'active' : ''}>
								<Link to="/login"><FontAwesomeIcon icon={faUser} /> Đăng nhập </Link>
							</li>
						) :
						(
							<li className="nav-item dropdown has-arrow logged-item user-listdrop">
								<Dropdown>
									<Dropdown.Toggle variant="light" id="dropdown-basic">
										<span className="user-img">
											<img className="rounded-circle" src={UserIcon} width="31" alt="Ryan Taylor" />
										</span>
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item href="">
											<div className="user-header">
												<div className="avatar avatar-sm">
													<img src={UserIcon} alt="User Image" className="avatar-img rounded-circle" />
												</div>
												<div className="user-text">
													<h6>{this.state.data.tenThanhVien}</h6>
													<p className="text-muted mb-0">Nhà tạo mẫu</p>
												</div>
											</div>
										</Dropdown.Item>
										<Dropdown.Item href="/stylist-dashboard">
											Dashboard
										</Dropdown.Item>
										<Dropdown.Item href="/stylist-profile-settings">
											Cài đặt cấu hình
										</Dropdown.Item>
										<Dropdown.Item href="/rentalmarket/" onClick={this.handleLogout}>
											Đăng xuất
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</li>
						))}
				</nav>
			</header>
		)
	}
}

export { Header };