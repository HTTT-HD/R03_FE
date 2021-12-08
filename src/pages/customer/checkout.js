import React, { useState, useEffect, useRef } from 'react';

import { Link,Redirect } from 'react-router-dom'
// Import Image
import UserImg from '../../assets/img/stylists/stylist-thumb-02.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faStar } from '@fortawesome/fontawesome-free-solid';

import "./Paypal.css";
import axios from 'axios';
import { Alert } from 'bootstrap';

function Checkout() {
	const [paymentMethodURL, setPaymentMethodURL] = useState("/booking-success");
	const [isMomoChecked, setIsMomoChecked] = useState(false);
	const [isPaymentChecked, setIsPaymentChecked] = useState(true);
	const [paycheck,setPaycheck]=useState({st:false});
	const [redirect,setRedirect]=useState({st:false});
	const [username, setUsername] = useState({name:""});
	const [useremail, setemail] = useState({email:""});
	const [userphone, setphone] = useState({phone:""});
	const [Name,setName] = useState({name:""})
	const [price,setPrice]=useState({price:""})
	const [date,setDate]=useState({date:""})
	const [time,setTime]=useState({time:""})
	const [rate,setRate]=useState({rate:""})

	const id_app = {id: localStorage.getItem("id_app")};
	// console.log("id " + id_app.id);
	// console.log('Sum');
	// console.log(localStorage.total);
	// console.log(id_app.id);
	// console.log((localStorage.to_USD));

	// console.log("end time");
	// console.log(localStorage.end_time);

	const paypal = useRef();
	useEffect(() => {
		const fetchData = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				token: localStorage.getItem("Accesstoken")
			})
		};
		fetch("http://localhost:3000/user/profile", fetchData)
		.then(res=>res.json())
		.then(data =>{
			//console.log(data.info)
			const user_object=data.info;
			username.name=user_object.name
			useremail.email=user_object.email
			userphone.phone=user_object.phone
			//console.log(user_object.name)
			//console.log(user_object.email)
			//console.log(user_object.phone)
		})
		},[]);
	useEffect(() => {
        window.paypal
        .Buttons({
            createOrder: (data, actions, err) => {
            return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                {
                    //description: "Total money",
                    amount: {
                    currency_code: "USD",
                    value: parseFloat(localStorage.to_USD).toFixed(1), //Pass total money here
                    },
                },
                ],
            });
            },
            onApprove: async (data, actions) => {
				const order = await actions.order.capture();
				const data1 = {
					ida: localStorage.getItem("id_app"),
					status: "Chưa xác nhận",
					end_time: Math.round(localStorage.end_time),
					total: localStorage.total+'.000',
					payment: "PayPal"
				}
				axios.post('http://localhost:3000/checkout/save-checkout',data1)
				.then(res => {
					console.log("Payment Success");
					if(res)
					{
						paycheck.st=true;
						redirect.st=true;
					}
					console.log(paycheck)
				})
				.catch(err => {
					console.log("Not ok");
					console.log(err);
				});
            },
            onError: (err) => {
				const data2 = {
					ida: localStorage.getItem("id_app"),
					status: "Hủy",
					end_time: Math.round(localStorage.end_time),
					total: localStorage.total+'.000',
					payment: "PayPal"
				}
				axios.post('http://localhost:3000/checkout/save-checkout',data2)
				.then(res => {
					console.log("Payment fail");
					if(res)
						setPaycheck(paycheck)
				})
				.catch(err => {
					console.log(err);
				});
			// Redirect sang trang booking-fail.
            },
        })
        .render(paypal.current);
    }, []);
	useEffect(() => {
		fetch(`http://localhost:3000/employee/dashboard/${localStorage.getItem("id_app")}`)
		.then(res=>res.json())
		.then(data=>{
			//console.log(data)
			Name.name=data.emp[0].lastname+' '+data.emp[0].firstname
			rate.rate=data.emp[0].rate
			price.price=data.invoice.price
			date.date=data.invoice.date_reserved
			time.time=data.invoice.start_time
		})
		},[]);	

	if(redirect.st == false){
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
										<li className="breadcrumb-item active" aria-current="page">Checkout</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Checkout</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content */}
				<div className="content">
					<div className="container">
						<div className="row">
							<div className="col-md-7 col-lg-8">
								<div className="card">
									<div className="card-body">

										{/* Checkout Form */}
										<form action="/booking-success">

											{/* Personal Information */}
											<div className="info-widget">
												<h4 className="card-title">Thông tin cá nhân</h4>
													<div className="row">
														<div className="col-md-12 col-sm-12">
															<div className="form-group card-label">
																<label>Họ và tên</label>
																<input className="form-control" type="text" value={username.name}/>
															</div>
														</div>
														<div className="col-md-12 col-sm-12">
															<div className="form-group card-label">
																<label>Email</label>
																<input className="form-control" type="email" value={useremail.email} />
															
															</div>
														</div>
														<div className="col-md-12 col-sm-12">
															<div className="form-group card-label">
																<label>Số diện thoại</label>
																<input className="form-control" type="text" value={userphone.phone}/>
															
															</div>
														</div>
													</div>
												<div className="exist-customer">Khách hàng hiện tại? <Link to="#">Click tại đây để đăng nhập</Link></div>
											</div>
									
											{/* Personal Information */}

											<div className="payment-widget">
												<h4 className="card-title">Phương thức thanh toán</h4>
												{/* Momo Payment */}
												<div className="payment-list">
													<label className="payment-radio paypal-option">
														<input 
															type="radio" 
															name="radio" 
															checked={isMomoChecked}
															defaultChecked={false}
															onChange={() => {
																setIsMomoChecked(!isMomoChecked)
																setPaymentMethodURL("/Payment-Guide")
															}}
														/>
														<span className="checkmark"></span>
														Momo
													</label>
												</div>
												{/* Momo Payment */}

												{/*Payment */}
												<div className="payment-list">
													<label className="payment-radio paypal-option">
														<input 
															type="radio" 
															name="radio" 
															checked={isPaymentChecked}
															defaultChecked={true}
															onChange={() => {
																setIsPaymentChecked(!isPaymentChecked)
																setPaymentMethodURL("/booking-success")
															}}
														/>
														<span className="checkmark"></span>
														Thanh toán tại cửa hàng
													</label>
												</div>
												{/*Payment */}

												{/*Payment */}
												<div id="Paypal">
													{/* <PayPal /> */}
													<div ref={paypal}></div>
												</div>
												{/*Payment */}

												{/* Terms Accept */}
												<div className="terms-accept">
													<div className="custom-checkbox">
														<input type="checkbox" id="terms_accept" />
														<label>Tôi đã đọc và chấp nhận <Link to="#">Điều khoản &amp; Điều kiện</Link></label>
													</div>
												</div>
												{/* Terms Accept */}

												{/* Submit Section */}
												<div className="submit-section mt-4">
													<Link to={paymentMethodURL} className="btn btn-primary submit-btn">Xác nhận</Link>
												</div>
												{/* Submit Section */}

											</div>
										</form>
										{/* Checkout Form */}

									</div>
								</div>

							</div>

							<div className="col-md-5 col-lg-4 theiaStickySidebar">

								{/* Booking Summary */}
								<div className="card booking-card">
									<div className="card-header">
										<h4 className="card-title">Tổng</h4>
									</div>
									<div className="card-body">

										{/* Booking professor Info */}
										<div className="booking-doc-info">
											<Link to="/stylist-profile" className="booking-doc-img">
												<img src={UserImg} alt="User Image" />
											</Link>
											<div className="booking-info">
												<h4><Link to="/stylist-profile">{Name.name}</Link></h4>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">{rate.rate}</span>
												</div>
											</div>
										</div>
										{/* Booking professor Info */}

										<div className="booking-summary">
											<div className="booking-item-wrap">
												<ul className="booking-date">
													<li>Ngày <span>{date.date}</span></li>
													<li>Giờ <span>{time.time+':00'}</span></li>
												</ul>
												<ul className="booking-fee">
													<li>Phí dịch vụ <span>{price.price}</span></li>
												</ul>
												<div className="booking-total">
													<ul className="booking-total-list">
														<li>
															<span>Tổng</span>
															<span className="total-cost">{price.price}</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Booking Summary */}
							</div>
						</div>
					</div>
				</div>
				{/* Page Content */}
			</div>
		)
	}
	else{
		if(redirect.st == true && paycheck.st == true){
			return <Redirect to='booking-success'/>
		}
	}
}
export { Checkout };