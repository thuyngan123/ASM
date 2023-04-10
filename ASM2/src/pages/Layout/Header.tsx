import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/elegant-icons.css';
import '../../assets/css/font-awesome.min.css'
import '../../assets/css/jquery-ui.min.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/owl.carousel.min.css'
import '../../assets/css/slicknav.min.css';
import '../../assets/css/style.css';
import '../../assets/css/bootstrap.min.css';
import logo from "../../assets/img/logo.png"
import { Link } from 'react-router-dom';


type Props = {}

const Header = (props: Props) => {
    return (
        <Fragment>
            {/* <div id="preloder">
                <div className="loader"></div>
            </div> */}
            {/* <!-- Page Preloder --> */}
            <div id="preloder">
                <div className="loader"></div>
            </div>


            {/* <!-- Header Section Begin --> */}
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-2">
                            <div className="header__logo">
                                <img src={logo} alt="" />
                                <a href="./index.html"><img src="../../assets/img/discount.jpg" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active"><Link to="/">Home</Link></li>
                                    <li><a href="#">Women’s</a></li>
                                    <li><a href="#">Men’s</a></li>
                                    {/* <li><a href="./shop.html">Shop</a></li> */}
                                    <li><Link to="product">Shop</Link>
                                        <ul className="dropdown">
                                            {/* <li><a href="./product-details.html">ProductsDetails</a></li> */}
                                            <li><Link to="product/:id">Product Details</Link></li>
                                            <li><a href="./shop-cart.html">Shop Cart</a></li>
                                            <li><a href="./checkout.html">Checkout</a></li>
                                            <li><a href="./blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="./blog.html">Blog</a></li>
                                    <li><a href="./contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__right">
                                <div className="header__right__auth">
                                    {/* <a href="#">Login</a> */}
                                    <Link to="/auth/Login">Login</Link>
                                    <Link to="/auth/signup">Resgister</Link>

                                </div>
                                <ul className="header__right__widget">
                                    <li><span className="icon_search search-switch"></span></li>
                                    <li><a href="#"><span className="icon_heart_alt"></span>
                                        <div className="tip">2</div>
                                    </a></li>
                                    <li><a href="#"><span className="icon_bag_alt"></span>
                                        <div className="tip">2</div>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header >
            <div className="container-fluid">
                <div className="row">
                    <img src="https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-nu-cuc-dep_113857585.jpg" alt="" width="1000px" height="500px" />
                    <div className="col-lg-6 p-0">

                    </div>
                </div>
            </div>

        </Fragment >



    )
}


export default Header