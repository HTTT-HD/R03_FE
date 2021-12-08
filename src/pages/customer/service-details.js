import React from 'react';
import { Link } from 'react-router-dom'

import BlogImg from '../../assets/img/blog/blog-11.jpg';

class ServiceDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			services: []
		};
	}

	componentDidMount() {
		fetch("http://localhost:3000/booking-service")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						services: result.service
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
        return (
			<div>
				
				<div className="breadcrumb-bar service-bg">
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-md-12 col-12">
								<nav aria-label="breadcrumb" className="page-breadcrumb">
									<ol className="breadcrumb justify-content-center">
										<li className="breadcrumb-item"><Link to="/">Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Service</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title text-center">Service Details</h2>
							</div>
						</div>
					</div>
				</div>

				<div className="card search-widget">
						<div className="card-body">
							<form className="search-form">
								<div className="input-group">
									<input type="text" placeholder="Tìm kiếm..." className="form-control" />
									<div className="input-group-append">
										<button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faSearch} /></button>
									</div>
								</div>
							</form>
						</div>
				</div>

					{/* Page Content */}
					<div className="content">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
									{/* Search Filter */}
									<div className="card search-filter">
										<div className="card-body">
											<div className="filter-widget">
												<h4>Loại dịch vụ</h4>
												<div>
													<label className="custom_check">
														<input type="checkbox" name="gender_type"/>
														<span className="checkmark"></span> Dịch vụ chăm sóc móng
													</label>
												</div>
												<div>
													<label className="custom_check">
														<input type="checkbox" name="gender_type" />
														<span className="checkmark"></span> Dịch vụ chăm sóc
													</label>
												</div>
												<h4>Sắp xếp</h4>
												<div>
													<label className="custom_check">
														<input type="checkbox" name="gender_type"/>
														<span className="checkmark"></span> Giá từ thấp đến cao
													</label>
												</div>
												<div>
													<label className="custom_check">
														<input type="checkbox" name="gender_type" />
														<span className="checkmark"></span> Giá từ cao đến thấp
													</label>
												</div>
											</div>
											<div className="btn-search">
												<button type="button" className="btn btn-block">Tìm kiếm</button>
											</div>
										</div>
									</div>
								
								</div>
								<div className="col-md-12 col-lg-8 col-xl-9">
								
									<ul>
										{
											this.state.services.map(service =>
												<div className="row">
													<div className="card col-10">
														<div className="card-body">
															<div className="">
																<h4 className="doc-name">{service.name}</h4>
																<div class="row">
																	<div class="col-10 doc-speciality">{service.duration}</div>
																	<div class="col-2 doc-speciality">{service.price}</div>
																</div>
															</div>
														</div>
													</div>
												</div>)
										}
									</ul>
								
								</div>
							</div>
						</div>
					</div>
			</div>
			
        )
    }
}
export { ServiceDetails };