import React from 'react';
import { Link } from 'react-router-dom'

// Import Images
import StylistImg from '../../assets/img/stylists/stylist-thumb-02.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faColumns, faComments, faFileAlt, faHourglassStart, faLock, faShareAlt, faSignOutAlt, faStar, faUser, faUserCog } from '@fortawesome/fontawesome-free-solid';

class StylistSidebar extends React.Component {
    render() {
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
                                <h3>Urban Mauldin</h3>

                                <div className="customer-details">
                                    <h5 className="mb-0">Glitter Nail Art</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-widget">
                        <nav className="dashboard-menu">
                            <ul>
                                <li>
                                    <Link to="/stylist-dashboard">
                                        <FontAwesomeIcon icon={faColumns} />
                                        <span>Quản lí đơn hàng</span>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link to="/edit-product">
                                        <FontAwesomeIcon icon={faUser} />
                                        <span>Quản lí hàng hóa</span>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link to="/stylist-profile-settings">
                                        <FontAwesomeIcon icon={faUserCog} />
                                        <span>Cài đặt cấu hình</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/stylist-change-password">
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
export { StylistSidebar };