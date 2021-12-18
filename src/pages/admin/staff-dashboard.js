import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

// Import Sidebar
import { StaffSidebar } from './staff-sidebar';

// Import Components
import { Tabs, Tab } from "react-bootstrap";

// Import Images
import UserAvatar from '../../assets/img/customers/customer.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEdit, faEye, faSearch, faTimes } from '@fortawesome/fontawesome-free-solid';

class StaffDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			appointment: [],
			status: "",
			redirect: false
		};
	}
	handleButtonClick(value) {
		localStorage.setItem("status", value)
	}
	componentDidMount() {
		fetch("http://localhost:3000/employee/dashboard")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						appointment: result.appoint
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
								<StaffSidebar />
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
										<div className="card dash-card">
											<div className="card-body">
												<div className="row">
													<div className="col-md-12 col-lg-4">
														<div className="dash-widget dct-border-rht">
															<div className="dash-widget-info">
																<h6>Tổng lợi nhuận</h6>
																<h3>12.000.000VND</h3>
															</div>
														</div>
													</div>
													<div className="col-md-12 col-lg-4">
														<div className="dash-widget dct-border-rht">
															<div className="dash-widget-info">
																<h6>Tổng lợi nhuận từ khách hàng</h6>
																<h3>10.000.000</h3>
															</div>
														</div>
													</div>
													<div className="col-md-12 col-lg-4">
														<div className="dash-widget dct-border-rht">
															<div className="dash-widget-info">
																<h6>Tổng lợi nhuận từ giao hàng</h6>
																<h3>2.000.000</h3>
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
										<div className="card dash-card">
											<div className="card-body">
												<div className="row">
													<div className="col-md-12 col-lg-4">
														<div className="dash-widget dct-border-rht">
															<div className="dash-widget-info">
																<h6>Tổng đơn hàng</h6>
																<h3>3000</h3>
															</div>
														</div>
													</div>
													<div className="col-md-12 col-lg-4">
														<div className="dash-widget dct-border-rht">
															<div className="dash-widget-info">
																<h6>Tổng đơn hàng thành công</h6>
																<h3>1000</h3>
															</div>
														</div>
													</div>
													<div className="col-md-12 col-lg-4">
														<div className="dash-widget dct-border-rht">
															<div className="dash-widget-info">
																<h6>Tổng đơn hàng bị hủy</h6>
																<h3>2000</h3>
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
										<h4 className="mb-4">Top khách hàng mua nhiều nhất</h4>
										<div className="appointment-tab">
											<div className="card card-table mb-0">
												<div className="card-body">
													<div className="table-responsive">
														<table className="table table-hover table-center mb-0">
															<thead>
																<tr>
																	<th>Tên khách hàng</th>
																	<th className="text-center">Tổng tiền đã mua</th>
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
																	<td className="text-center">5.000.000VND</td>
																	<td className="text-right">
																		<div className="table-action">
																			<Link to="/view-" className="btn btn-sm bg-info-light mr-1">
																				<FontAwesomeIcon icon={faEye} /> Xem
																			</Link>
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
										</div>
										<h4 className="mb-4">Top đối tác bán chạy nhất</h4>
										<div className="appointment-tab">
											<div className="card card-table mb-0">
												<div className="card-body">
													<div className="table-responsive">
														<table className="table table-hover table-center mb-0">
															<thead>
																<tr>
																	<th>Tên đối tác</th>
																	<th>Tên cửa tiệm</th>
																	<th className="text-center">Tổng tiền đã thu</th>
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
																	<td className="text-center">A lo</td>
																	<td className="text-center">5.000.000VND</td>
																	<td className="text-right">
																		<div className="table-action">
																			<Link to="/view-" className="btn btn-sm bg-info-light mr-1">
																				<FontAwesomeIcon icon={faEye} /> Xem
																			</Link>
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
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
export { StaffDashboard };