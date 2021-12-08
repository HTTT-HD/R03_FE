import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { StaffSidebar } from './staff-sidebar';

// Import Images
import UserImg from '../../assets/img/customers/customer.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/fontawesome-free-solid';

class DeleteStylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data:"",
            redirect:false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
   }
   
    handleSubmit(event) {
        event.preventDefault();
        //console.log(this.state)
        axios.post('http://localhost:3000/admin/emp/del',{"id":localStorage.getItem("emp_id")})
            .then(res => {
                console.log(res.data)
                if(res.data.save)
                    {this.setState({redirect:true})}
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { redirect } = this.state;
        if (redirect) {
         	return <Redirect to='/edit-stylist'/>;
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
                                        <li className="breadcrumb-item active" aria-current="page">Xóa nhân viên</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Xóa nhân viên</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb */}

                {/* Page Content */}
                <form action="" method="POST" onSubmit={this.handleSubmit}>
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
                                            <div className="row form-row">
                                                {/* Success Card */}
                                                <div className="card success-card">
                                                    <div className="card-body">
                                                        <div className="success-cont">
                                                            <FontAwesomeIcon icon={faQuestion} />
                                                            <h3>Bạn chắc chắn xóa nhân viên này không?</h3>
                                                            <p>Nếu bạn nhấn "Xác nhận" thì nhân viên này được xóa, nếu bạn muốn thêm lại nhân viên thì vào phần "Chỉnh sửa nhân viên" để thêm dịch vụ mới.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Success Card */}
                                                <div className="submit-section">
                                                    <button type="submit" className="btn btn-primary submit-btn">Xác nhận</button>
                                                </div>
                                                {/* add service Form */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </form>
                {/* Page Content */}
            </div >
        )
    }
}
export { DeleteStylist };