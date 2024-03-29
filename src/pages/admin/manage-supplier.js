import React from 'react';
import { Link } from 'react-router-dom'

// Import Sidebar
import { StaffSidebar } from './staff-sidebar';
import StylistImg from '../../assets/img/stylists/stylist-thumb-02.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlusCircle } from '@fortawesome/fontawesome-free-solid';
import { DOMAIN } from '../../constants';

class ManageSupplier extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            ThanhViens: [],
            shippers:[],
            nguoimuas:[], 
            nhacungcaps:[]
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    handleButtonClick(value) {
        localStorage.setItem("pro_id", value)
    }
    // componentDidMount() {
    //     fetch("http://localhost:5001/api/ThanhVien/get-all")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 console.log(result);
    //                 this.setState({
    //                     isLoaded: true,
    //                     nguoibans: result
    //                 });
    //             },
    //             (error) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     error
    //                 });
    //             }
    //         )
    // }
    componentDidMount() {
        fetch(`${DOMAIN}/ThanhVien/get-all`,
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
                        ThanhViens: res.data.items
                    })
                    console.log(res.data.items)
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
                                        <li className="breadcrumb-item active" aria-current="page">Quản lý Thành Viên</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Quản lý Thành Viên</h2>
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
                                    <Link to="/add-supplier">
                                        <h4 className="card-title d-flex justify-content-between">
                                            <a className="edit-link">
                                                <FontAwesomeIcon icon={faPlusCircle} className="mr-1" />Thêm Thành Viên</a>
                                        </h4>
                                    </Link>
                                    {/* product */}
                                    <div className="card dash-card">
                                        <div className="card-body">
                                            {
                                                this.state.ThanhViens.map(thanhvien => (
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="appointment-list">
                                                                <div className="profile-info-widget">
                                                                    <Link className="booking-doc-img">
                                                                        <img src={StylistImg} alt="User Image" />
                                                                    </Link>
                                                                    <div className="profile-det-info">
                                                                        <h3>{`${thanhvien.tenThanhVien}`}</h3>
                                                                        <div className="customer-details">
                                                                            <h5>SDT: {thanhvien.soDienThoai}</h5>
                                                                            <h5>Địa chỉ: {thanhvien.diaChi}</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="appointment-action">
                                                                    <button onClick={() => this.handleButtonClick(thanhvien.maThanhVien)}>
                                                                        <Link to="/delete-supplier" className="btn btn-sm bg-danger-light">
                                                                            <FontAwesomeIcon icon={faMinus} /> Xóa
                                                                        </Link>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            {/* product */}
                                        </div>
                                    </div>
                                    {/* <div className="card dash-card">
                                        <div className="card-body">
                                            {
                                                this.state.nguoibans.map(nguoiban => (
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="appointment-list">
                                                                <div className="profile-info-widget">
                                                                    <Link className="booking-doc-img">
                                                                        <img src={nguoiban.img} alt="User Image" />
                                                                    </Link>
                                                                    <div className="profile-det-info">
                                                                        <h3>{`${nguoiban.tenThanhVien}`}</h3>
                                                                        <div className="customer-details">
                                                                            <h5>SDT: {nguoiban.soDienThoai}</h5>
                                                                            <h5>Địa chỉ: {nguoiban.diaChi}</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="appointment-action">
                                                                    <button onClick={() => this.handleButtonClick(nguoiban.maThanhVien)}>
                                                                        <Link to="/delete-supplier" className="btn btn-sm bg-danger-light">
                                                                            <FontAwesomeIcon icon={faMinus} /> Xóa
                                                                        </Link>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>  */}
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
export { ManageSupplier };