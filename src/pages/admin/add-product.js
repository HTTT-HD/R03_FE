import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import { StaffSidebar } from './staff-sidebar';
import { DOMAIN } from './../../constants';

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            redirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const newData = { ...this.state.data };
        newData[e.target.name] = e.target.value;
        this.setState({ data: newData })
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        axios.post(`${DOMAIN}/Product/create-or-update`, this.state.data)
            .then(res => {
                if (res.data.save) { this.setState({ redirect: true }) }
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/edit-product' />;
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
                                        <li className="breadcrumb-item active" aria-current="page">Thêm sản phẩm</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Thêm sản phẩm</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb */}

                {/* Page Content */}
                <div className="content">
                    <div className="container">
                        <div className="row">
                            {/* Profile Sidebar */}
                            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                                <StaffSidebar />
                            </div>
                            {/* Profile Sidebar */}
                            <div className="col-md-7 col-lg-8 col-xl-9">
                                <div className="card">
                                    <div className="card-body">
                                        {/* add service Form */}
                                        <form action="" method="POST" onSubmit={this.handleSubmit}>
                                            <div className="row form-row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Cửa hàng</label>
                                                        <input onChange={(e) => this.handleChange(e)} type="text" className="form-control" name="id_cuahang" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Hình ảnh sản phẩm</label>
                                                        <input onChange={(e) => this.handleChange(e)} type="text" className="form-control" name="img_sanpham" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Tên sản phẩm</label>
                                                        <input onChange={(e) => this.handleChange(e)} type="text" className="form-control" name="tenSanPham" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Số lượng</label>
                                                        <input onChange={(e) => this.handleChange(e)} type="text" className="form-control" name="soLuong" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Đơn giá</label>
                                                        <input onChange={(e) => this.handleChange(e)} type="text" className="form-control" name="donGia" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Loại danh mục</label>
                                                        <input onChange={(e) => this.handleChange(e)} type="text" className="form-control" name="loaiDanhMuc" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Mô tả</label>
                                                        <input onChange={(e) => this.handleChange(e)} type="text" className="form-control" name="moTa" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Chi tiết</label>
                                                        <input onChange={(e) => this.handleChange(e)} type="text" className="form-control" name="chiTiet" />
                                                    </div>
                                                </div>
                                                <div className="submit-section">
                                                    <button type="submit" className="btn btn-primary submit-btn">Thêm sản phẩm</button>
                                                </div>
                                                {/* add product Form */}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                {/* Page Content */}
            </div >
        )
    }
}
export { AddProduct };