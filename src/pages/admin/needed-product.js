import React from 'react';
import { Link } from 'react-router-dom'

// Import Sidebar
import { StaffSidebar } from './staff-sidebar';

// Import Images
import UserAvatar from '../../assets/img/customers/customer.jpg'

class NeededProduct extends React.Component {
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
										<li className="breadcrumb-item active" aria-current="page">Mặt hàng thiết yếu</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Mặt hàng thiết yếu</h2>
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
										<h4 className="mb-4">Top những mặt hàng thiết yếu</h4>
										<div className="appointment-tab">
											<div className="card card-table mb-0">
												<div className="card-body">
													<div className="table-responsive">
														<table className="table table-hover table-center mb-0">
															<thead>
																<tr>
																	<th>Tên sản phẩm</th>
																	<th>Danh mục sản phẩm</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																		<h2 className="table-avatar">
																			<Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" /></Link>
																			<Link to="/customer-profile">Tên sản phẩm <span>#PT0016</span></Link>
																		</h2>
																	</td>
																	<td className="text-center">Thịt</td>
																</tr>
                                                                <tr>
																	<td>
																		<h2 className="table-avatar">
																			<Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" /></Link>
																			<Link to="/customer-profile">Tên sản phẩm <span>#PT0016</span></Link>
																		</h2>
																	</td>
																	<td className="text-center">Gạo</td>
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
export { NeededProduct };