import React from 'react';
import { Link } from 'react-router-dom'

// Import Sidebar
import { StaffSidebar } from './staff-sidebar';

// Import Images
import UserAvatar from '../../assets/img/customers/customer.jpg'
import { DOMAIN } from '../../constants';

class Statistical extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			sanphams: []
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		localStorage.setItem("id_order",event)
	}
	componentDidMount(){
        fetch(`${DOMAIN}/Product/get-all`,
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
				console.log(res)
                this.setState({
                    sanphams: res.data.items
                })
                console.log(res.data.items)
            }
        )
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
                                        <li className="breadcrumb-item active" aria-current="page">Nhu cầu thực phẩm cùng kỳ</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Nhu cầu thực phẩm cùng kỳ</h2>
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
                            <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="mb-4">Thống kê sản phẩm mới thêm vào tuần này</h4>
                                        <div className="appointment-tab">
                                            <div className="card card-table mb-0">
                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        <table className="table table-hover table-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>Tên cửa hàng</th>
                                                                    <th>Tên sản phẩm</th>
                                                                    <th>Giá sản phẩm</th>
                                                                    <th>Danh mục sản phẩm</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    this.state.sanphams.slice(0,4).map(item => (
                                                                        <tr>
                                                                            <td>
                                                                                <h2 className="table-avatar">
                                                                                    <Link to="/customer-profile">{item.tenCuaHang}</Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>
                                                                                <h2 className="table-avatar">
                                                                                    <Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={item.img} alt="User Image" /></Link>
                                                                                    <Link to="/customer-profile">{item.tenSanPham}</Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.donGia)} VNĐ</td>
                                                                            <td className="text-center">{item.tenDanhMuc}</td>
                                                                        </tr>
                                                                    ))
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="mb-4">Thống kê sản phẩm mới thêm vào tuần trước</h4>
                                        <div className="appointment-tab">
                                            <div className="card card-table mb-0">
                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        <table className="table table-hover table-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>Tên cửa hàng</th>
                                                                    <th>Tên sản phẩm</th>
                                                                    <th>Giá sản phẩm</th>
                                                                    <th>Danh mục sản phẩm</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    this.state.sanphams.slice(4,8).map(item => (
                                                                        <tr>
                                                                            <td>
                                                                                <h2 className="table-avatar">
                                                                                    <Link to="/customer-profile">{item.tenCuaHang}</Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>
                                                                                <h2 className="table-avatar">
                                                                                    <Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={item.img} alt="User Image" /></Link>
                                                                                    <Link to="/customer-profile">{item.tenSanPham}</Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.donGia)} VNĐ</td>
                                                                            <td className="text-center">{item.tenDanhMuc}</td>
                                                                        </tr>
                                                                    ))
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="mb-4">Thống kê sản phẩm mới thêm vào 2 tuần trước</h4>
                                        <div className="appointment-tab">
                                            <div className="card card-table mb-0">
                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        <table className="table table-hover table-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>Tên cửa hàng</th>
                                                                    <th>Tên sản phẩm</th>
                                                                    <th>Giá sản phẩm</th>
                                                                    <th>Danh mục sản phẩm</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    this.state.sanphams.slice(8,20).map(item => (
                                                                        <tr>
                                                                            <td>
                                                                                <h2 className="table-avatar">
                                                                                    <Link to="/customer-profile">{item.tenCuaHang}</Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>
                                                                                <h2 className="table-avatar">
                                                                                    <Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={item.img} alt="User Image" /></Link>
                                                                                    <Link to="/customer-profile">{item.tenSanPham}</Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.donGia)} VNĐ</td>
                                                                            <td className="text-center">{item.tenDanhMuc}</td>
                                                                        </tr>
                                                                    ))
                                                                }
                                                            </tbody>
                                                        </table>
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
export { Statistical };