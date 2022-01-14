import React from 'react';
import { Link } from 'react-router-dom'
import { DOMAIN } from './../../constants';
// Import Images
import StylistImg from '../../assets/img/stylists/stylist-thumb-02.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns, faLock, faSignOutAlt, faUser, faUserCog } from '@fortawesome/fontawesome-free-solid';

class ShipperSidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
			pathname:'/'
        }
    }
    componentDidMount() {
		fetch(`${DOMAIN}/ThanhVien/user-login`,
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
				(result) => {
					console.log(result)
					this.setState({
						isLoaded: true,
						data: result.data
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
        return (
            <div>
                {/* Profile Sidebar */}
                <div className="profile-sidebar">
                    <div className="widget-profile pro-widget-content">
                        <div className="profile-info-widget">
                            <Link to="#" className="booking-doc-img">
                                <img src={StylistImg} alt="User Image" />
                            </Link>
                            <div className="profile-det-info">
                                <h3>{data.tenThanhVien}</h3>

                                <div className="customer-details">
                                    <h5 className="mb-0">Shipper</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-widget">
                        <nav className="dashboard-menu">
                            <ul>
                                <li>
                                    <Link to="/shipper-dashboard">
                                        <FontAwesomeIcon icon={faColumns} />
                                        <span>Quản lí đơn hàng</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/shipper-profile-settings">
                                        <FontAwesomeIcon icon={faUserCog} />
                                        <span>Cài đặt cấu hình</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/shipper-change-password">
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
                    </div>
                </div>
                {/* Profile Sidebar */}
            </div>
        )
    }
}
export { ShipperSidebar };