import React from 'react';
import { Link } from 'react-router-dom'

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
	
    render() {
        const exclusionArray = [
			'/chat',
			'/chat-stylist',
			'/voice-call',
			'/video-call'
		]
		if (exclusionArray.indexOf(this.props.location.pathname) >= 0) {
			return '';
		}

		const pathname = this.props.location.pathname;

        return (
			<footer className={`footer ${(pathname === ('/') ? 'footer-padding' : '')}`}>
				
				{/* Footer Top */}
				<div className="footer-top">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-3 col-md-6">
							
								{/* Footer Widget */}
								<div className="footer-widget footer-about">
									<h2 className="footer-title">About me</h2>
									<div className="footer-about-content">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
									</div>
								</div>
								{/* Footer Widget */}
								
							</div>
							
							<div className="col-lg-3 col-md-6">
							
								{/* Footer Widget */}
								<div className="footer-widget footer-menu">
									<h2 className="footer-title">Quick Links</h2>
									<ul>
										<li>
											<Link to="/login">Đăng nhập</Link>
										</li>
										<li>
											<Link to="/stylist-register">Đăng kí</Link>
										</li>
									</ul>
								</div>
								{/* Footer Widget */}
								
							</div>
							
							<div className="col-lg-3 col-md-6">
							
								{/* Footer Widget */}
								<div className="footer-widget footer-menu">
									<h2 className="footer-title">Useful links</h2>
									<ul>
										<li>
											<Link to="/list-product">Sản phẩm</Link>
										</li>
										<li>
											<Link to="/checkout">Thanh Toán</Link>
										</li>
										<li>
											<Link to="/">Đăng kí</Link>
										</li>
										{/* <li>
											<Link to="/booking">Booking</Link>
										</li> */}
										{/* <li>
											<Link to="/customer-dashboard">Dashboard của khách hàng</Link>
										</li> */}
									</ul>
								</div>
								{/* Footer Widget */}
								
							</div>
							<div className="col-lg-3 col-md-6">
							
								{/* Footer Widget */}
								<div className="footer-widget footer-contact">
									<h2 className="footer-title">Get in touch</h2>
									<div className="footer-contact-info">
										<div className="footer-address">
											<p className="title"> Ask us a Question </p>
											<p>(02) - 123 - 456 - 789</p>
										</div>	
										<div className="social-icon">
											<p className="title">Connect with us</p>
											<ul>
												<li>
													<a href="#" target="_blank"><FontAwesomeIcon icon={faFacebookF} /> </a>
												</li>
												<li>
													<Link to="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /> </Link>
												</li>
												<li>
													<a href="#" target="_blank"><FontAwesomeIcon icon={faYoutube} /> </a>
												</li>
												<li>
													<Link to="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
								{/* Footer Widget */}
								
							</div>
							
						</div>
					</div>
				</div>
				{/* Footer Top */}
				
				{/* Footer Bottom */}
                <div className="footer-bottom">
					<div className="container-fluid">
					
						{/* Copyright */}
						<div className="copyright">
							<div className="row">
								<div className="col-md-12 col-lg-12">
									<div className="copyright-text text-center">
										<p className="mb-0">&copy; 2021 Rental Market. Đã được đăng ký bản quyền.</p>
									</div>
								</div>
							</div>
						</div>
						{/* Copyright */}
						
					</div>
				</div>
				{/* Footer Bottom */}
				
			</footer>
		)
    }
}

export { Footer };