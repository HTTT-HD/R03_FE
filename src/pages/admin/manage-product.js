import React from 'react';
import { Link ,Redirect} from 'react-router-dom'
import { DOMAIN } from '../../constants';
// Import Sidebar
import { StaffSidebar } from './staff-sidebar'
import UserAvatar from '../../assets/img/customers/customer.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faEdit, faPlusCircle } from '@fortawesome/fontawesome-free-solid';

class EditProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            sanphams: [],
            redirect:false
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleButtonClick(value) {
        localStorage.setItem("pro_id", value)
    }
    handleDelete(event){
        
        Promise.all([
            fetch(`${DOMAIN}/Product/delete?id=${event}`,
            {
                method:"DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`
                }
            })
            ,
            fetch(`${DOMAIN}/Product/get-all?PageIndex=1&PageSize=20`,
                {
                    method:"GET",
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem("Accesstoken")}`
                    }
                })
            ])
            .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
            .then(
                ([result1,result2]) => {
                    console.log(result1,result2)
                    this.setState((state)=>{
                        return{isLoaded: true,
                            sanphams:result2.data.items
                        }
                    })
                    console.log(this.state.product)
                },
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error
                    })
                }
            )
    }
    componentDidMount() {
        fetch("https://localhost:5001/api/Product/get-all?PageIndex=1&PageSize=20")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        sanphams: result.data.items
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
                                        this.state.sanphams.map(item => (
                                            <div className="appointment-list">
                                                <div className="profile-info-widget">
                                                    <Link className="booking-doc-img">
                                                        <img src={item.img} alt="User Image" />
                                                    </Link>
                                                    <div className="profile-det-info">
                                                        <h3>{`${item.tenSanPham}`}</h3>
                                                        <div className="customer-details">
                                                            <h5>Giá: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.donGia)} VND</h5>
                                                            <h5>Danh mục: {item.tenDanhMuc}</h5>
                                                            <h5>Số lượng tồn: {item.soLuong}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="appointment-action">
                                                    <button className="btn btn-sm bg-success-light" onClick={() => this.handleButtonClick(item.id)}>
                                                        <Link to="/edit-edit-product" >
                                                            <FontAwesomeIcon icon={faEdit} /> Sửa
                                                        </Link>
                                                    </button>
                                                    <button className="btn btn-sm bg-danger-light" onClick={() => this.handleDelete(item.id)}>
                                                        
                                                            <FontAwesomeIcon icon={faMinus} /> Xóa
                                                        
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