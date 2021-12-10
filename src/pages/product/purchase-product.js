import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, NavDropdown, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faShoppingCart, faTimes, faUser } from '@fortawesome/fontawesome-free-solid';

class PurchaseProduct extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            sanphams: [],
            order: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3003/product")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        sanphams: result
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
        this.setState((state, props) => {
            return { order: [...state.order, event] };
        });
        // console.log(event);
    }
    handleChangeInput(){
		return (event) => {
			const inputValue = event.target.value;
			this.setState({
				searchValue:inputValue
			})
		}
	}
    render() {
        // console.log(this.state.order);
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
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic2">
                                    <span>Giỏ hàng <FontAwesomeIcon icon={faShoppingCart} /></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {
                                        this.state.order.map(i => (
                                            <Dropdown.Item href="">
                                                {i.name} - {i.price} VND
                                            </Dropdown.Item>
                                        ))
                                    }
                                    <Dropdown.Item>
                                        Tổng tiền: {this.state.order.reduce((sum, i) => sum + parseInt(i.price.replace(".", "")), 0)} VND
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="./checkout">TIẾN HÀNH THANH TOÁN</Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    {/* <ul className="nav header-navbar-rht menu-select">
                        <li>
                            
                        </li>
                    </ul> */}
                    {/* Breadcrumb */}
                    {/* Search */}
					<div className="card search-widget">
						<div className="card-body">
							<form className="search-form">
								<div className="input-group">
									<input type="text" placeholder="Tìm kiếm..." className="form-control" onChange={this.handleChangeInput()}/>
									<div className="input-group-append">
									</div>
								</div>
							</form>
						</div>
					</div>
                    {/* Page Content */}
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    {/* Professor Widget */}
                                    {this.state.sanphams.map(sanpham => (
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
                                                            <h4 className="doc-name"><Link to="#"> {sanpham.name}</Link></h4>
                                                            <div className="rating">
                                                                <div className="clini-infos">
                                                                    <ul>
                                                                        <li>Giá: {sanpham.dongia} VND</li>
                                                                        <li>Thương hiệu: {sanpham.loaisanpham} </li>
                                                                        <li>Số lượng: {sanpham.soluong}</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="doc-info-right">
                                                        <div className="clinic-booking">
                                                            <button onClick={() => this.handleOrder(product)}>
                                                                <Link to="#" className="view-pro-btn">Thêm vào giỏ hàng</Link>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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