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
        if(e.target.name=="donGia"||e.target.name=="soLuong"){
            newData[e.target.name]=Number(e.target.value)
        }else{newData[e.target.name]=e.target.value}
        console.log(this.state.data)
        this.setState({ data: newData })
    }
    handleSubmit(event) {
		event.preventDefault();
		//console.log(this.state)
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`,
                'My-Custom-Header': 'foobar'
            },
            body: JSON.stringify(this.state.data)
        }
		fetch("https://localhost:5001/api/Product/create-or-update",requestOptions)
            .then(res => res.json())
			.then(res => {
				console.log(res)
				if(res.succeeded)
				    {this.setState({redirect:true})}
			})
			.catch(error => {
				console.log(res)
			})
	}


    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/manage-product'/>;
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
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Danh mục</label>
                                                        <select className="form-control select" onChange={(e)=>this.handleChange(e)} name ="danhMucId">
                                                            <option value="28733573-c2cd-41a9-808a-a3edc391767a">Hải sản</option>
                                                            <option value="18f58ac1-823f-4396-8b9d-268063d8ff86" >Thịt</option>
                                                            <option value="62db9edd-3f7d-4497-8252-efd8f436b637">Gạo</option>
                                                            <option value="97319d31-888d-43d3-bcb3-e3177572ca65">Khác</option>
                                                        </select>
                                                        
                                                    </div>
											    </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Cửa hàng</label>
                                                        <select className="form-control select" onChange={(e)=>this.handleChange(e)} name ="cuaHangId">
                                                            <option value="bbdacfb9-1388-4d3b-a751-01f4febf9d8d">Cửa hàng heo sạch Giang</option>
                                                            <option value="8507842d-f81c-4610-b72d-42eab3a022e8" >Cửa hàng gạo Mỹ</option>
                                                            <option value="4a24b27e-6e8b-46a9-bf4a-6d6169d35a61">Cửa hàng Hải sản</option>
                                                            <option value="628ecebc-73be-4866-b9ae-103127d9f6b7">tocotocoo</option>
                                                        </select>
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