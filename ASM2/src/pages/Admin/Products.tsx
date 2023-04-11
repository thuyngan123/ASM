import React, { useEffect, useState } from 'react';
import { Button, message, Popconfirm, Table, Space, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
// import { AudioOutlined } from '@ant-design/icons';
import { IProduct } from '../../interface/product';
import { Link } from 'react-router-dom';
// import { Form } from 'react-router-dom';
import { getAll } from '../../api/product';
import axios from 'axios';
import cloundinary from 'cloudinary'
import Category from './Category';
import { ICategory } from '../../interface/category';
import { getAllCategory } from '../../api/category';




// interface DataType {
//     key: string | number,
//     id: number,
//     Name: String,
//     Price: Number,
//     Image: String,
//     Description: String,
//     CategoryId: String,
// }
interface IProductsListProps {
    products: IProduct[],
    RemoveProducts: (id: number) => void

};
interface ImageState {
    secure_url: string;
}

const Products = (props: IProductsListProps) => {
    const inpForm = {
        "margin-bottom": 20,
        "color": "red"
    }
    const confirm = () => {
        message.info('Clicked on Yes.');
    };

    const removeProduct = (id: number) => {
        props.RemoveProducts(id)
    }
    // const [images, setImage] = useState<string[]>([]);
    // const uploadImage = () => {
    //     const formData = new FormData();
    //     formData.append("file", images);
    //     formData.append("upload_preset", "test_tt");
    //     axios
    //         .post<ImageState>("https://api.cloudinary.com/v1_1/dkgob05ir/image/upload", formData)
    //         .then(({ data }) => {
    //             setImage(data.secure_url); // Adding new URL to existing list of URLs
    //         });
    // };

    const columns: ColumnsType<IProduct> = [

        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
        },
        {
            title: 'Price',
            dataIndex: 'Price',
            key: 'Price',
        },
        {
            title: 'Image',
            dataIndex: '',
            key: '',
            render: (record: IProduct) => <img src={`${record.images}`} alt="no image" width={150} height={100} />

        },
        {
            title: 'Category',
            dataIndex: 'categoryId',
            key: 'categoryId',
        },

        {
            title: 'Action',
            key: 'action',
            render: (record) => (

                <Space size="middle">
                    <div>
                        <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeProduct(record._id)}>Remove</Button>
                    </div>

                    {/* <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeProduct(record.id)}>Remove</Button> */}
                    <Button type="primary" ><Link to={`/admin/products/${record._id}/update`}>Update</Link></Button>
                </Space>
            ),
        },
    ];

    //   Search
    const [filteProduct, setFilterProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        setFilterProducts(props.products);

    }, [props.products])
    const fethData = (value: any) => {
        getAll().then(({ data }) =>
        // console.log(data))
        {
            const results = data.filter((data: any) => {
                return (value && data && data.Name.toLowerCase().includes(value))
            })
            setFilterProducts(results)
        })
    }
    const [category, setcategory] = useState<ICategory[]>([]);
    useEffect(() => {
        getAllCategory().then(({ data }) => setcategory(data));
    }, [])
    const [input, setInput] = useState([]);
    // console.log(input);
    const handleChange = (value: any) => {
        // setInput(value);
        setInput(value);
        if (value === "") {
            setFilterProducts(props.products)
        } else {
            fethData(value);
        }
        // fethData(value)

    }
    const product: IProduct[] = filteProduct.map((item: IProduct) => {
        return {
            key: item._id,
            ...item

        }
    })
    //Lọc danh mục
    const [products, setProducts] = useState<IProduct[]>([])
    const filterCatIdPro = (_id: any) => {
        if (products.length > 1) {
            const result = products.filter((product) => {
                return product.categoryId === _id;
            })
            setProducts(result);
        } else {
            console.log('No products')
        }

    }

    return (
        <div>
            <form>
                <input style={inpForm} className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." value={input} onChange={(e) => handleChange(e.target.value)} />
            </form>
            <div>

                {category.map((cate: ICategory) => (
                    <button onClick={() => filterCatIdPro(cate._id)}>{cate.name}</button>
                ))}
            </div>


            <Button type='primary'><Link to={'/admin/products/add'}>Add New Product</Link></Button>
            <Table columns={columns} dataSource={product} pagination={{ pageSize: 5 }} />
        </div>
    )
}

export default Products



















// import React from 'react'
// import { IProduct } from '../../interface/product'

// type ProductsListProps = {
//     products: IProduct[];
//     RemoveProducts: (Id: Number) => void

// }

// const Products = ({ products, RemoveProducts }: ProductsListProps) => {
//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>Name</th>
//                     <th>Price</th>
//                     <th>Image</th>
//                     <th>Description</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             {products?.map((item: IProduct, index) => (
//                 <tbody key={index}>
//                     <tr>
//                         <td>{item.id}</td>
//                         <td>{item.Name}</td>
//                         <td>{item.Price}</td>
//                         <td>{item.Image}</td>
//                         <td>{item.Description}</td>
//                         <td>
//                             <button onClick={() => RemoveProducts(item.id)}>Xóa</button>
//                         </td>
//                     </tr>

//                 </tbody>
//             ))}
//         </table>
//     )
// }
// export default Products