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
import { faCheck, faEye, faTimes } from '@fortawesome/fontawesome-free-solid';

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
		localStorage.setItem("status",value)
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
											<h4 className="mb-4">Lịch hẹn khách hàng</h4>
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
																				<th className="text-center">Số tiền thanh toán(VNĐ)</th>
																				<th className="text-center">Trạng thái</th>
																				<th></th>
																			</tr>
																		</thead>
																		{
																			this.state.appointment.map(item =>
																				<tbody>
																					<tr>
																						<td>
																							<h2 className="table-avatar">
																								<Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" /></Link>
																								<Link to="/customer-profile">{item.cus[0].name} <span>{item.ida}</span></Link>
																							</h2>
																						</td>
																						<td>{item.date_reserved} <span className="d-block text-info">{item.start_time + ':00'}</span></td>
																						<td className="text-center">{item.price}</td>
																						<td className="text-center">{item.status}</td>
																						<td className="text-right">
																							<div className="table-action">
																								<Link to="/view-invoice" className="btn btn-sm bg-info-light mr-1">
																									<FontAwesomeIcon icon={faEye} /> Xem
																								</Link>
																								<button onClick={() => this.handleButtonClick(item.ida+" Xác nhận")}>
																									<Link to="/accept" className="btn btn-sm bg-success-light mr-1">
																										<FontAwesomeIcon icon={faCheck} /> Chấp nhận
																									</Link>
																								</button>
																								<button onClick={() => this.handleButtonClick(item.ida+" Hủy")}>
																									<Link to="/cancel" className="btn btn-sm bg-danger-light">
																										<FontAwesomeIcon icon={faTimes} /> Hủy
																									</Link>
																								</button>
																							</div>
																						</td>
																					</tr>
																				</tbody>
																			)}
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
export { StaffDashboard };