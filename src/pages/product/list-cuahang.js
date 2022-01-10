import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import { CuaHangSidebar } from './Cuahang-sidebar';
import { DOMAIN } from './../../constants'
class ListCuaHang extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            services: []
        };
    }

    componentDidMount() {
        fetch(`${DOMAIN}/product/get-all?PageIndex=1&PageSize=10`).then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        services: result.data.items
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


    render() {
        let {services}=this.state;
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
                                            <li className="breadcrumb-item active" aria-current="page">Danh sách cửa hàng</li>
                                        </ol>
                                    </nav>
                                    <h2 className="breadcrumb-title">Danh sách cửa hàng</h2>
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
                    {/* Page Content */}
                    <div className="container">
                        <div className="row ">
                            {this.state.services.filter(item=>{
                                if(item.cuaHangId == localStorage.getItem("CH_id"))
                                    return item
                            }).map((item) => (
                                <div className="col-md-3 col-sm-6">
                                    <div className="card widget-profile pat-widget-profile">
                                        <div className="card-body">
                                            <div className="pro-widget-content">
                                                <div className="profile-info-widget">
                                                    <Link  to="/ListSPofCH" className="booking-doc-img">
                                                        <img src={item.img} alt="User Image" />
                                                    </Link>
                                                    <div className="profile-det-info">
                                                        <h3>
                                                            <Link to="/ListSPofCH"></Link>
                                                            Ten Cua Hang
                                                        </h3>

                                                    </div>
                                                    <div className="customer-info">
                                                        <ul>
                                                            <li>
                                                                <h5 className="mb-0"><FontAwesomeIcon icon={faMapPin} /> Địa chỉ</h5>

                                                            </li>


                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export { ListCuaHang }