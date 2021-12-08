import React from 'react';
import { Link } from 'react-router-dom'

// Import Image
import Logo from '../../assets/img/logo.png';

class InvoiceView extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            orderid: "",
			name:"",
			date_cre:"",
			service:[],
			total: 0
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3000/invoice/${localStorage.getItem("id_app")}`)
            .then(response => response.json())
            .then(data => 
				{
				
					//adding none zero value 
					let total = 0 ;
					for(let i = 0 ; i < data.sv.length ; i++)
					{
						total += +data.sv[i].price//+ => convert string to int
					}
					
					// adding zero value to total
					let money =  data.sv[0].price; 
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

					total = total*count;
					total = new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(total)

					this.setState(
						{
						oderid: data.invoice.ida, 
						name: data.cus[0].name,
						date_cre: data.invoice.date_created,
						service:data.sv,
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
													<p className="invoice-details invoice-details-two">Thanh toán tại cửa hàng </p>
													<p className="invoice-details invoice-details-two">	Order: {this.state.oderid}</p> 
													<p className="invoice-details invoice-details-two">	Issued: {this.state.date_cre} </p>
													<p className="invoice-details invoice-details-two">	Invoice From: Nàng Beauty </p>
													<p className="invoice-details invoice-details-two">	Invoice To: {this.state.name} </p>
													
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
																<th>Dịch vụ</th>
																
																<th className="text-center">VAT</th>
																<th className="text-right">Tổng</th>
															</tr>
														</thead>
														<tbody>
															{
																this.state.service.map(service=>
																	<tr>

																	<td>
																		<span>
																			{service.name}
																		</span>
																	</td>
																	
																	<td className="text-center">0</td>
																	<td className="text-right">{service.price}</td>
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
															<th>Tổng tạm tính:</th>
															<td><span>{this.state.total}</span></td>
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