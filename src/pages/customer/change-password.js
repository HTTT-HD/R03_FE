import React from 'react';
import { Link,Redirect } from 'react-router-dom'
import axios from 'axios'
import { CustomerSidebar } from './customer-sidebar';
import { Alert } from 'bootstrap';

class ChangePassword extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			data_up:[],
			redirect:false,
            status:''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
        const newData = {...this.state.data_up};
        newData["idc"] = localStorage.getItem("id_cus")
        newData[e.target.name]=e.target.value;
        this.setState({data_up:newData})
    }
	handleSubmit(event) {
		event.preventDefault();
		//console.log(this.state)
		axios.post('http://localhost:3000/user/profile/update_pass',this.state.data_up)
			.then(res => {
                console.log(res.data)
                    this.setState({
                    redirect:res.data.save,
                    status:res.data.status
                    })
                console.log(this.state.redirect,this.state.status)
			})
			.catch(error => {
				console.log(error)
			})
	}

    render() {
        
        const { redirect,status } = this.state;
     	if (!redirect && status =='-1') {
            return <Redirect to='/change-password'/>;
     	}
        if (!redirect && status =='0'){
            return <Redirect to='/change-password'/>;
        }
        if( redirect && status =='1'){
            return <Redirect to='/customer-dashboard'/>;
        }
        return(
            <div>
                {/* Breadcrumb */}
                <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Thay đổi mật khẩu</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Thay đổi mật khẩu</h2>
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
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-6">
                                            
                                                {/* Change Password Form */}
                                                <form action="" method="POST" onSubmit={this.handleSubmit}>
                                                    <div className="form-group">
                                                        <label>Mật khẩu cũ</label>
                                                        <input type="password" name="password" onChange={(e)=>this.handleChange(e)} className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Mật khẩu mới</label>
                                                        <input type="password" name="newpassword" onChange={(e)=>this.handleChange(e)} className="form-control"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Xác nhận mật khẩu mới</label>
                                                        <input type="password" name="check_new" onChange={(e)=>this.handleChange(e)} className="form-control" />
                                                    </div>
                                                    {/* Submit Section */}
                                                    <div className="submit-section">
													    <button type="submit" className="btn btn-primary submit-btn">Lưu thay đổi</button>
												    </div>
                                                    {/* Submit Section */}

                                                </form>
                                                {/* Change Password Form */}
                                                
                                            </div>
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
export { ChangePassword };