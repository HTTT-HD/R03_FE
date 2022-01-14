import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
// Import Images
import CustomerImg from '../../assets/img/customers/customer.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faBookmark, faColumns, faComments, faLock, faMapMarkerAlt, faSignOutAlt, faUserCog } from '@fortawesome/fontawesome-free-solid';

class CuaHangSidebar extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
            data:[]
		};
	}
    handleButtonClick(value) {
		localStorage.setItem("id_cus",value)
    }
	componentDidMount() {
		fetch(`https://localhost:5001/api/Store/get?id=${localStorage.getItem("CH_id")}`)
			.then(res => res.json())
			.then(
				(data) => {
                    console.log(data)
					this.setState({
						isLoaded: true,
						data: data.data
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
        let {data}=this.state;
        return(
            <div>
                {/* Profile Sidebar */}
                <div className="profile-sidebar">
                    <div className="widget-profile pro-widget-content">
                        <div className="profile-info-widget">
                            <Link to="#" className="booking-doc-img">
                                <img src={data.anhDaiDien} alt="User Image" />
                            </Link>
                            <div className="profile-det-info">
                                <h3>{data.name}</h3>
                                <div className="customer-details">
                                    {/* <h5><FontAwesomeIcon icon={faBirthdayCake} />{data.dob}</h5> */}
                                    <h4>{data.tenCuaHang}</h4>
                                    <h5 className="mb-0"><FontAwesomeIcon icon={faMapMarkerAlt} />{data.diaChi}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    {/* <div className="dashboard-widget">
                        <nav className="dashboard-menu">
                            <ul>
                                <li>
                                    <Link to="/customer-dashboard">
                                        <FontAwesomeIcon icon={faColumns} />
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/customer-dashboard">
                                        <FontAwesomeIcon icon={faColumns} />
                                        <span>Lịch sửa mua hàng</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/profile-settings" onClick={() => this.handleButtonClick(data.idc)}>
                                        <FontAwesomeIcon icon={faUserCog} />
                                        <span>Cài đặt cấu hình</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/change-password" onClick={() => this.handleButtonClick(data.idc)} >
                                        <FontAwesomeIcon icon={faLock} />
                                        <span>Thay đổi mật khẩu</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <FontAwesomeIcon icon={faSignOutAlt} />
                                        <span>Đăng xuất</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div> */}
                </div>
                {/* Profile Sidebar */}
            </div>
        )
    }
}
export { CuaHangSidebar };