import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import StylistImg from '../../assets/img/stylists/stylist-thumb-02.jpg';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { setMinutes, setHours } from 'date-fns';
import { StaffSidebar } from './staff-sidebar';
import UserImg from '../../assets/img/customers/customer.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/fontawesome-free-solid';
import UserImg9 from '../../assets/img/customers/customer9.jpg';

class Commission extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            redirect: false,
            check1: false,
            hoadons: [],
			sale:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        })
    }
    handleClick(event) {
		localStorage.setItem("id_order",event)
	}
    componentDidMount(){
		Promise.all([
        fetch(`${DOMAIN}/Order/get-all`,
        {
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`
            }
        }),
		fetch(`${DOMAIN}/Dashboard/dashboard`,
        {
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`
            }
        })
	])
	.then(([res1,res2]) => Promise.all([res1.json(), res2.json()]))
	.then(
		([result1,result2]) => {
			console.log(result1)
			this.setState({
				isLoaded: true,
				hoadons: result1.data.items,
				sale:result2.data
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
        const { redirect } = this.state;
        const { check1 } = this.state;
        console.log(redirect)
        if (redirect == true && check1 == true) {
            return <Redirect to='/booking-stylist' />;
        }
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
                                        <li className="breadcrumb-item active" aria-current="page">Tiền hoa hồng</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Tiền hoa hồng</h2>
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
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-6">
                                                <span>
                                                    Chọn ngày giờ
                                                </span>
                                            </div>
                                            <div className="text-sm-right">
                                                <form action="" method="POST" onSubmit={this.onFormSubmit}>
                                                    <div className="form-group">
                                                        <DatePicker
                                                            selected={this.state.startDate}
                                                            onChange={this.handleChange}
                                                            minTime={setHours(this.state.startDate, 9)}
                                                            maxTime={setHours(this.state.startDate, 21)}
                                                            showTimeSelect
                                                            timeFormat="HH:mm"
                                                            timeIntervals={60}
                                                            timeCaption="time"
                                                            dateFormat="MMMM d, yyyy h:mm aa"
                                                        />
                                                        <button type="submit" className="btn btn-primary">Lọc</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-table">
                                    <div className="card-body">

                                        {/* Invoice Table */}
                                        <div className="table-responsive">
                                            <table className="table table-hover table-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Cửa hàng</th>
                                                        <th>Loại thanh toán</th>
                                                        <th>Tiền hóa đơn</th>
                                                        <th>Tiền ship</th>
                                                        <th>Tiền hoa hồng</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {this.state.hoadons.map(item=>(
                                                    <tr>
                                                        <td>
                                                            <Link to="">{item.tenCuaHang}</Link>
                                                        </td>
                                                        <td>
                                                            <h2 className="table-avatar">
                                                                <Link to="/ListSPofCH" className="avatar avatar-sm mr-2">
                                                                    <img className="avatar-img rounded-circle" src={UserImg} alt="User Image" />
                                                                </Link>
                                                                    <Link to="">{item.tenLoaiThanhToan}</Link>
                                                            </h2>
                                                        </td>
                                                        <td>{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(item.tongTien)} VNĐ</td>
                                                        <td>{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(item.tienShip)} VNĐ</td>
                                                        <td>{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(item.tienShip*0.05+item.tongTien*0.05)} VNĐ</td>
                                                        <td className="text-right">
                                                            <div className="table-action">
                                                                <Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1" onClick={()=>{this.handleClick(item.id)}}>
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
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card dash-card">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-4">
                                                        <div className="dash-widget dct-border-rht">
                                                            <div className="dash-widget-info">
                                                                <h6>Tổng tiền hóa đơn</h6>
                                                                <h3>{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(sale.tienTuCuaHang)} VNĐ</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-lg-4">
                                                        <div className="dash-widget dct-border-rht">
                                                            <div className="dash-widget-info">
                                                                <h6>Tổng tiền ship</h6>
                                                                <h3>{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(sale.tienTuCuaHang+sale.tienTuShip)}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-lg-4">
                                                        <div className="dash-widget dct-border-rht">
                                                            <div className="dash-widget-info">
                                                                <h6>Tổng tiền hoa hồng</h6>
                                                                <h3>{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(sale.tienTuCuaHang+sale.tienTuShip)} VNĐ</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
export { Commission };