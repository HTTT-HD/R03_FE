import React from 'react';
import { Link } from 'react-router-dom'

// Import Sidebar
import { StaffSidebar } from './staff-sidebar';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faEdit, faPlusCircle , faStar } from '@fortawesome/fontawesome-free-solid';

import UserImg from '../../assets/img/customers/customer.jpg';

class EditStylist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            employees: []
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    handleButtonClick(value) {
		localStorage.setItem("emp_id",value)
    }
    componentDidMount() {
        fetch("http://localhost:3000/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        employees: result.employee
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
                                        <li className="breadcrumb-item active" aria-current="page">Chỉnh sửa nhân viên</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Chỉnh sửa nhân viên</h2>
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
                                    <Link to="/add-stylist">
                                        <h4 className="card-title d-flex justify-content-between">
                                            <a className="edit-link">
                                                <FontAwesomeIcon icon={faPlusCircle} className="mr-1" />Thêm nhân viên</a>
                                        </h4>
                                    </Link>
                                    {/* Stylist */}
                                    {
                                        this.state.employees.map(employee => (
                                            <div className="appointment-list">
                                                <div className="profile-info-widget">
                                                    <Link className="booking-doc-img">
                                                        <img src={employee.img} alt="User Image" />
                                                    </Link>
                                                    <div className="profile-det-info">
                                                        <h3>{`${employee.lastname} ${employee.firstname}`}</h3>
                                                        <div className="rating text-center">
                                                            {
                                                                [...Array(employee.rate | 0).fill(1), ...Array(5 - (employee.rate | 0)).fill(0)].map(i => {
                                                                    return i ?
                                                                        (<FontAwesomeIcon icon={faStar} className='filled' />) :
                                                                        (<FontAwesomeIcon icon={faStar} />)
                                                                })
                                                            }
                                                        </div>
                                                        <div className="customer-details">
                                                            <h5>Kinh nghiệm: {employee.experience}</h5>
                                                            <h5>Đã tham gia: {employee.attended}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="appointment-action">
                                                    <button onClick={() => this.handleButtonClick(employee.ide)}>
                                                        <Link to="/edit-edit-stylist" className="btn btn-sm bg-success-light">
                                                            <FontAwesomeIcon icon={faEdit} /> Sửa
                                                        </Link>
                                                    </button>
                                                    <button onClick={() => this.handleButtonClick(employee.ide)}>
                                                        <Link to="/delete-stylist" className="btn btn-sm bg-danger-light">
                                                            <FontAwesomeIcon icon={faMinus} /> Xóa
                                                        </Link>
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    {/* Stylist */}
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
export { EditStylist };