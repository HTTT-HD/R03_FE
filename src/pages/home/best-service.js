import React from 'react';
import { Link } from 'react-router-dom'

// Import Slick Slider
import Slider from "react-slick";
import CustomerImg from '../../assets/img/customers/customer.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid';

class BestService extends React.Component {

	// state= {
	//     responsive:{
	//         0: {
	//             items: 1,
	//         },
	//         450: {
	//             items: 1,
	//         },
	//         600: {
	//             items: 2,
	//         },
	//         1000: {
	//             items: 2,
	//         },
	//     },
	// }

	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			services: []
		};
	}

	componentDidMount() {
		fetch("http://localhost:3003/product/")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						services: result
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

						<div className="col-md-7 col-lg-8 col-xl-9">
							<div className="row row-grid">
								<div className="col-md-6 col-lg-5 col-xl-3">
									<div className="card widget-profile pat-widget-profile">
									{this.state.services.map(item=>(
										<div className="card-body">
											<div className="pro-widget-content">
												<div className="profile-info-widget">
													<Link to="/customer-profile" className="booking-doc-img">
														<img src={item.img} alt="User Image" />
													</Link>
													<div className="profile-det-info">
														<h3><Link to="/customer-profile"></Link>{item.tensanpham}</h3>
													</div>
												</div>
											</div>
											<div className="customer-info">
												<ul>
													<li>Số lượng <span>{item.soluong}</span></li>
													<li>Đơn giá <span>{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(item.dongia)+'VNĐ'}</span></li>
													<li>Loại sản phẩm <span>{item.loaisanpham}</span></li>
												</ul>
											</div>
										</div>
									))}
									</div>
								</div>
								
								
								
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
							<Link to="/booking-service" className="btn-pink">tất cả sản phẩm</Link>
						</div>
					</div>
				</section>

				{/* Top Stylist */}
			</div>
		)
	}
}
export { BestService };