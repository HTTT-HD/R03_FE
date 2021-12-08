import React from 'react';
import { Link } from 'react-router-dom'
// Import Slick Slider
import Slider from "react-slick";

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid';

class TopStylist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			employees: []
		};
	}

	componentDidMount() {
		fetch("http://localhost:3000/")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						employees: result.employee
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
				{/* Top Stylist */}
				<section className="section stylists">
					<div className="container">
						<div className="row justify-content-center">
							<div className="section-header text-center">
								<h2>Nhân viên nail hàng đầu của Nàng beauty</h2>
								<p className="sub-title">Top những nhà tạo mẫu được yêu thích</p>
							</div>
						</div>

						<Slider {...settings} className="stylist-slider">

							{
								this.state.employees.map(employee => (
									<div className="profile-widget">
										<div className="doc-img">
											<Link to="/stylist-profile">
												<img className="img-fluid" alt="User Image" src={employee.img} />
											</Link>
										</div>
										<div className="pro-content">
											<h3 className="title text-center">
												<Link to="/stylist-profile">{`${employee.lastname} ${employee.firstname}`}</Link>
											</h3>
											<div className="rating text-center">
												{
													[...Array(employee.rate | 0).fill(1), ...Array(5 - (employee.rate | 0)).fill(0)].map(i => {
														return i ?
															(<FontAwesomeIcon icon={faStar} className='filled' />) :
															(<FontAwesomeIcon icon={faStar} />)
													})
												}
											</div>
											<div className="row row-sm mb-4 text-center">
												<div className="col-6">
													<p>Kinh nghiệm</p>
													<p className="num">{employee.experience}</p>
												</div>
												<div className="col-6">
													<p>Đã tham gia</p>
													<p className="num">{employee.attended}</p>
												</div>
											</div>
											<div className="row row-sm justify-content-center">
												<Link to="/booking-service" className="btn-pink">Đặt lịch ngay</Link>
											</div>
										</div>
									</div>
								))
							}
						</Slider>

						<div className="row justify-content-center">
							<Link to="booking-stylist" className="btn-pink">Tất cả nhân viên Nail</Link>
						</div>
					</div>
				</section>

				{/* Top Stylist */}
			</div>
		)
	}
}
export { TopStylist };