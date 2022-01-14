import React from 'react';
import { Link } from 'react-router-dom'

// Import Sidebar
import { StaffSidebar } from './staff-sidebar';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faEdit, faPlusCircle , faStar } from '@fortawesome/fontawesome-free-solid';


class ManageShipper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            shippers: []
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    handleButtonClick(value) {
		localStorage.setItem("pro_id", value)
    }
    // componentDidMount() {
    //     fetch("http://localhost:3003/seller/")
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
    componentDidMount(){
        fetch(`${DOMAIN}/ThanhVien/get-all`,
        {
            method:"GET",
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
                    shippers: res.data.items
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
                                        <li className="breadcrumb-item active" aria-current="page">Quản lý người giao hàng</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Quản lý người giao hàng</h2>
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
                                    <Link to="/add-shipper">
                                        <h4 className="card-title d-flex justify-content-between">
                                            <a className="edit-link">
                                                <FontAwesomeIcon icon={faPlusCircle} className="mr-1" />Thêm người giao hàng</a>
                                        </h4>
                                    </Link>
                                    {/* product */}
                                    {
                                        this.state.shippers.map(ship => (
                                            <div className="appointment-list">
                                                <div className="profile-info-widget">
                                                    <Link className="booking-doc-img">
                                                        <img src={ship.img} alt="User Image" />
                                                    </Link>
                                                    <div className="profile-det-info">
                                                        <h3>{`${ship.tenshipper}`}</h3>
                                                        <div className="customer-details">
                                                            <h5>SDT: {ship.sdt}</h5>
                                                            <h5>Địa chỉ: {ship.diachi}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="appointment-action">
                                                    <button onClick={() => this.handleButtonClick(ship.maThanhVien)}>
                                                        <Link to="/delete-shipper" className="btn btn-sm bg-danger-light">
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
export { ManageShipper };