import React from 'react';
import { Link } from 'react-router-dom'

// Import Image
import Logo from '../../assets/img/logo.png';

class InvoiceView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			orderid: "",
			name: "",
			date_cre: "",
			service: [],
			total: 0
		};
	}

	componentDidMount() {
		fetch('http://localhost:3003/order/')
			.then(response => response.json())
			.then(data => {
				console.log(data)
				//adding none zero value 
				let total = 0;
				let count = 0;
				for (let i = 0; i < data[0].sanpham.length; i++) {
					count = data[0].sanpham[i].soluong;
					total += data[0].sanpham[i].dongia * count//+ => convert string to in
				}

				// adding zero value to total
				/*
				let money =  data[0].sanpham[0].dongia; 
				let count = 1;
				for(let i = money.length - 1 ; i >= 0 ; i--)
				{
					if(money[i] !== '.')
					{
						count *= 10;
					}
					else
					{
						break;
					}
				}

				total = total*count;*/
				total = new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(total)

				this.setState(
					{
						//oderid: data., 
						//name: data.cus[0].name,
						date_cre: data[0].ngaydat,
						service: data[0].sanpham,
						total: total
					})


			});
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
													<p className="invoice-details invoice-details-two"> Thanh toán sau khi nhận hàng: </p><br />
													<strong className="customer-text">Mua tại cửa hàng: Tên cửa hàng</strong>
													<p className="invoice-details invoice-details-two">	Địa chỉ cửa hàng: 277 Nguyễn văn cừ</p><br />
													<strong className="customer-text">Người giao hàng</strong>
													<p className="invoice-details invoice-details-two">	Tên người giao hàng: </p>
													<p className="invoice-details invoice-details-two">	Số điện thoại người giao hàng:  </p><br />
													<strong className="customer-text">Giao đến</strong>
													<p className="invoice-details invoice-details-two">	Địa chỉ giao: </p>
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
															{
																this.state.service.map(service =>
																	<tr>
																		<td>
																			<span>
																				{service.tensanpham}Tên sản phẩm
																			</span>
																		</td>
																		<td className="text-center">{service.soluong}3</td>
																		<td className="text-right">{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(service.dongia) + 'VNĐ'}100.000VND</td>
																	</tr>
																)

															}
															<tr>
																<td>
																	<span>
																		Tên sản phẩm
																	</span>
																</td>
																<td className="text-center">3</td>
																<td className="text-right">100.000VND</td>
															</tr>
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
																<td><span>{this.state.total + 'VNĐ'}</span></td>
															</tr>
															<tr>
																<th>Phí giao hàng:</th>
																<td><span>{this.state.total + 'VNĐ'}</span></td>
															</tr>
															<tr>
																<th>Tổng tạm tính:</th>
																<td><span>{this.state.total + 'VNĐ'}</span></td>
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