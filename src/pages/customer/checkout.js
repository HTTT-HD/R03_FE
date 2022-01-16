
  
import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { Link,Redirect } from 'react-router-dom'
// Import Image
import UserImg from '../../assets/img/stylists/stylist-thumb-02.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faStar } from '@fortawesome/fontawesome-free-solid';

import "./Paypal.css";
import axios from 'axios';
import { DOMAIN } from '../../constants';
import { Alert } from 'bootstrap';

function Checkout() {
	const [paymentMethodURL, setPaymentMethodURL] = useState("/booking-success");
	const [isMomoChecked, setIsMomoChecked] = useState(false);
	const [isPaymentChecked, setIsPaymentChecked] = useState(true);
	const [paycheck,setPaycheck]=useState({st:false});
	const [redirect,setRedirect]=useState({st:false});
	const [username, setUsername] = useState([]);
	const [address, setaddress] = useState([]);
	const [userphone, setphone] = useState([]);
	const [total,setTotal]=useState([]);
	const [USD,setUSD]=useState([]);
	const [ship,setShip]=useState([]);
	const [store,setStore]=useState([]);
	const [date,setDate]=useState([]);
	const id_app = {id: localStorage.getItem("id_app")};
	// console.log("id " + id_app.id);
	// console.log('Sum');
	// console.log(localStorage.total);
	// console.log(id_app.id);
	// console.log((localStorage.to_USD));

	// console.log("end time");
	// console.log(localStorage.end_time);

	const paypal = useRef();
	function tryConvert(money, code, encode = true) {
		const input = parseFloat(money);
		if (Number.isNaN(input)) {
		  return '';
		}
		const currency = "23,075.00";
		if (!currency) {
		  return '';
		}
		const sell = parseFloat(currency.sell.replace(',', ''));
		const output = encode ? input*sell : input/sell;
		const rounded = Math.round(output * 1000)/1000;
		return rounded.toString();
	  }
	useEffect( () => {
		const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`,
            }
		};
		async function fetchOrder(){
			const result = await axios(`${DOMAIN}/Order/detail?donHangId=${localStorage.getItem("id_order")}`, requestOptions)
			//console.log(data.info)
			console.log(result.data.data)
			const detail_order=result.data.data
			
			setUsername(detail_order.nguoiDat)//detail_order.tenThanhVien
			setaddress(detail_order.diaChiNhan)
			setphone(detail_order.soDienThoai)
			setTotal(detail_order.tongTien)
			setShip(detail_order.tienShip)
			setStore(detail_order.tenCuaHang)
			setUSD(detail_order.tongTien*0.04388)
			localStorage.setItem("to_USD",detail_order.tongTien/23000)
			console.log(USD);
			//console.log(user_object.email)
			//console.log(user_object.phone)
		}
		fetchOrder();
		
		},[]);
	useEffect(() => {
		console.log(tryConvert(total, "USD", false));
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
				const requestOptions = {
					method: 'PUT',
					headers: { 
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`,
						'My-Custom-Header': 'foobar'
					},
					body: JSON.stringify({
						donHangId: localStorage.getItem("id_order"),
						loaiThanhToan:1
					})
				};
				async function fetchResult(){
					const rs = await fetch(`${DOMAIN}/Order/update-payment`,
					{
						method: "PUT",
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/json',
							'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`
						},
						body:JSON.stringify({
							donHangId: localStorage.getItem("id_order"),
							loaiThanhToan:1
						})
					})
					const res = await rs.json();
					console.log(res)
					if(res.succeeded){
						alert("Thanh toán thành công !")
						paycheck.st=true;
						redirect.st=true;
					}else{
						alert("Thanh toán không thành công")
					}						
					console.log(redirect.st,paycheck.st)
					
			}
			fetchResult();
            },
        })
        .render(paypal.current);
    }, []);
	useEffect(() => {

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
																<input className="form-control" type="text" value={username}/>
															</div>
														</div>
														<div className="col-md-12 col-sm-12">
															<div className="form-group card-label">
																<label>Địa chỉ giao</label>
																<input className="form-control" type="email" value={address} />
															
															</div>
														</div>
														<div className="col-md-12 col-sm-12">
															<div className="form-group card-label">
																<label>Số diện thoại</label>
																<input className="form-control" type="text" value={userphone}/>
															
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
										<h4 className="card-title">Thông tin hóa đơn</h4>
									</div>
									<div className="card-body">

										{/* Booking professor Info */}
										<div className="booking-doc-info">
											<Link to="/stylist-profile" className="booking-doc-img">
												<img src={UserImg} alt="User Image" />
											</Link>
											<div className="booking-info">
												<h4><Link to="/stylist-profile">{store}</Link></h4>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													
												</div>
											</div>
										</div>
										{/* Booking professor Info */}

										<div className="booking-summary">
											<div className="booking-item-wrap">
												<ul className="booking-date">
													<li>Ngày <span>{moment().format("DD-MM-YYYY hh:mm:ss")}</span></li>
												</ul>
												<ul className="booking-fee">
													<li>Phí dịch vụ <span>{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(ship)} VNĐ</span></li>
												</ul>
												<div className="booking-total">
													<ul className="booking-total-list">
														<li>
															<span>Tổng</span>
															<span className="total-cost">{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(ship+total)} VNĐ</span>
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
	}else{
		if(redirect.st == true && paycheck.st == true){
			return <Redirect to='booking-success'/>
		}
	}
}
export { Checkout };
