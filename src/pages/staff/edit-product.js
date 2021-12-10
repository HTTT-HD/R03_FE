import React from 'react';
import { Link } from 'react-router-dom'

// Import Sidebar
import { StaffSidebar } from './staff-sidebar';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faEdit, faPlusCircle , faStar } from '@fortawesome/fontawesome-free-solid';

import UserImg from '../../assets/img/customers/customer.jpg';

class EditProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            sanphams: []
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    handleButtonClick(value) {
		localStorage.setItem("pro_id", value)
    }
    componentDidMount() {
        fetch("http://localhost:3003/product/")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        sanphams: result.sanpham
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

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
                                        <li className="breadcrumb-item active" aria-current="page">Quản lý sản phẩm</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Quản lý sản phẩm</h2>
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
                                <StaffSidebar />
                            </div>
                            <div className="col-md-7 col-lg-8 col-xl-9">
                                <div className="appointments">
                                    <Link to="/add-product">
                                        <h4 className="card-title d-flex justify-content-between">
                                            <a className="edit-link">
                                                <FontAwesomeIcon icon={faPlusCircle} className="mr-1" />Thêm sản phẩm</a>
                                        </h4>
                                    </Link>
                                    {/* product */}
                                    {
                                        this.state.sanphams.map(sanpham => (
                                            <div className="appointment-list">
                                                <div className="profile-info-widget">
                                                    <Link className="booking-doc-img">
                                                        <img src={sanpham.img} alt="User Image" />
                                                    </Link>
                                                    <div className="profile-det-info">
                                                        <h3>{`${sanpham.tensanpham}`}</h3>
                                                        <div className="customer-details">
                                                            <h5>Giá: {sanpham.dongia}</h5>
                                                            <h5>Thương hiệu: {sanpham.loaisanpham}</h5>
                                                            <h5>Số lượng tồn: {sanpham.soluong}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="appointment-action">
                                                    <button onClick={() => this.handleButtonClick(sanpham.id_sp)}>
                                                        <Link to="/edit-edit-product" className="btn btn-sm bg-success-light">
                                                            <FontAwesomeIcon icon={faEdit} /> Sửa
                                                        </Link>
                                                    </button>
                                                    <button onClick={() => this.handleButtonClick(sanpham.id_sp)}>
                                                        <Link to="/delete-product" className="btn btn-sm bg-danger-light">
                                                            <FontAwesomeIcon icon={faMinus} /> Xóa
                                                        </Link>
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    {/* product */}
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
export { EditProduct };