import React from 'react';
import { Link, Redirect } from 'react-router-dom'

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faMapMarkerAlt, faMoneyBillAlt, faStar, faThumbsUp, faComments } from '@fortawesome/fontawesome-free-solid';
import axios from 'axios';

class BookingStylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            employees: [],
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleButtonClick(value) {
        localStorage.setItem("emp_id", value)
    }
    componentDidMount() {
        axios.get('http://localhost:3000/booking/booking-stylist')
            .then((res) => {
                this.setState({ employees: res.data.detail_shift })
                //console.log(this.state.employees)
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    handleSubmit(event) {
        event.preventDefault();
        //console.log(this.state)
        const data = {
            id_emp: localStorage.getItem("emp_id"),
            id_app: localStorage.getItem("id_app")
        }
        axios.post('http://localhost:3000/booking/save-stylist', data)
            .then(res => {
                console.log(res.data)
                if (res.data.save) { this.setState({ redirect: true }) }
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { redirect } = this.state;
        console.log(redirect)
        if (redirect) {
            return <Redirect to='/checkout' />;
        }
        let temp = localStorage.getItem("date_booking")
        let date = temp.slice(0, temp.indexOf("@"))
        let time = parseInt(temp.slice(temp.indexOf("@") + 1, temp.length));
        const rs = this.state.employees.filter(item => {
            return item.date == date
                && item.detail[0].hour_start <= time
                && item.detail[0].hour_end >= time
            /*&&item.employee_appoint.every(apt=>{
                return apt.date_reserved != date
                || !(
                    apt.date_reserved == date
                    && apt.start_time <= time
                    && apt.end_time >= time 
                )
            })*/
        })
        console.log(rs)
        return (
            <div>
                <form action="/booking-stylist" method="POST" onSubmit={this.handleSubmit}>
                    {/* Breadcrumb */}
                    <div className="breadcrumb-bar">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-md-12 col-12">
                                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Đặt nhà tạo mẫu</li>
                                        </ol>
                                    </nav>
                                    <h2 className="breadcrumb-title">Đặt nhà tạo mẫu</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Breadcrumb */}
                    {/* Page Content */}
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    {/* Professor Widget */}
                                    <ul>
                                        {
                                            rs.map(employee => employee.employee_info.map(emp =>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="stylist-widget">
                                                            <div className="doc-info-left">
                                                                <div className="stylist-img">
                                                                    <Link to="/stylist-profile">
                                                                        <img
                                                                            className="img-fluid"
                                                                            alt="User Image"
                                                                            src={emp.img}
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="doc-info-cont">
                                                                    <h4 className="doc-name"><Link to="/stylist-profile">{emp.lastname} {emp.firstname}</Link></h4>
                                                                    <div className="rating">
                                                                        {
                                                                            [...Array(emp.rate | 0).fill(1), ...Array(5 - (emp.rate | 0)).fill(0)].map(i => {
                                                                                return i ?
                                                                                    (<FontAwesomeIcon icon={faStar} className='filled' />) :
                                                                                    (<FontAwesomeIcon icon={faStar} />)
                                                                            })
                                                                        }
                                                                        <FontAwesomeIcon icon={faStar} />
                                                                        <div className="clini-infos">
                                                                            <ul>
                                                                                <li>Kinh nghiệm: {emp.experience}</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="doc-info-right">
                                                                <div className="clinic-booking">
                                                                    <Link to="/stylist-profile" className="view-pro-btn">Xem hồ sơ</Link>
                                                                    <button type="submit" onClick={() => this.handleButtonClick(emp.ide)} className="apt-btn">Đặt lịch hẹn</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export { BookingStylist };