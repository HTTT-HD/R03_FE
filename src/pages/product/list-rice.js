import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import { CuaHangSidebar } from './Cuahang-sidebar';
import { DOMAIN } from './../../constants'

class ListProductOfRice extends React.Component {

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
                                            <li className="breadcrumb-item active" aria-current="page">Danh sách sản phẩm của danh mục gạo</li>
                                        </ol>
                                    </nav>
                                    <h2 className="breadcrumb-title">Danh sách sản phẩm của danh mục gạo</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card search-widget">
                        <div className="card-body">
                            <form className="search-form">
                                <div className="input-group">
                                    <input type="text" placeholder="Tìm kiếm..." className="form-control"/>
                                    <div className="input-group-append">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="card widget-profile pat-widget-profile">
                                    <div className="card-body">
                                        <div className="stylist-widget">
                                            <div className="doc-info-left">
                                                <div className="stylist-img">
                                                    <Link >
                                                        {/* <img
                                                            className="img-fluid"
                                                            alt="User Image"
                                                            src={sanpham.img} /> */}
                                                    </Link>
                                                </div>
                                                <div className="doc-info-cont">
                                                    <h4 className="doc-name"><Link to="#">tên sản phẩm</Link></h4>
                                                    <div className="rating">
                                                        <div className="clini-infos">
                                                            <ul>
                                                                <li>Giá: 20.000VND</li>
                                                                <li>Số lượng: 3</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </form>
            </div>
        )
    }
}
export { ListProductOfRice }