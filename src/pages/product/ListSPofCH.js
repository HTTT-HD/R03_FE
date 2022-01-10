import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import { CuaHangSidebar } from './Cuahang-sidebar';
import { DOMAIN } from './../../constants'
class PurchaseProduct extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            sanphams: [],
            order: [],
            user:[],
            total:0,
            searchValue:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        Promise.all([
            fetch(`${DOMAIN}/product/get-all?PageIndex=1&PageSize=10`),
            fetch(`${DOMAIN}/ThanhVien/user-login`,
		    {
                method:"GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`
                }
		    })
        ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(
                ([result1,result2]) => {
                    console.log(result1,result2)
                    this.setState({
                        isLoaded: true,
                        sanphams: result1.data.items,
                        user:result2.data
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

    handleOrder(event) {
        console.log(event);   
        this.setState((state, props) => {
            return { order: [...state.order, event] };
        });
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`,
                'My-Custom-Header': 'foobar'
            },
            body: JSON.stringify({
                "cuaHangId": event.cuaHangId,
                "sanPhamId": event.id,
                "soLuong": 1
            })
        };
        fetch(`${DOMAIN}/Cart/add-product`, requestOptions)
        .then(
            (res)=>{
                console.log(res)
            }
        )
        // console.log(event);
    
    }
    handleChangeInput() {
        return (event) => {
            const inputValue = event.target.value;
            this.setState({
                searchValue: inputValue
            })
        }
    }
    handleSubmit(event){
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`,
                'My-Custom-Header': 'foobar'
            },
            body: JSON.stringify({
                "cuaHangId": event.cuaHangId,
                "sanPhamId": event.id,
                "soLuong": 1
            })
        };
        fetch(`${DOMAIN}/Cart/add-product`, requestOptions)
        .then(
            (res)=>{
                console.log(res)
            }
        )

    }
    render() {
        console.log(this.state.order);
        let total = 0;
        let {sanphams,searchValue}=this.state;
        const product = sanphams.filter(item=>{
            if (item.cuaHangId == localStorage.getItem("CH_id"))
                return item
        })
        return (
            <div>
                <form action="/booking-stylist" method="POST" onSubmit={this.handleSubmit}>
                    {/* Breadcrumb */}
                    <div className="breadcrumb-bar">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-md-12 col-12">
                                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Danh sách sản phẩm của cửa hàng</li>
                                        </ol>
                                    </nav>
                                    <h2 className="breadcrumb-title">Danh sách sản phẩm của cửa hàng</h2>
                                </div>
                            </div>
                            { <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic2">
                                    <span>Giỏ hàng <FontAwesomeIcon icon={faShoppingCart} /></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {
                                        this.state.order.map(i => (
                                            <Dropdown.Item href="">
                                                {i.tenSanPham} - {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(i.donGia)} VND
                                            </Dropdown.Item>
                                        ))
                                    }
                                    <Dropdown.Item>
                                        Tổng tiền: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.state.total)} VND
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="./checkout">TIẾN HÀNH THANH TOÁN</Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> }
                        </div>
                    </div>
                    {/* <ul className="nav header-navbar-rht menu-select">
                        <li>
                            
                        </li>
                    </ul> */}
                    {/* Breadcrumb */}
                    {/* Search */}

                    {/* Page Content */}
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                {/* Profile Sidebar */}
                                <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                                    <CuaHangSidebar />
                                    <div className="card category-widget">
                                    <div className="card-header">
                                        <h4 className="card-title">Sản phẩm đã chọn</h4>
                                    </div>
                                    <div className="card-body">
                                        <ul className="categories">
                                            {
                                                this.state.order.map(i=>(
                                                total+=i.donGia,
                                                <li>{i.tenSanPham} - {new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(i.donGia) + 'VNĐ'}</li>
                
                                                ))    
                                            }
                                        </ul>
                                    </div>
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Tổng: {new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(total) + 'VNĐ'} </h4>
                                    </div>
                                    <div className="btn-searchsubmit-section proceed-btn text-right btn btn-block">
                                        <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Xác nhận</button>
                                    </div>
                                </div>

                                </div>
                                

                                {/* Profile Sidebar */}
                                <div className="col-md-7 col-lg-8 col-xl-9">
                                    {/* Professor Widget */}
                                    <div className="card search-widget">
                                        <div className="card-body">
                                            <form className="search-form">
                                                <div className="input-group">
                                                    <input type="text" placeholder="Tìm kiếm..." className="form-control" onChange={this.handleChangeInput()} />
                                                    <div className="input-group-append">
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {
                                    product.filter((item)=>{
                                        if(searchValue==""){
                                            return item
                                        }else if(item.tenSanPham.toLowerCase().includes(searchValue.toLowerCase())){
                                            return item
                                        }
                                    }).map(sanpham =>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="stylist-widget">
                                                    <div className="doc-info-left">
                                                        <div className="stylist-img">
                                                            <Link to="#">
                                                                <img
                                                                    className="img-fluid"
                                                                    alt="User Image"
                                                                    src={sanpham.img} />
                                                            </Link>
                                                        </div>
                                                        <div className="doc-info-cont">
                                                            <h4 className="doc-name"><Link to="#"> {sanpham.tenSanPham}</Link></h4>
                                                            <div className="rating">
                                                                <div className="clini-infos">
                                                                    <ul>
                                                                        <li>Giá: {new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(sanpham.donGia) + "VNĐ"} VND</li>
                                                                        <li>Loại sản phẩm: {sanpham.tenDanhMuc} </li>
                                                                        <li>Số lượng: {sanpham.soLuong}</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="doc-info-right">
                                                        <div className="clinic-booking">
                                                            <button onClick={() => this.handleOrder(sanpham)}>
                                                                <Link to="#" className="view-pro-btn">Thêm vào giỏ hàng</Link>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export { PurchaseProduct }