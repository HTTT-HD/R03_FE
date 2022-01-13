import React from 'react';
import { Link } from 'react-router-dom'

import { StaffSidebar } from './staff-sidebar';
import { DOMAIN } from '../../constants';


// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/fontawesome-free-solid';

class Invoices extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			hoadons: []
		};
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}
	componentDidMount(){
        fetch(`${DOMAIN}/Order/get-all`,
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
            (res) => {
                this.setState({
                    hoadons: res.data.items
                })
                console.log(res.data.items)
            }
        )
    }
	handleButtonClick(value) {
		localStorage.setItem("pro_id", value)
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
										<li className="breadcrumb-item active" aria-current="page">Hóa đơn</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Hóa đơn</h2>
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
								<div className="card card-table">
									<div className="card-body">

										{/* Invoice Table */}
										<div className="table-responsive">
											<table className="table table-hover table-center mb-0">
												<thead>
													<tr>
														<th>Khách hàng</th>
														<th>Cửa hàng</th>
														<th>Chi phí</th>
														<th>Được trả vào</th>
														<th></th>
													</tr>
												</thead>
												<tbody>
													{
														this.state.hoadons.map(hoadon => (
															<tr>

																<td>
																	<h2 className="table-avatar">
																		<Link to="/customer-profile" className="avatar avatar-sm mr-2">
																			<img className="avatar-img rounded-circle" src={UserImg} alt="User Image" />
																		</Link>
																		<Link to="/customer-profile">Gordan Whelan <span>#PT0016</span></Link>
																	</h2>
																</td>
																<td>
																	<h2 className="table-avatar">
																		<Link to="/customer-profile" className="avatar avatar-sm mr-2">
																			<img className="avatar-img rounded-circle" src={UserImg} alt="User Image" />
																		</Link>
																		<Link to="/customer-profile">Gordan Whelan <span>#PT0016</span></Link>
																	</h2>
																</td>
																<td>450.000VND</td>
																<td>14 Nov 2019</td>
																<td className="text-right">
																	<div className="table-action">
																		<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																			<FontAwesomeIcon icon={faEye} /> Xem
																		</Link>
																	</div>
																</td>
															</tr>
														))}
												</tbody>
											</table>
										</div>
										{/* Invoice Table */}

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
export { Invoices };