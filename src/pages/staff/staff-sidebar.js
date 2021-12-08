import React from 'react';
import { Link } from 'react-router-dom'

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faColumns, faBoxOpen, faLock, faSignOutAlt, faShoppingCart } from '@fortawesome/fontawesome-free-solid';

class StaffSidebar extends React.Component {
    render() {
        return(
            <div>
                {/* Profile Sidebar */}
                <div className="profile-sidebar">
                    <div className="widget-profile pro-widget-content">
                        <div className="profile-info-widget">
                            <div className="profile-det-info">
                                <h3>ADMIN</h3>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-widget">
                        <nav className="dashboard-menu">
                            <ul>
                                <li>
                                    <Link to="/staff-dashboard">
                                        <FontAwesomeIcon icon={faColumns} />
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/edit-service">
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                        <span>Dịch vụ</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/edit-stylist">
                                        <FontAwesomeIcon icon={faAddressCard} />
                                        <span>Nhân viên</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/edit-product">
                                        <FontAwesomeIcon icon={faBoxOpen} />
                                        <span>Sản phẩm</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/staff-change-password">
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
export { StaffSidebar };