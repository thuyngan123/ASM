import React, { useEffect, useState } from 'react'
import { getAllCategory } from '../../api/category'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input, Upload, Select, Button, Form } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';
import { ICategory } from '../../interface/category'
import { IProduct } from '../../interface/product'
import TextArea from 'antd/es/input/TextArea'

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 20 },
};
const fileList: UploadFile[] = [
    {
        uid: '0',
        name: 'xxx.png',
        status: 'uploading',
        percent: 33,
    }
];

const UpdateProduct = (props: any) => {
    const [categories, setCategories] = useState<ICategory[]>([])
    useEffect(() => {
        getAllCategory().then(({ data }) => setCategories(data))
    }, []);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset

    } = useForm<IProduct>();
    const { id } = useParams();
    useEffect(() => {
        const currentProduct = props.products.find((item) => item._id == id);
        reset(currentProduct)
    }, [props]);
    const onHandleSubmit: SubmitHandler<IProduct> = data => {
        props.onUpdate(data);
        alert("Cập nhật sản phẩm thành công")
        navigate('/admin/products')
    }

    return (
        <form onSubmit={handleSubmit(onHandleSubmit)}>
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
                // onChange={(event: any) =>
                // setImage(event.target.files[0])}
                />
            </div>
            <select className="form-select" aria-label="Default select example" {...register('categoryId', { required: true })}>
                {categories.map((item) => (
                    <option value={item._id}{...register('categoryId')}>{item.name}</option>
                ))}

            </select >
            <div className="mb-3">
                <label className="form-label">Mô tả</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  {...register('Description', { required: true })} />
            </div>
            <button type="Submit" className="btn btn-primary">Submit</button>
        </form>

    )
}

export default UpdateProduct