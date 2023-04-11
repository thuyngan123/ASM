import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Upload, Select, Image } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
// import type { UploadFile } from 'antd/es/upload/interface';
import { IProduct } from '../../interface/product';
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../interface/category';
import { getAllCategory } from '../../api/category';
import axios from 'axios';
;
import { SubmitHandler, useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
interface IProps {
    onAdd: (product: IProduct) => void
}

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 20 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};


const AddProducts = (props: IProps) => {
    const [categories, setCategories] = useState<ICategory[]>([])
    useEffect(() => {
        getAllCategory().then(({ data }) => setCategories(data))
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmits = (values: IProduct) => {
        alert("Thêm sản phẩm thành công");
        props.onAdd(values);
        navigate('/admin/products');

    };

    const [images, setImage] = useState("");
    const uploadImage = () => {

        const formData = new FormData();
        formData.append("file", images);
        formData.append("upload_preset", "test_tt")

        axios.post("https://api.cloudinary.com/v1_1/dkgob05ir/image/upload", formData).then(({ data }) => {
            setImage(data.secure_url);
        })


    }


    return (
        <form onSubmit={handleSubmit(onSubmits)}>
            <div className="mb-3">
                <label className="form-label">Tên sản phẩm</label>
                <input  {...register('Name', { required: true })} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nhập tên sản phẩm" />
            </div>
            <div className="mb-3">
                <label className="form-label">Giá sản phẩm</label>
                <input  {...register('Price', { required: true })} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Nhập giá sản phẩm" />
            </div>
            <div className="mb-3">
                <label className="form-label">Ảnh sản phẩm</label>
                <input className="form-control" type="file" id="formFileMultiple" multiple  {...register('images', { required: true })}
                    onChange={(event: any) =>
                        setImage(event.target.files[0])}
                />
            </div>
            <select className="form-select" aria-label="Default select example" {...register('categoryId', { required: true })}>
                {categories.map((item) => (
                    <option key={item._id} value={item._id}>{item.name}</option>
                ))}

            </select >
            <div className="mb-3">
                <label className="form-label">Mô tả</label>
                <textarea className="form-control" id="exampleFormControlTextarea1"  {...register('Description', { required: true })} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>


    )


}

export default AddProducts