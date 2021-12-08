import React from 'react';
import { Link } from 'react-router-dom'

// Import Sidebar
import { StylistSidebar } from './stylist-sidebar';

// Import Image
import CustomerImg from '../../assets/img/customers/customer.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faClock, faEnvelope, faEye, faMapMarkerAlt, faPhone, faTimes } from '@fortawesome/fontawesome-free-solid';


class Appointments extends React.Component {
	
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
										<li className="breadcrumb-item active" aria-current="page">Lịch hẹn</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Lịch hẹn</h2>
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
								<StylistSidebar />
							</div>

							<div className="col-md-7 col-lg-8 col-xl-9">
								<div className="appointments">
									{/* Appointment List */}
									<div className="appointment-list">
										<div className="profile-info-widget">
											<Link to="/customer-profile" className="booking-doc-img">
												<img src={CustomerImg} alt="User Image" />
											</Link>
											<div className="profile-det-info">
												<h3><Link to="/customer-profile">Gordan Whelan</Link></h3>
												<div className="customer-details">
													<h5><FontAwesomeIcon icon={faClock} /> 14 Nov 2020, 10.00 AM</h5>
													<h5><FontAwesomeIcon icon={faEnvelope} /> gordan@example.com</h5>
													<h5 className="mb-0"><FontAwesomeIcon icon={faPhone} /> +1 923 782 4575</h5>
												</div>
											</div>
										</div>
										<div className="appointment-action">
											<Link to="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
												<FontAwesomeIcon icon={faEye} /> Xem
											</Link>
											<Link to="#" className="btn btn-sm bg-success-light">
												<FontAwesomeIcon icon={faCheck} /> Chấp nhận
											</Link>
											<Link to="#" className="btn btn-sm bg-danger-light">
												<FontAwesomeIcon icon={faTimes} /> Hủy
											</Link>
										</div>
									</div>
									{/* Appointment List */}

									{/* Appointment List */}
									<div className="appointment-list">
										<div className="profile-info-widget">
											<Link to="/customer-profile" className="booking-doc-img">
												<img src={CustomerImg} alt="User Image" />
											</Link>
											<div className="profile-det-info">
												<h3><Link to="/customer-profile">Gordan Whelan</Link></h3>
												<div className="customer-details">
													<h5><FontAwesomeIcon icon={faClock} /> 14 Nov 2020, 10.00 AM</h5>
													<h5><FontAwesomeIcon icon={faEnvelope} /> gordan@example.com</h5>
													<h5 className="mb-0"><FontAwesomeIcon icon={faPhone} /> +1 923 782 4575</h5>
												</div>
											</div>
										</div>
										<div className="appointment-action">
											<Link to="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
												<FontAwesomeIcon icon={faEye} /> Xem
											</Link>
											<Link to="#" className="btn btn-sm bg-success-light">
												<FontAwesomeIcon icon={faCheck} /> Chấp nhận
											</Link>
											<Link to="#" className="btn btn-sm bg-danger-light">
												<FontAwesomeIcon icon={faTimes} /> Hủy
											</Link>
										</div>
									</div>
									<div className="appointment-list">
										<div className="profile-info-widget">
											<Link to="/customer-profile" className="booking-doc-img">
												<img src={CustomerImg} alt="User Image" />
											</Link>
											<div className="profile-det-info">
												<h3><Link to="/customer-profile">Gordan Whelan</Link></h3>
												<div className="customer-details">
													<h5><FontAwesomeIcon icon={faClock} /> 14 Nov 2020, 10.00 AM</h5>
													<h5><FontAwesomeIcon icon={faEnvelope} /> gordan@example.com</h5>
													<h5 className="mb-0"><FontAwesomeIcon icon={faPhone} /> +1 923 782 4575</h5>
												</div>
											</div>
										</div>
										<div className="appointment-action">
											<Link to="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
												<FontAwesomeIcon icon={faEye} /> Xem
											</Link>
											<Link to="#" className="btn btn-sm bg-success-light">
												<FontAwesomeIcon icon={faCheck} /> Chấp nhận
											</Link>
											<Link to="#" className="btn btn-sm bg-danger-light">
												<FontAwesomeIcon icon={faTimes} /> Hủy
											</Link>
										</div>
									</div>
									<div className="appointment-list">
										<div className="profile-info-widget">
											<Link to="/customer-profile" className="booking-doc-img">
												<img src={CustomerImg} alt="User Image" />
											</Link>
											<div className="profile-det-info">
												<h3><Link to="/customer-profile">Gordan Whelan</Link></h3>
												<div className="customer-details">
													<h5><FontAwesomeIcon icon={faClock} /> 14 Nov 2020, 10.00 AM</h5>
													<h5><FontAwesomeIcon icon={faEnvelope} /> gordan@example.com</h5>
													<h5 className="mb-0"><FontAwesomeIcon icon={faPhone} /> +1 923 782 4575</h5>
												</div>
											</div>
										</div>
										<div className="appointment-action">
											<Link to="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
												<FontAwesomeIcon icon={faEye} /> Xem
											</Link>
											<Link to="#" className="btn btn-sm bg-success-light">
												<FontAwesomeIcon icon={faCheck} /> Chấp nhận
											</Link>
											<Link to="#" className="btn btn-sm bg-danger-light">
												<FontAwesomeIcon icon={faTimes} /> Hủy
											</Link>
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
export { Appointments };