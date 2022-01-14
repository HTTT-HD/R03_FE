import React from 'react';
import axios from 'Axios'
import { Link,Redirect } from 'react-router-dom'

// Import Sidebar
import { CustomerSidebar } from './customer-sidebar';

// Import Components
import { Tabs, Tab, Button } from "react-bootstrap";

import UserAvatar from '../../assets/img/customers/customer.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEye, faTimes, faPlus, faMinus } from '@fortawesome/fontawesome-free-solid';
import { DOMAIN } from '../../constants';
class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            product: [],
            user:[],
            cart:[],
            total:0,
            redirect:false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        Promise.all([
            fetch(`${DOMAIN}/Cart/products-in-cart?gioHangId=${localStorage.getItem("id_cart")}`,
            {
                method:"GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`
                }
            }),
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
                    this.setState({
                            isLoaded: true,
                            cart: result1.data,
                            total:result1.data.tongTien,
                            user:result2.data,
                            product:result1.data.products
                        
                    })
                    console.log(this.state.cart,this.state.user)
                },
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error
                    })
                }
            )
    }
    handlePlus(event){
        const pro = this.state.product.find( ({ sanPhamId }) => sanPhamId === event )
        const quantity=pro.soLuong+1
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`,
                'My-Custom-Header': 'foobar'
            },
            body: JSON.stringify({

                cuaHangId: localStorage.getItem("CH_id"),
                sanPhamId: event,
                soLuong: quantity
            })
        };
        Promise.all([
        fetch(`${DOMAIN}/Cart/change-quantity`, requestOptions),
        fetch(`${DOMAIN}/Cart/products-in-cart?gioHangId=${localStorage.getItem("id_cart")}`,
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
                this.setState((state)=>{
                    return{isLoaded: true,
                        cart: result1.data,
                        total:result2.data.tongTien,
                        product:result2.data.products
                    }
                })
                console.log(this.state.product)
            },
            (error) => {
                this.setState({
                    isLoaded: false,
                    error
                })
            }
        )
    }
    handleMinus(event){
        const pro = this.state.product.find( ({ sanPhamId }) => sanPhamId === event )
        const quantity=pro.soLuong -1 
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`,
                'My-Custom-Header': 'foobar'
            },
            body: JSON.stringify({

                cuaHangId: localStorage.getItem("CH_id"),
                sanPhamId: event,
                soLuong: quantity
            })
        };
        Promise.all([
        fetch(`${DOMAIN}/Cart/change-quantity`, requestOptions),
        fetch(`${DOMAIN}/Cart/products-in-cart?gioHangId=${localStorage.getItem("id_cart")}`,
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
                this.setState((state)=>{
                    return{isLoaded: true,
                        cart: result1.data,
                        total:result2.data.tongTien,
                        product:result2.data.products
                    }
                })
                console.log(this.state.product)
            },
            (error) => {
                this.setState({
                    isLoaded: false,
                    error
                })
            }
        )
    }
    handleDelete(event){
        const pro = this.state.product.find( ({ sanPhamId }) => sanPhamId === event )
        Promise.all([
        fetch(`${DOMAIN}/Cart/remove-product-in-cart?cuaHangId=${localStorage.getItem("CH_id")}&sanPhamId=${event}`,
        {
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`
            }
        })
        ,
        fetch(`${DOMAIN}/Cart/products-in-cart?gioHangId=${localStorage.getItem("id_cart")}`,
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
                this.setState((state)=>{
                    return{isLoaded: true,
                        cart: result1.data,
                        total:result2.data.tongTien,
                        product:result2.data.products
                    }
                })
                console.log(this.state.product)
            },
            (error) => {
                this.setState({
                    isLoaded: false,
                    error
                })
            }
        )
    }
    handleSubmit(event){
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`,
                'My-Custom-Header': 'foobar'
            },
            body: JSON.stringify({
                nguoiDat: this.state.user.tenThanhVien,
                soDienThoai: this.state.user.soDienThoai,
                diaChiNhan: this.state.user.diaChi,
                cuaHangId: localStorage.getItem("CH_id"),
                loaiThanhToan: 0
            })
        };
        fetch(`${DOMAIN}/Order/order`, requestOptions)
        .then(res => res.json())
        .then(
            (res)=>{
                console.log(res)
                if(res.succeeded){this.setState({
                    redirect:true
                })}
                
            },
            (error) => {
                console.log(error)
            }
        )

    }
    render() {
        let {product}=this.state;
        console.log(product)
        if (this.state.redirect) {
            return <Redirect to='/checkout' />;
        }
        return (
            <div>
                <form  action="/cart" method="POST" onSubmit={this.handleSubmit}>
                {/* Breadcrumb */}
                <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Giỏ hàng</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Giỏ hàng</h2>
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
                                <CustomerSidebar />
                            </div>
                            <div className="col-md-7 col-lg-8 col-xl-9">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="appointment-tab">
                                            <Tabs defaultActiveKey="upcoming" id="uncontrolled-tab-example">
                                                <Tab eventKey="upcoming" title="Tên cửa hàng">
                                                    <div className="card card-table mb-0">
                                                        <div className="card-body">
                                                            <div className="table-responsive">
                                                                <table className="table table-hover table-center mb-0">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Tên sản phẩm</th>
                                                                            <th>Danh mục của sản phẩm</th>
                                                                            <th>Số lượng</th>
                                                                            <th className="text-center">Số tiền</th>
                                                                            <th></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    {product.map(item=>(
                                                                       <tr>
                                                                            <td>
                                                                                <h2 className="table-avatar">
                                                                                    
                                                                                    <Link to="">{item.tenSanPham}</Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>Gạo</td>
                                                                            <td>{item.soLuong}</td>
                                                                            <td className="text-center">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.thanhTien)} VNĐ</td>
                                                                            <td className="text-right">
                                                                                <div className="table-action">
                                                                                    <Link type="button" className="btn btn-sm bg-info-light mr-1" onClick={()=>{this.handlePlus(item.sanPhamId)}}>
                                                                                        <FontAwesomeIcon icon={faPlus} />
                                                                                    </Link>
                                                                                    <Link type="button" className="btn btn-sm bg-info-light mr-1"onClick={()=>{this.handleMinus(item.sanPhamId)}}>
                                                                                        <FontAwesomeIcon icon={faMinus} />
                                                                                    </Link>
                                                                                    <Link type="button" className="btn btn-sm bg-danger-light" onClick={()=>{this.handleDelete(item.sanPhamId)}}>
                                                                                        <FontAwesomeIcon icon={faTrashAlt} /> Xóa
                                                                                    </Link>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        
                                                                        ))}
                                                                        
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="card card-table mb-0">
                                                                <div className="card-body">
                                                                    <br />
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            <h4>Tổng số tiền: {new Intl.NumberFormat({ style: 'currency', currency: 'JPY' }).format(this.state.total)} VNĐ</h4>
                                                                        </div>
                                                                        <div className="col">
                                                                            
                                                                                <button className="btn btn-primary submit-btn" type="submit">Thanh toán</button>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                    <br />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                            </Tabs>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Content */}
                </form>
            </div>
        )
    }
}
export { Cart };