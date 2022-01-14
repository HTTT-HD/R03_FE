import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DOMAIN } from './../../constants'

class ListProductOfRice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            gaos: []
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
                        gaos: res.data.items.filter(i => i['tenDanhMuc'] == 'Gạo')
                    })
                    console.log(res.data.items.filter(i => i['tenDanhMuc'] == 'Gạo'))
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
                                this.state.gaos.map(gao => (
                                    <div className="col-md-3 col-sm-6">
                                        <div className="card widget-profile pat-widget-profile">
                                            <div className="card-body">
                                                <div className="pro-widget-content">
                                                    <div className="profile-info-widget">
                                                        <Link to="/ListSPofCH" onClick={()=>this.handleClick(gao.cuaHangId)} className="booking-doc-img">
                                                            <img src={gao.img} alt="User Image" />
                                                        </Link>
                                                        <div className="profile-det-info">
                                                            <h3>
                                                                {/* <Link to="#"></Link> */}
                                                                {gao.tenSanPham}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="customer-info">
                                                    <ul>
                                                        <li>
                                                            Số lượng <span>{gao.soLuong}</span>
                                                        </li>
                                                        <li>
                                                            Đơn giá <span>{new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(gao.donGia) + "VNĐ"}</span>
                                                        </li>
                                                        <li>
                                                            Loại sản phẩm <span>{gao.tenDanhMuc}</span>
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
export { ListProductOfRice }