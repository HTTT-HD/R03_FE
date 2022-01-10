import React from 'react';
import { Link } from 'react-router-dom'

// Import Images
import CustomerImg from '../../assets/img/customers/customer.jpg';

// Import Components
import { Modal, Tabs, Tab } from "react-bootstrap";

// Import Images
import UserAvatar from '../../assets/img/stylists/stylist-thumb-01.jpg';
import UserAvatar1 from '../../assets/img/stylists/stylist-thumb-02.jpg';
import UserAvatar2 from '../../assets/img/stylists/stylist-thumb-03.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPrint, faMapMarkerAlt, faEdit, faTrashAlt, faClock } from '@fortawesome/fontawesome-free-solid';
import { DOMAIN } from '../../constants';

class CustomerProfile extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false,
			isLoaded: false,
			info:[]
		}
	}
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
						info: result.data
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
	openModal = () => {
		this.setState({
			showModal: !this.state.showModal
		})
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
										<li className="breadcrumb-item active" aria-current="page">Hồ sơ khách hàng</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Hồ sơ khách hàng</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content */}
				<div className="content">
					<div className="container">
						
						<div className="row">
							{/* Profile Sidebar */}
							<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
								<div className="card widget-profile pat-widget-profile">
									<div className="card-body">
										<div className="pro-widget-content">
											<div className="profile-info-widget">
												<Link to="#" className="booking-doc-img">
													<img src={CustomerImg} alt="User Image" />
												</Link>
												<div className="profile-det-info">
													<h3>Tên khách hàng</h3>
													
													<div className="customer-details">
														<h5><b>ID khách hàng :</b> PT0016</h5>
													</div>
												</div>
											</div>
										</div>
										<div className="customer-info">
											<ul>
												<li>Số diện thoại <span>0961239388</span></li>
												<li>Sinh ngày <span>01.01.2000</span></li>
												<li>Giới tính <span>Nữ</span></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							{/* Profile Sidebar */}

							<div className="col-md-7 col-lg-8 col-xl-9">
								<div className="card database-tbl">
									<div className="card-body">
										<Tabs defaultActiveKey="appointments" id="uncontrolled-tab-example">
											<Tab eventKey="appointments" title="Đơn hàng hôm nay">
												<div className="card card-table mb-0">
													<div className="card-body">
														<div className="table-responsive">
															<table className="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Cửa hàng</th>
																		<th>Thời gian đặt</th>
																		<th>Chi phí</th>
																		<th>Trạng thái</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Tên cửa hàng <span>SĐT</span></Link>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span className="d-block text-info">10.00 AM</span></td>
																		<td>160.000VND</td>
																		<td><span className="badge badge-pill bg-success-light">Xác nhận</span></td>
																		<td className="text-right">
																			<div className="table-action">
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Tên cửa hàng <span>SĐT</span></Link>
																			</h2>
																		</td>
																		<td>11 Nov 2019 <span className="d-block text-info">11.00 AM</span></td>
																		<td>400.VND</td>
																		<td><span className="badge badge-pill bg-danger-light">Đã hủy</span></td>
																		<td className="text-right">
																			<div className="table-action">
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Tên cửa hàng <span>SĐT</span></Link>
																			</h2>
																		</td>
																		<td>10 Nov 2019 <span className="d-block text-info">3.00 PM</span></td>
																		<td>350.000VND</td>
																		<td><span className="badge badge-pill bg-warning-light">Đang xử lí</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTrashAlt} /> Hủy
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
											<Tab eventKey="customer-history" title="Lịch sử mua hàng">
												<div className="card card-table mb-0">
													<div className="card-body">
														<div className="table-responsive">
															<table className="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>ID</th>
																		<th>Ngày mua </th>
																		<th>Cửa hàng </th>
																		<th>Chi phí</th>
																	</tr>     
																</thead>
																<tbody>
																	<tr>
																		<td><Link to="#">#MR-0010</Link></td>
																		<td>14 Nov 2020</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Tên cửa hàng <span>SĐT cửa hàng</span></Link>
																			</h2>
																		</td>
																		<td>100.000VND</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="/invoice-view" className="btn btn-sm bg-info-light">
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
											</Tab>
										</Tabs>
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
export { CustomerProfile };