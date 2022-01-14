import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'Axios'

import { CustomerSidebar } from './customer-sidebar';

// Import Components
import { Tabs, Tab } from "react-bootstrap";

// Import Images
import UserAvatar2 from '../../assets/img/stylists/stylist-thumb-03.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEye, faPrint, faTimes } from '@fortawesome/fontawesome-free-solid';
import { DOMAIN } from '../../constants';

class CustomerDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			appointment: [],
			status: "",
			info:[],
			order:[],
			redirect: false
		};
		this.handleCancel=this.handleCancel.bind(this)
	}
	handleClick(event) {
		localStorage.setItem("id_order",event)
	}
	componentDidMount() {
		Promise.all([
		fetch(`${DOMAIN}/ThanhVien/user-login`,
		{
			method:"GET",
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`
			}
		}),
		fetch(`${DOMAIN}/Order/get-all-for-user`,
		    {
                method:"GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`
                }
		    })
		])
			.then(([res1,res2]) => Promise.all([res1.json(), res2.json()]))
			.then(
				([result1,result2]) => {
					console.log(result2)
					this.setState({
						isLoaded: true,
						info: result1.data,
						order:result2.data.items
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
	handleCancel(event) {
		Promise.all([
			fetch(`${DOMAIN}/Order/reject?donHangId=${event}`,
			{
				method:"PUT",
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`
				}
			})
			,
			fetch(`${DOMAIN}/Order/get-all-for-user`,
		    {
                method:"GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`
                }
		    })
		])
			.then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
			.then(
				([result1,result2]) => {
					console.log(result1,result2)
					this.setState({
							isLoaded: true,
							order:result2.data.items
					})

				},
				(error) => {
					this.setState({
						isLoaded: false,
						error
					})
				}
			)
	}
    render() {
		let {order} = this.state;
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
							{/* Profile Sidebar */}
							<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
								<CustomerSidebar />
							</div>
							{/* Profile Sidebar */}
							<div className="col-md-7 col-lg-8 col-xl-9">
								<div className="card database-tbl">
									<div className="card-body">
										<Tabs defaultActiveKey="appointments" id="uncontrolled-tab-example">
											<Tab eventKey="appointments" title="Lịch sử mua hàng">
												<div className="card card-table mb-0">
													<div className="card-body">
														<div className="table-responsive">
															<table className="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Tên</th>
																		<th>Cửa hàng mua</th>
																		<th>Hình thức thanh toán</th>
																		<th>Tổng hóa đơn(chưa tính ship)</th>
																	
																		<th></th>
																	</tr>
																</thead>
																{order.map(item=>
																<tbody key={item.khid}>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar2} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">{item.nguoiDat}</Link>
																			</h2>
																		</td>
																		<td>{item.tenCuaHang} <span className="d-block text-info"></span></td>
																		<td>{item.tenLoaiThanhToan}</td>
																		<td>{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(item.tongTien)} VNĐ</td>
																		<td><span className="badge badge-pill bg-danger-light">{item.tenTrangThai}</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				
																					<Link to="/invoice-view" onClick={()=>{this.handleClick(item.id)}} className="btn btn-sm bg-info-light mr-1">
																						<FontAwesomeIcon icon={faEye} /> Xem
																					</Link>
																				
																				
																					<button className="btn btn-sm bg-danger-light"onClick={()=>{this.handleCancel(item.id)}} >
																						<FontAwesomeIcon icon={faTimes} /> Hủy
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
				{/* Page Content */}
			</div>
        )
    }
}
export { CustomerDashboard };