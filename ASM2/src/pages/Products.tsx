// import React, { useEffect, useState } from 'react'
import Header from './Layout/Header'
import { IProduct } from '../interface/product'
import { useEffect, useState } from 'react'
import { getAll } from '../api/product'
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
import { getAllCategory } from '../api/category';
import { Card, List, Image, Typography } from 'antd';
const { Text, Link } = Typography;

type IProps = {
    categoryName: ICategory[];
    products: IProduct[];
}

const ProductsPage = (props: IProps) => {
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
        // const categoryFilter = props.categoryName.filter((item: any) => item._id === (id));
        // setCategories(categoryFilter);
        getAllCategory().then(({ data }) => setCategories(data));
    }, []);

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
                                {categories.map((cate: any) => (
                                    <li className="active" data-filter="*">{cate.name}</li>
                                ))}


                            </ul>
                        </div>
                    </div>
                    <List
                        grid={{ gutter: 16, column: 4 }}
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <Card>
                                    <Image src={`${item.images}`} alt='' width="200px" height="300px" />
                                    <h1><Link href={`/product/${item._id}`} target="_blank">
                                        {item.Name}</Link></h1>
                                    <Link ><h3>{item.Price}</h3></Link>
                                    <Text>{item.Description}</ Text>


                                </Card>
                            </List.Item>
                        )
                        }
                    />
                </div>
            </section>
        </div>
    )
}

export default ProductsPage