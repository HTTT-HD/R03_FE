import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DOMAIN } from './../../constants'

class ListProductOfOtherCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            khacs: []
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    handleButtonClick(value) {
        localStorage.setItem("pro_id", value)
    }
    componentDidMount() {
        fetch(`${DOMAIN}/Product/get-all`,
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
                        khacs: res.data.items.filter(i => i['tenDanhMuc'] == 'Khác')
                    })
                    console.log(res.data.items.filter(i => i['tenDanhMuc'] == 'Khác'))
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
                                            <li className="breadcrumb-item active" aria-current="page">Danh sách sản phẩm của danh mục khác</li>
                                        </ol>
                                    </nav>
                                    <h2 className="breadcrumb-title">Danh sách sản phẩm của danh mục khác</h2>
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
                                this.state.khacs.map(khac => (
                                    <div className="col-md-3 col-sm-6">
                                        <div className="card widget-profile pat-widget-profile">
                                            <div className="card-body">
                                                <div className="pro-widget-content">
                                                    <div className="profile-info-widget">
                                                        <Link to="/ListSPofCH" className="booking-doc-img">
                                                            <img src={khac.img} alt="User Image" />
                                                        </Link>
                                                        <div className="profile-det-info">
                                                            <h3>
                                                                {/* <Link to="#"></Link> */}
                                                                {khac.tenSanPham}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="customer-info">
                                                    <ul>
                                                        <li>
                                                            Số lượng <span>{khac.soLuong}</span>
                                                        </li>
                                                        <li>
                                                            Đơn giá <span>{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(khac.donGia) + "VNĐ"}</span>
                                                        </li>
                                                        <li>
                                                            Loại sản phẩm <span>{khac.tenDanhMuc}</span>
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
                </form>
            </div>
        )
    }
}
export { ListProductOfOtherCategories }