import React from 'react';
import { Link, useLocation } from 'react-router-dom'

// Import Blog Sidebar
import { BlogSidebar } from './blog-sidebar';

// Import Images
import BlogImg from '../../assets/img/blog/blog-01.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faComments, faReply, faTags } from '@fortawesome/fontawesome-free-solid';
import { faFacebook, faGooglePlus, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

class BlogDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const blog = this.props.location.state.blog

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
                                        <li className="breadcrumb-item active" aria-current="page">Blog</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Chi tiết blog</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb */}

                {/* Page Content */}
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">

                                <div className="blog-view">
                                    <div className="blog blog-single-post">
                                        <div className="blog-image">
                                            <Link to="#"><img alt="" src={blog.img} className="img-fluid" /></Link>
                                        </div>
                                        <h3 className="blog-title">{blog.title}</h3>
                                        <div className="blog-info clearfix">
                                            <div className="post-left">
                                                <ul>
                                                    <li><FontAwesomeIcon icon={faCalendarCheck} />{blog.date}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                                        </div>
                                    </div>


                                    <div className="card blog-share clearfix">
                                        <div className="card-header">
                                            <h4 className="card-title">Chia sẽ bài đăng</h4>
                                        </div>
                                        <div className="card-body">
                                            <ul className="social-share">
                                                <li><Link to="#" title="Facebook"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                                                <li><Link to="#" title="Twitter"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                                                <li><Link to="#" title="Linkedin"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                                                <li><Link to="#" title="Google Plus"><FontAwesomeIcon icon={faGooglePlus} /></Link></li>
                                                <li><Link to="#" title="Youtube"><FontAwesomeIcon icon={faYoutube} /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Blog Sidebar */}
                            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
                                <BlogSidebar />
                            </div>
                            {/* Blog Sidebar */}
                        </div>
                    </div>
                </div>
                {/* Page Content */}
            </div>
        )
    }
}
export { BlogDetails };