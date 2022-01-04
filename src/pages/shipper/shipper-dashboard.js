import React from 'react';
import { Link } from 'react-router-dom'

// Import Sidebar
import { ShipperSidebar } from './shipper-sidebar';

// Import Components
import { Tabs, Tab } from "react-bootstrap";

import UserAvatar from '../../assets/img/customers/customer.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEye, faTimes } from '@fortawesome/fontawesome-free-solid';

class ShipperDashboard extends React.Component {
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
										<li className="breadcrumb-item active" aria-current="page">Dashboard</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Dashboard</h2>
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
								<ShipperSidebar />
							</div>
							<div className="col-md-7 col-lg-8 col-xl-9">
								<div className="row">
									<div className="col-md-12">
										<div className="card dash-card">
											<div className="card-body">
												<div className="row">
													<div className="col-md-12 col-lg-4">
														<div className="dash-widget dct-border-rht">
															<div className="dash-widget-info">
																<h6>Tổng đối tác</h6>
																<h3>1500</h3>
															</div>
														</div>
													</div>
													<div className="col-md-12 col-lg-4">
														<div className="dash-widget dct-border-rht">
															<div className="dash-widget-info">
																<h6>Đối tác hôm nay</h6>
																<h3>1500</h3>
															</div>
														</div>
													</div>
													<div className="col-md-12 col-lg-4">
														<div className="dash-widget dct-border-rht">
															<div className="dash-widget-info">
																<h6>Khách hàng hôm nay</h6>
																<h3>160</h3>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="row">							
									<div className="col-md-12">
										<h4 className="mb-4">Khách hàng</h4>
										<div className="appointment-tab">
											<Tabs defaultActiveKey="upcoming" id="uncontrolled-tab-example">
												<Tab eventKey="upcoming" title="Sắp tới">
													<div className="card card-table mb-0">
														<div className="card-body">
															<div className="table-responsive">
																<table className="table table-hover table-center mb-0">
																	<thead>
																		<tr>
																			<th>Tên khách hàng</th>
																			<th>Ngày hẹn</th>
																			<th>Mục đích</th>
																			<th className="text-center">Số tiền thanh toán</th>
																			<th></th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td>
																				<h2 className="table-avatar">
																					<Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" /></Link>
																					<Link to="/customer-profile">Gordan Whelan <span>#PT0016</span></Link>
																				</h2>
																			</td>
																			<td>11 Nov 2019 <span className="d-block text-info">10.00 AM</span></td>
																			<td>Nail Art</td>
																			<td className="text-center">$150</td>
																			<td className="text-right">
																				<div className="table-action">
																					<Link to="/view-" className="btn btn-sm bg-info-light mr-1">
																						<FontAwesomeIcon icon={faEye} /> Xem
																					</Link>
																					<Link to="#" className="btn btn-sm bg-danger-light">
																						<FontAwesomeIcon icon={faTimes} /> Hủy
																					</Link>
																				</div>
																			</td>
																		</tr>
																	</tbody>
																</table>		
															</div>
														</div>
													</div>
												</Tab>
											</Tabs>
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
export { ShipperDashboard };