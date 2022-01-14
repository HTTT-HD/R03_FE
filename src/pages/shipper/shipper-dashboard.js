import React from 'react';
import { Link ,Redirect} from 'react-router-dom'

// Import Sidebar
import { ShipperSidebar } from './shipper-sidebar';
import { DOMAIN } from './../../constants';
// Import Components
import { Tabs, Tab } from "react-bootstrap";

import UserAvatar from '../../assets/img/customers/customer.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEye, faTimes } from '@fortawesome/fontawesome-free-solid';

class ShipperDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			orders: [],
			redirect:false
		};
		this.handleButtonClick=this.handleButtonClick.bind(this)
	}
	handleClick(event) {
		localStorage.setItem("id_order",event)
	}
	componentDidMount() {
		fetch(`${DOMAIN}/Order/get-all?PageIndex=1&PageSize=20`,
			{
				method: "GET",
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`
				}
			})
			.then(res => res.json())
			.then(
				(res) => {
					this.setState({
						orders: res.data.items
					})
				}
			)
	}
	handleButtonClick(event){
		localStorage.setItem("id_order",event)
		fetch(`${DOMAIN}/Order/receive?donHangId=${event}`,
			{
				method:"PUT",
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`
				}
			})
			.then(res => res.json())
			.then(res=>{
				if(res.succeeded){
					alert("Nhận đơn hàng thành công")
					this.setState({
						redirect:true
					})
				}
			})
	}
    render() {

		if (this.state.redirect) {
            return <Redirect to='invoice-view' />;
        }
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
																<h6>Tổng khách hàng</h6>
																<h3>150</h3>
															</div>
														</div>
													</div>
													<div className="col-md-12 col-lg-4">
														<div className="dash-widget dct-border-rht">
															<div className="dash-widget-info">
																<h6>Khách hàng hôm nay</h6>
																<h3>15</h3>
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
												<Tab eventKey="upcoming" title="">
													<div className="card card-table mb-0">
														<div className="card-body">
															<div className="table-responsive">
																<table className="table table-hover table-center mb-0">
																	<thead>
																		<tr>
																			<th>Tên khách hàng</th>
																			<th>Ngày giao</th>
																			<th>Địa chỉ</th>
																			<th className="text-center">Số tiền thanh toán</th>
																			<th></th>
																		</tr>
																	</thead>
																	<tbody>
																		{
																			this.state.orders.map(item => (
																				<tr>
																					<td>
																						<h2 className="table-avatar">
																							{/* <Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" /></Link> */}
																							<Link to="/customer-profile">{item.nguoiDat}</Link>
																						</h2>
																					</td>
																					<td>{new Date(item.ngayTao).toLocaleString()} <span className="d-block text-info"></span></td>
																					<td>{item.diaChiNhan}</td>
																					<td className="text-center">{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(item.tongTien + item.tienShip)} VNĐ</td> 
																					<td><span className="badge badge-pill bg-danger-light">{item.tenTrangThai}</span></td>
																					<td className="text-right">
																						<div className="table-action">
																							{/* {new Date(item.ngayTao) > Date.now() ? 
																								(
																									<div className="btn btn-sm bg-info-light mr-1">
																										<FontAwesomeIcon icon={faCheck} /> Nhận
																									</div>
																								) : null
																							} */}
																							
																							<button className="btn btn-sm bg-info-light mr-1" onClick={()=>{this.handleButtonClick(item.id)}}><FontAwesomeIcon icon={faCheck} /> Nhận</button>	
																							
																							<Link to="/invoice-view" onClick={()=>{this.handleClick(item.id)}} className="btn btn-sm bg-info-light mr-1">Xem
																						
																							</Link>
																						</div>
																					</td>
																				</tr>
																			))
																		}
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