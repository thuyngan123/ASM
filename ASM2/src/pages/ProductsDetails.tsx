import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IProduct } from '../interface/product';
import { ICategory } from '../interface/category';
import { getAllCategory } from '../api/category';
import Footer from './Layout/footer';
import Header from './Layout/Header';


interface IProps {
    products: IProduct[];
    // category: ICategory[]

}

const ProductsDetails = (props: IProps) => {
    const text = {
        "margin-top": 10
    }
    const { id } = useParams()
    const [product, setProduct] = useState<IProduct>()
    // const [categories, setCategories] = useState<ICategory>()
    useEffect(() => {

        const currentProduct = props.products.find((item: any) => item._id === (id));
        setProduct(currentProduct);


    })
    // useEffect(() => {
    //     getAllCategory().then(({ data }) => setCategories(data));
    // }, [])
    return (
        <div>
            <Header />
            {/* <h2>CHI TIẾT SẢN PHẨM</h2> */}
            <section className="product-details spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product__details__pic">
                                <div className="product__details__pic__left product__thumb nice-scroll">
                                    <a className="pt active" href="#product-1">
                                        <img src={`${product?.images}`} alt="" />
                                    </a>
                                    <a className="pt" href="#product-2">
                                        <img src={product?.images} alt="" />
                                    </a>
                                    <a className="pt" href="#product-2">
                                        <img src={product?.images} alt="" />
                                    </a>


                                </div>
                                <div className="product__details__slider__content">
                                    <div className="product__details__pic__slider owl-carousel">
                                        <img className="product__big__img" src={product?.images} alt="" />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product__details__text">
                                <h3>{product?.Name}</h3>
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <span>( 138 reviews )</span>
                                </div>
                                <div className="product__details__price">{product?.Price}</div>
                                {/* <p>Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur
                                    magni lores eos qui ratione voluptatem sequi nesciunt.</p> */}
                                <div className="product__details__button">
                                    <div className="quantity">
                                        <span>Quantity:</span>
                                        <div className="pro-qty">
                                            <input type="text" value="1" />
                                        </div>
                                    </div>
                                    <a href="#" className="cart-btn"><span className="icon_bag_alt"></span> Add to cart</a>
                                    <ul>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_adjust-horiz"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__details__widget">
                                    <ul>
                                        <li>
                                            <span>Availability:</span>
                                            <div className="stock__checkbox">
                                                <label>
                                                    In Stock
                                                    <input type="checkbox" id="stockin" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <span>Available color:</span>
                                            <div className="color__checkbox">
                                                <label >
                                                    <input type="radio" name="color__radio" id="red" checked />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label >
                                                    <input type="radio" name="color__radio" id="black" />
                                                    <span className="checkmark black-bg"></span>
                                                </label>
                                                <label >
                                                    <input type="radio" name="color__radio" id="grey" />
                                                    <span className="checkmark grey-bg"></span>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <span>Available size:</span>
                                            <div className="size__btn">
                                                <label className="active">
                                                    <input type="radio" id="xs-btn" />
                                                    xs
                                                </label>
                                                <label >
                                                    <input type="radio" id="s-btn" />
                                                    s
                                                </label>
                                                <label >
                                                    <input type="radio" id="m-btn" />
                                                    m
                                                </label>
                                                <label>
                                                    <input type="radio" id="l-btn" />
                                                    l
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <span>Promotions:</span>
                                            <p>Free shipping</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product__details__tab">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Description</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Specification</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Reviews ( 2 )</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                        <h6>Description</h6>
                                        <p>{product?.Description}</p>
                                    </div>
                                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                                        <h6>Specification</h6>
                                        <p>{product?.Description}</p>
                                    </div>
                                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                                        <h6>Reviews ( 2 )</h6>
                                        <p>{product?.Description}</p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                            quis, sem.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="related__title">
                                <h5>RELATED PRODUCTS</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                    <img src="https://img.ltwebstatic.com/images3_pi/2022/05/19/16529298335c05e097da57dbc20eade6d71f79feb4_thumbnail_405x552.webp" alt="" />
                                    <div className="label new">New</div>
                                    <ul className="product__hover">
                                        <li><a href="img/product/related/rp-1.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Buttons tweed blazer</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" >
                                    <img src="https://img.ltwebstatic.com/images3_pi/2022/05/23/1653282746a02f1dcb1b77898d9363b3fc724046a5_thumbnail_405x552.webp" alt="" />
                                    <ul className="product__hover">
                                        <li><a href="img/product/related/rp-2.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Flowy striped skirt</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 49.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/related/rp-3.jpg">
                                    <img src="https://img.ltwebstatic.com/images3_pi/2021/09/01/16304794641bb839913aad90dcea06681660e34fd8_thumbnail_405x552.webp" alt="" />
                                    <div className="label stockout">out of stock</div>
                                    <ul className="product__hover">
                                        <li><a href="img/product/related/rp-3.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Cotton T-Shirt</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/related/rp-4.jpg">
                                    <img src="https://img.ltwebstatic.com/images3_pi/2023/01/10/16733203940c19feb8c94e65ba3efd786fbace77b5_thumbnail_405x552.webp" alt="" />
                                    <ul className="product__hover">
                                        <li><a href="img/product/related/rp-4.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Slim striped pocket shirt</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />

        </div>
    )
}

export default ProductsDetails