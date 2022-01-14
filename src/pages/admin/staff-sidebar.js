import React from 'react';
import { Link } from 'react-router-dom'

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faColumns, faBoxOpen, faLock, faSignOutAlt, faShoppingCart, faMoneyBillAlt, faAngleLeft, faAngleRight, faUser, faWallet, faMoneyBill } from '@fortawesome/fontawesome-free-solid';
import { faProductHunt, faUber} from '@fortawesome/free-brands-svg-icons';

class StaffSidebar extends React.Component {
    render() {
        return (
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
                                    <Link to="/manage-supplier">
                                        <FontAwesomeIcon icon={faUser} />
                                        <span>Quản lí thành viên</span>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link to="/manage-shipper">
                                        <FontAwesomeIcon icon={faUser} />
                                        <span>Quản lí người giao hàng</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/manage-customer">
                                        <FontAwesomeIcon icon={faUser} />
                                        <span>Quản lí khách hàng</span>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link to="/manage-product">
                                        <FontAwesomeIcon icon={faProductHunt} />
                                        <span>Quản lí sản phẩm</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/invoices">
                                        <FontAwesomeIcon icon={faMoneyBill} />
                                        <span>Quản lí hóa đơn</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/commission">
                                        <FontAwesomeIcon icon={faMoneyBillAlt} />
                                        <span>Tính tiền hoa hồng</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/needed-product">
                                        <FontAwesomeIcon icon={faAngleRight} />
                                        <span>TK mặt hàng thiết yếu</span>
                                    </Link>

                                </li>
                                <li>
                                    <Link to="#">
                                        <FontAwesomeIcon icon={faAngleRight} />
                                        <span>TK nhu cầu thực phẩm cùng kỳ</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span><FontAwesomeIcon icon={faAngleRight} />TK Khách hàng, cửa hàng, shipper từng vùng</span>
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