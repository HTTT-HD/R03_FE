import React from 'react';
import { Link ,Redirect} from 'react-router-dom'
import axios from 'axios'

import { StaffSidebar } from './staff-sidebar';

// Import Images
import UserImg from '../../assets/img/customers/customer.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/fontawesome-free-solid';
function makeid(length) {
	var result           = '';
	var characters       = '0123456789';
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ ) {
	   result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
 }

class AddSupplier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data :[],
            redirect:false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const newData = {...this.state.data};
		newData['maThanhVien']='ncc'+makeid(3);
		if(e.target.name=="gioiTinh"){
            newData[e.target.name]=Number(e.target.value)
        }else{newData[e.target.name]=e.target.value}
        newData[e.target.name]=e.target.value;
		newData['gioiTinh']=Number(newData['gioiTinh']);
		console.log(this.state.data)
		this.setState({data:newData})
	}
    handleSubmit(event) {
		event.preventDefault();
		//console.log(this.state)
		fetch(`${DOMAIN}/ThanhVien/create`,
				{
					method: "POST",
					headers: {
						'Content-Type': 'application/json'
					},
					body:JSON.stringify(this.state.data)
				}
			).then(res => res.json().then(
				res => {
					if(res.succeeded){
						alert("Đăng ký thành công")
						this.setState({redirect:true})
					}
					else{
						alert(res.message)
					}
					console.log(res);
				})
			).catch(
				res => { console.log(res) }
			)
	}
    render() {
        const { redirect } = this.state;
     	if (redirect) {
       		return <Redirect to='/edit-service'/>;
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
                                        <li className="breadcrumb-item active" aria-current="page">Thêm nhà cung cấp</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Thêm nhà cung cấp</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb */}

                {/* Page Content */}
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
                                        <form action="/" onSubmit={this.handleSubmit}>
													<div className="form-group form-focus">
														<input onChange={(e)=>this.handleChange(e)} type="text" className="form-control floating" name="tenThanhvien" />
														<label className="focus-label">Tên</label>
													</div>
													<div className="form-group form-focus">
														<input onChange={(e)=>this.handleChange(e)} type="text" className="form-control floating" name="soDienThoai" />
														<label className="focus-label">Số điện thoại</label>
													</div>
													<div className="form-group form-focus">
														<input onChange={(e)=>this.handleChange(e)} type="text" className="form-control floating" name="diaChi" />
														<label className="focus-label">Địa chỉ</label>
													</div>
													<div className="form-group form-focus">
														<input onChange={(e)=>this.handleChange(e)} type="text" className="form-control floating" name="tenDangnhap" />
														<label className="focus-label">Tên đăng nhập</label>
													</div>
													<div className="form-group form-focus">
														<input onChange={(e)=>this.handleChange(e)} type="password" className="form-control floating" name="matKhau" />
														<label className="focus-label">Mật khẩu</label>
													</div>
													<div className="form-group form-focus">
														<input onChange={(e)=>this.handleChange(e)} type="text" className="form-control floating" name="cmnd" />
														<label className="focus-label">CMND</label>
													</div>
													
													<div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Danh mục</label>
                                                        <select className="form-control select" onChange={(e)=>this.handleChange(e)} name ="gioiTinh">
                                                            <option  value="0">Khác</option>
                                                            <option  value="1" >Nữ</option>
                                                            <option  value="2">Nam</option>
                                                            
                                                        </select>
                                                        
                                                    </div>
											    </div>
													<div className="terms-and-policy pt-2 pb-2">
														<input type="checkbox" required name="checkbox" defaultValue="check" id="agree" /><span className="agree">Tôi đồng ý với các <span className="terms"><Link to="/terms-condition" target="_blank">Điều khoản sử dụng</Link> và <Link to="/privacy-policy" target="_blank">Chính sách bảo mật</Link> này.</span></span>
													</div>
													<div className="text-right">
														<Link to="/login" className="forgot-link">Bạn đã có sẵn tài khoản?</Link>
													</div>
													<button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Đăng ký</button>
												</form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                {/* Page Content */}
            </div >
        )
    }
}
export { AddSupplier };