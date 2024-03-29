import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import { CuaHangSidebar } from './Cuahang-sidebar';
import { DOMAIN } from './../../constants'

class ListProduct extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            sanphams: [],
            order: [],
            total: 0,
            searchValue: ""
        }
        this.handleClick=this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch(`${DOMAIN}/product/get-all?PageIndex=1&PageSize=20`).then(res => res.json())
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

    handleOrder(event) {
        console.log(event);
        this.setState((state, props) => {
            return { order: [...state.order, event] };
        });
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
    handleClick(event){
        console.log(event)
        localStorage.setItem("CH_id",event)
    }
    render() {
        console.log(this.state.order);
        let total = 0;
        let { sanphams, searchValue } = this.state;
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
                                            <li className="breadcrumb-item active" aria-current="page">Danh sách sản phẩm</li>
                                        </ol>
                                    </nav>
                                    <h2 className="breadcrumb-title">Danh sách sản phẩm</h2>
                                </div>
                            </div>

                        </div>
                    </div>
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
                    <div className="container">
                        <div className="row">
                            {
                                sanphams.filter((item) => {
                                    if (searchValue == "") {
                                        return item
                                    } else if (item.tensanpham.toLowerCase().includes(searchValue.toLowerCase())) {
                                        return item
                                    }
                                }).map(sanpham =>
                                    <div className="col-md-3 col-sm-6" key={sanpham.id}>
                                    <div className="card widget-profile pat-widget-profile">
                                        <div className="card-body">
                                            <div className="pro-widget-content">
                                                <div className="profile-info-widget">
                                                    <Link to="#" className="booking-doc-img">
                                                        <img src={sanpham.img} alt="User Image" />
                                                    </Link>
                                                    <div className="profile-det-info">
                                                        <h3>
                                                            {/* <Link to="#"></Link> */}
                                                            {sanpham.tenSanPham}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="customer-info">
                                                <ul>
                                                    <li>
                                                        Số lượng <span>{sanpham.soLuong}</span>
                                                    </li>
                                                    <li>
                                                        Đơn giá <span>{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(sanpham.donGia) + "VNĐ"}</span>
                                                    </li>
                                                    <li>
                                                        Loại sản phẩm <span>{sanpham.tenDanhMuc}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )}
                        </div>
                        {/* </div> */}
                    </div>
                </form>
            </div>
        )
    }
}
export { ListProduct }