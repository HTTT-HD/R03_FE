import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import { StaffSidebar } from './staff-sidebar';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/fontawesome-free-solid';
import { DOMAIN } from '../../constants';

class DeleteProduct extends React.Component {
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
        fetch(`${DOMAIN}/Product/delete?id=${localStorage.getItem("pro_id")}`,
        {
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`
            }
        })
        .then(res => res.json())
        .then(res=>{
            console.log(res)
            if(res.succeeded){
                this.setState({
                    redirect:true
                })
            }
        }
        )
    }
    render() {
        const { redirect } = this.state;
        if (redirect) {
         	return <Redirect to='/edit-product'/>;
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
                                        <li className="breadcrumb-item active" aria-current="page">Xóa sản phẩm</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Xóa sản phẩm</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb */}

                {/* Page Content */}
                <form action="" method="DELETE" onSubmit={this.handleSubmit}>
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                {/* Profile Sidebar */}
                                <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                                    <StylistSidebar />
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
                                                            <h3>Bạn chắc chắn xóa sản phẩm này không?</h3>
                                                            <p>Nếu bạn nhấn "Xác nhận" thì sản phẩm này được xóa, nếu bạn muốn thêm lại sản phẩm thì vào phần "Chỉnh sửa sản phẩm" để thêm sản phẩm mới.</p>
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
export { DeleteProduct };