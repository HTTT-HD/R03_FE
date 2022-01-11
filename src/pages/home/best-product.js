import React from 'react';
import { Link } from 'react-router-dom'
import { DOMAIN } from './../../constants'
// Import Slick Slider
import Slider from "react-slick";
import CustomerImg from '../../assets/img/customers/customer.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid';

class BestProduct extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			sanphams: []
		};
	}

	componentDidMount() {
        fetch(`${DOMAIN}/product/get-all?PageIndex=1&PageSize=10`).then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        sanphams: result.data.items
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
		}


	render() {

		var settings = {
			dots: false,
			infinite: true,
			speed: 700,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 776,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 567,
				settings: {
					slidesToShow: 1
				}
			}]
		};

		return (
			<div>
				{/* Top Courses */}
				<section className="section services">
					<div className="container">
						<div className="row justify-content-center">
							<div className="section-header text-center">
								<h2>Những sản phẩm best seller</h2>
							</div>
						</div>
						<div className="container">
								<div className="row ">
									{this.state.sanphams.map((item) => (
										<div className="col-md-3 col-sm-6">
											<div className="card widget-profile pat-widget-profile">
												<div className="card-body">
													<div className="pro-widget-content">
														<div className="profile-info-widget">
															<Link to="/customer-profile" className="booking-doc-img">
																<img src={item.img} alt="User Image" />
															</Link>
															<div className="profile-det-info">
																<h3>
																	<Link to="/customer-profile"></Link>
																	{item.tenSanPham}
																</h3>
															</div>
														</div>
													</div>
													<div className="customer-info">
														<ul>
															<li>
																Số lượng <span>{item.soLuong}</span>
															</li>
															<li>
																Đơn giá <span>{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(item.donGia) + "VNĐ"}</span>
															</li>
															<li>
																Loại sản phẩm <span>{item.tenDanhMuc}</span>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									))}
								
							</div>
						</div>
						{/* <Slider {...settings} className="stylist-slider">

							{
								this.state.services.slice(0, 8).map(service => (
									<div className="profile-widget">
										<div className="doc-img">
											<Link to="#">
												<img
													className="img-fluid"
													alt="User Image"
													src={service.img}
												/>
												<div className="wrap-sec">
													<div>
														<h3>{service.name}</h3>
													</div>
												</div>
											</Link>
										</div>
									</div>
								))
							}
						</Slider> */}

						<div className="row justify-content-center">
							<Link to="/list-product" className="btn-pink">tất cả sản phẩm</Link>
						</div>
					</div>
				</section>

				{/* Top Stylist */}
			</div >
		)
	}
}
export { BestProduct };