import React from 'react';
import { Link } from 'react-router-dom'

import { CustomerSidebar } from './customer-sidebar';

// Import Images
import Img from '../../assets/img/stylists/stylist-01.jpg';
import Img1 from '../../assets/img/stylists/stylist-02.jpg';
import Img2 from '../../assets/img/stylists/stylist-03.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faBookmark, faCheckCircle, faClock, faColumns, faComment, faInfoCircle, faLock, faMapMarkerAlt, faMoneyBillAlt, faSignOutAlt, faStar, faUser, faUserCog } from '@fortawesome/fontawesome-free-solid';


class Favourites extends React.Component {
	
    render() {
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
										<li className="breadcrumb-item active" aria-current="page">Yêu thích</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Yêu thích</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content */}
				<div className="content">
					<div className="container">

						<div className="row">
							<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
								<CustomerSidebar />
							</div>
							<div className="col-md-7 col-lg-8 col-xl-9">
								<div className="row row-grid">
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="doc-img">
												<Link to="/stylist-profile">
													<img className="img-fluid" alt="User Image" src={Img} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/stylist-profile">Sorell Sexton</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<span className="d-inline-block average-rating">(17)</span>
												</div>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/stylist-profile" className="btn view-btn">Xem hồ sơ</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Đặt ngay</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="doc-img">
												<Link to="/stylist-profile">
													<img className="img-fluid" alt="User Image" src={Img1} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/stylist-profile">Urban Mauldin</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(35)</span>
												</div>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/stylist-profile" className="btn view-btn">Xem hồ sơ</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Đặt ngay</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="doc-img">
												<Link to="/stylist-profile">
													<img className="img-fluid" alt="User Image" src={Img2} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/stylist-profile">Cela Spence</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(27)</span>
												</div>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/stylist-profile" className="btn view-btn">Xem hồ sơ</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Đặt ngay</Link>
													</div>
												</div>
											</div>
										</div>
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
export { Favourites };