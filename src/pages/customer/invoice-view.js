import React from 'react';
import { Link } from 'react-router-dom'

// Import Image
import Logo from '../../assets/img/logo.png';
import { DOMAIN } from '../../constants';

class InvoiceView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			order:[],
			product:[]
		};
	}

	componentDidMount() {
		fetch(`${DOMAIN}/Order/detail?donHangId=${localStorage.getItem("id_order")}`,
		    {
                method:"GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`
                }
		    })
			.then(res => res.json())
			.then(res =>{
				console.log(res)
				this.setState({
					order:res.data,
					product:res.data.chiTiets
				})
			})
	}

	render() {
		let{order,product}=this.state;
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
										<li className="breadcrumb-item active" aria-current="page">Xem hóa đơn</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Xem hóa đơn</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content */}
				<div className="content">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 offset-lg-2">
								<div className="invoice-content">
									<div className="invoice-item">
										<div className="row">
											<div className="col-md-6">
												<div className="invoice-logo">
													<img src={Logo} alt="logo" />
												</div>
											</div>
										</div>
									</div>
									{/* Invoice Item */}
									<div className="invoice-item">
										<div className="row">
											<div className="col-md-12">
												<div className="invoice-info">
													<strong className="customer-text">Phương thức thanh toán</strong>
													<p className="invoice-details invoice-details-two"> {order.tenLoaiThanhToan} </p><br />
													<strong className="customer-text">Mua tại cửa hàng: {order.tenCuaHang}</strong>
													
													<strong className="customer-text">Người giao hàng</strong>
													<p className="invoice-details invoice-details-two">	{order.tenNguoiGiao} </p>
				
													<strong className="customer-text">Giao đến</strong>
													<p className="invoice-details invoice-details-two">	{order.diaChiNhan} </p>
												</div>
											</div>
										</div>
									</div>
									{/* Invoice Item */}

									{/* Invoice Item */}
									<div className="invoice-item invoice-table-wrap">
										<div className="row">
											<div className="col-md-12">
												<div className="table-responsive">
													<table className="invoice-table table table-bordered">
														<thead>
															<tr>
																<th>Sản phẩm</th>

																<th className="text-center">Số lượng</th>
																<th className="text-right">Đơn giá</th>
															</tr>
														</thead>
														<tbody>
														{product.map(item =>
																
																	<tr>
																		<td>
																			<span>
																			{item.tenSanPham}
																			</span>
																		</td>
																		<td className="text-center">{item.soLuong}</td>
																		<td className="text-right">{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(item.donGia)} VNĐ</td>
																	</tr>
																

														)
															}
														</tbody>
													</table>
												</div>
											</div>
											<div className="col-md-6 col-xl-4 ml-auto">
												<div className="table-responsive">
													<table className="invoice-table-two table">
														<tbody>
															<tr>
																<th>Tổng:</th>
																<td><span>{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(order.tongTien)} VNĐ</span></td>
															</tr>
															<tr>
																<th>Phí giao hàng:</th>
																<td><span>{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(order.tienShip)} VNĐ</span></td>
															</tr>
															<tr>
																<th>Tổng tạm tính:</th>
																<td><span>{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(order.tongTien+order.tienShip)} VNĐ</span></td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
									{/* Invoice Item */}

									{/* Invoice Information */}
									{/* Invoice Information */}

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
export { InvoiceView };