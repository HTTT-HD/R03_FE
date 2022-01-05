import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import { CuaHangSidebar } from './Cuahang-sidebar';
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
                                    <div className="col-md-3 col-sm-6">
                                        <div className="card widget-profile pat-widget-profile">
                                            <div className="card-body">
                                                <div className="stylist-widget">
                                                    <div className="doc-info-left">
                                                        <div className="stylist-img">
                                                            <Link to="/list-cuahang">
                                                                <img
                                                                    className="img-fluid"
                                                                    alt="User Image"
                                                                    src={sanpham.img} />
                                                            </Link>
                                                        </div>
                                                        <div className="doc-info-cont">
                                                            <h4 className="doc-name"><Link to="#"> {sanpham.tensanpham}</Link></h4>
                                                            <div className="rating">
                                                                <div className="clini-infos">
                                                                    <ul>
                                                                        <li>Giá: {sanpham.dongia}</li>

                                                                        <li>Số lượng: {sanpham.soluong}</li>

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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