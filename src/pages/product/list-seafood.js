import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import { CuaHangSidebar } from './Cuahang-sidebar';
import { DOMAIN } from '../../constants'

class ListProductOfSeafood extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            haisans: []
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        console.log(event)
        localStorage.setItem("CH_id",event)
    }
    componentDidMount() {
        fetch(`${DOMAIN}/Product/get-all?PageIndex=1&PageSize=20`,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`
                }
            })
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        haisans: res.data.items.filter(i => i.tenDanhMuc === 'Hải sản')
                    })
                    console.log(res.data.items.filter(i => i.tenDanhMuc === 'Hải sản'))
                }
            )
    }
    render() {
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
                                            <li className="breadcrumb-item active" aria-current="page">Danh sách sản phẩm của danh mục hải sản</li>
                                        </ol>
                                    </nav>
                                    <h2 className="breadcrumb-title">Danh sách sản phẩm của danh mục hải sản</h2>
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
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row ">
                            {
                                this.state.haisans.map(haisan => (
                                    <div className="col-md-3 col-sm-6">
                                        <div className="card widget-profile pat-widget-profile">
                                            <div className="card-body">
                                                <div className="pro-widget-content">
                                                    <div className="profile-info-widget">
                                                        <Link to="/ListSPofCH" onClick={()=>this.handleClick(haisan.cuaHangId)} className="booking-doc-img">
                                                            <img src={haisan.img} alt="User Image" />
                                                        </Link>
                                                        <div className="profile-det-info">
                                                            <h3>
                                                                {/* <Link to="#"></Link> */}
                                                                {haisan.tenSanPham}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="customer-info">
                                                    <ul>
                                                        <li>
                                                            Số lượng <span>{haisan.soLuong}</span>
                                                        </li>
                                                        <li>
                                                            Đơn giá <span>{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(haisan.donGia) + "VNĐ"}</span>
                                                        </li>
                                                        <li>
                                                            Loại sản phẩm <span>{haisan.tenDanhMuc}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </form >
            </div >
        )
    }
}
export { ListProductOfSeafood }