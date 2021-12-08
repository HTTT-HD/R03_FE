import React from 'react';
import { Link } from 'react-router-dom'

import { faQuoteLeft, faStar } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Images
import Client1 from '../../assets/img/profile/client1.png';

class Testimonials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            reviews: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        reviews: result.review
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
                {/* Testimonials */}
                <section className="section testimonials">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="section-header text-center">
                                <h2>Đánh giá từ khách hàng</h2>
                                <p className="sub-title">Khách hàng của Nàng Beauty nói gì về dịch vụ của chúng tôi</p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            {
                                this.state.reviews.slice(0, 3).map(review => (
                                    <div className="col-md-6 col-lg-4 cust-says">
                                        <div className="testi-user">
                                            <img src={review.cus[0].img} alt="Testimonial" />
                                        </div>
                                        <div className="card">
                                            <div className="cust-header">
                                                <div className="rating text-center">
                                                    {
                                                        [...Array(review.star).fill(1), ...Array(5 - review.star).fill(0)].map(i => {
                                                            return i ? 
                                                                (<FontAwesomeIcon icon={faStar} className='filled' />) : 
                                                                (<FontAwesomeIcon icon={faStar} />)
                                                        })
                                                    }
                                                </div>
                                                <h3 className="text-center">{review.cus[0].name}</h3> 
                                            </div>
                                            <p>{review.review}</p>
                                            <div className="row row-sm cust-footer">
                                                <div className="col-8 align-items-center d-flex">
                                                    <Link to="#" className="cust-name">{review.emp[0].lastname} {review.emp[0].firstname}<span> - Nhà tạo mẫu </span></Link>
                                                </div>
                                                <div className="col-4 text-right">
                                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
                {/* Testimonials */}
            </div>
        )
    }
}
export { Testimonials };