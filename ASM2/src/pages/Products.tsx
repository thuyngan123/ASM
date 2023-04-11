// import React, { useEffect, useState } from 'react'
import Header from './Layout/Header'
import { IProduct } from '../interface/product'
import { useEffect, useState } from 'react'
import { getAll } from '../api/product'
import filterProducts from './filterProducts'
import '../assets/css/elegant-icons.css';
import '../assets/css/font-awesome.min.css'
import '../assets/css/jquery-ui.min.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/owl.carousel.min.css'
import '../assets/css/slicknav.min.css';
import '../assets/css/style.css';
import '../assets/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { ICategory } from '../interface/category';
import { useParams } from 'react-router-dom';
import { getAllCategory, getOneCategory } from '../api/category';
import { Card, List, Image, Typography } from 'antd';
const { Text, Link } = Typography;
// const { Text, Link } = 'Typography';

// import { Link } from 'react-router-dom';
// import Footer from './Layout/footer';
// interface IProps {
//     products: IProduct[]

// }
type IProps = {
    categoryName: ICategory[];
    products: IProduct[];
}

const ProductsPage = (props: IProps) => {
    const listItem = {
        "height": 800
    }
    const pric = {
        "color": "red"
    }
    const desc = {
        "font-size": 14,

        "font-weight": 400,
        "line-height": 24,
    }
    const text = {
        "height": 100,
        "margin-bottom": 10,
        "font-size": 30,
        "margin-top": 20
    }
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await getAll();

                setProducts(data);
            } catch (error) {

            }
        })()
    }, []);

    const data: IProduct[] = products.map((item: IProduct) => {
        return {
            key: item._id,
            ...item
        }
    })
    const [categories, setCategories] = useState<ICategory[]>([])
    // const id = useParams()
    useEffect(() => {
        getAllCategory().then(({ data }) => setCategories(data));
    }, []);
    //product fillter
    const [filterProduct, setfilterProduct] = useState([])
    const [active, setActive] = useState('');
    const handleChange = (cate: any) => {
        setActive(cate._id);
        setCategories(cate.name);
        filterFunction(cate.name);

    }
    const filterFunction = (name: any) => {
        const filter = products.filter((product) => product.categories === name);
        setfilterProduct(filter);


    }
    const returntoAllProducts = () => {
        setActive('');
        setCategories('');
        setfilterProduct([]);

    }

    return (
        <div>
            <Header />
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="section-title">
                                <h4>New product</h4>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <ul className="filter__controls" >
                                <li>All</li>
                                {categories.map((cate: ICategory) => (
                                    <li data-filter="*" onClick={() => handleChange(categories)} className={cate._id === active ? active : 'deactive'}>{cate.name}</li>
                                ))}
                                {/* {filterProduct.length > 0 && (
                                    <h1>{categories.name}</h1>
                                    <a href=""onClick={returntoAllProducts}>Return All Products</a>
                                    {categories.map()}
                                )} */}
                                {/* <li data-filter=".women">Women’s</li>
                                <li data-filter=".men">Men’s</li>
                                <li data-filter=".kid">Kid’s</li>
                                <li data-filter=".accessories">Accessories</li>
                                <li data-filter=".cosmetic">Cosmetics</li> */}
                            </ul>
                        </div>
                    </div>
                    <List
                        grid={{ gutter: 16, column: 4 }}
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <Card style={listItem}>
                                    <Image src={`${item.images}`} alt='' width="200px" height="300px" />
                                    <h1 style={text}><Link href={`/product/${item._id}`} target="_blank">
                                        {item.Name}</Link></h1>
                                    <Link ><h3 style={pric}>{item.Price}<u>Đ</u></h3></Link>
                                    <Text style={desc}>{item.Description}</ Text>


                                </Card>
                            </List.Item>
                        )
                        }
                    />
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
            </section >

        </div >
    )
}

export default ProductsPage