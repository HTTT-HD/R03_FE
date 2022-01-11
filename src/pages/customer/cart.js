import React from 'react';
import { Link } from 'react-router-dom'

// Import Sidebar
import { CustomerSidebar } from './customer-sidebar';

// Import Components
import { Tabs, Tab } from "react-bootstrap";

import UserAvatar from '../../assets/img/customers/customer.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEye, faTimes, faPlus, faMinus } from '@fortawesome/fontawesome-free-solid';

class Cart extends React.Component {
    render() {
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
                                                                        <tr>
                                                                            <td>
                                                                                <h2 className="table-avatar">
                                                                                    <Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" /></Link>
                                                                                    <Link to="/customer-profile">Tên sản phẩm <span>#PT0016</span></Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>Gạo</td>
                                                                            <td>3</td>
                                                                            <td className="text-center">150.000VND</td>
                                                                            <td className="text-right">
                                                                                <div className="table-action">
                                                                                    <Link to="/view-" className="btn btn-sm bg-info-light mr-1">
                                                                                        <FontAwesomeIcon icon={faPlus} />
                                                                                    </Link>
                                                                                    <Link to="/view-" className="btn btn-sm bg-info-light mr-1">
                                                                                        <FontAwesomeIcon icon={faMinus} />
                                                                                    </Link>
                                                                                    <Link to="#" className="btn btn-sm bg-danger-light">
                                                                                        <FontAwesomeIcon icon={faTrashAlt} /> Xóa
                                                                                    </Link>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <h2 className="table-avatar">
                                                                                    <Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" /></Link>
                                                                                    <Link to="/customer-profile">Tên sản phẩm <span>#PT0016</span></Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>Gạo</td>
                                                                            <td>3</td>
                                                                            <td className="text-center">150.000VND</td>
                                                                            <td className="text-right">
                                                                                <div className="table-action">
                                                                                    <Link className="btn btn-sm bg-info-light mr-1">
                                                                                        <FontAwesomeIcon icon={faPlus} />
                                                                                    </Link>
                                                                                    <Link className="btn btn-sm bg-info-light mr-1">
                                                                                        <FontAwesomeIcon icon={faMinus} />
                                                                                    </Link>
                                                                                    <Link className="btn btn-sm bg-danger-light">
                                                                                        <FontAwesomeIcon icon={faTrashAlt} /> Xóa
                                                                                    </Link>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="card card-table mb-0">
                                                                <div className="card-body">
                                                                    <br />
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            <h4>Tổng số tiền: 300.000VND</h4>
                                                                        </div>
                                                                        <div className="col">
                                                                            <Link to="/checkout" className="btn btn-primary submit-btn">Thanh toán</Link>
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
                                                                        <tr>
                                                                            <td>
                                                                                <h2 className="table-avatar">
                                                                                    <Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" /></Link>
                                                                                    <Link to="/customer-profile">Tên sản phẩm <span>#PT0016</span></Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>Gạo</td>
                                                                            <td>3</td>
                                                                            <td className="text-center">150.000VND</td>
                                                                            <td className="text-right">
                                                                                <div className="table-action">
                                                                                    <Link to="/view-" className="btn btn-sm bg-info-light mr-1">
                                                                                        <FontAwesomeIcon icon={faPlus} />
                                                                                    </Link>
                                                                                    <Link to="/view-" className="btn btn-sm bg-info-light mr-1">
                                                                                        <FontAwesomeIcon icon={faMinus} />
                                                                                    </Link>
                                                                                    <Link to="#" className="btn btn-sm bg-danger-light">
                                                                                        <FontAwesomeIcon icon={faTrashAlt} /> Xóa
                                                                                    </Link>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <h2 className="table-avatar">
                                                                                    <Link to="/customer-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" /></Link>
                                                                                    <Link to="/customer-profile">Tên sản phẩm <span>#PT0016</span></Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>Gạo</td>
                                                                            <td>3</td>
                                                                            <td className="text-center">150.000VND</td>
                                                                            <td className="text-right">
                                                                                <div className="table-action">
                                                                                    <Link className="btn btn-sm bg-info-light mr-1">
                                                                                        <FontAwesomeIcon icon={faPlus} />
                                                                                    </Link>
                                                                                    <Link className="btn btn-sm bg-info-light mr-1">
                                                                                        <FontAwesomeIcon icon={faMinus} />
                                                                                    </Link>
                                                                                    <Link className="btn btn-sm bg-danger-light">
                                                                                        <FontAwesomeIcon icon={faTrashAlt} /> Xóa
                                                                                    </Link>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="card card-table mb-0">
                                                                <div className="card-body">
                                                                    <br />
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            <h4>Tổng số tiền: 300.000VND</h4>
                                                                        </div>
                                                                        <div className="col">
                                                                            <Link to="/checkout" className="btn btn-primary submit-btn">Thanh toán</Link>
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
            </div>
        )
    }
}
export { Cart };