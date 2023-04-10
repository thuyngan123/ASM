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
        navigate('/admin/products')
    }

    return (
        <form  {...layout}
            name="nest-messages"
            style={{ maxWidth: 1000 }}
            onSubmit={handleSubmit(onHandleSubmit)}
        // onFinishFailed={onFinishFailed}
        // validateMessages={validateMessages}

        >
            <Form.Item label="Name" name='Name' rules={[{ required: true }]}>
                <input {...register('Name')} />
            </Form.Item>
            <Form.Item label="Price" rules={[{ required: true }]}>
                <input {...register('Price')} />
            </Form.Item>
            <Form.Item label="Image" rules={[{ required: true }]}{...register('images')}>
                <Upload
                // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                // listType="picture"
                // defaultFileList={[...fileList]}
                // className="upload-list-inline"
                >
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
            </Form.Item>
            <Form.Item label="Description" rules={[{ required: true }]}>
                {/* <Input.TextArea /> */}
                <textarea {...register('Description')}></textarea>
            </Form.Item>
            <Form.Item name='categoryId' label="Categories" rules={[{ required: true }]}>
                <select >
                    {categories.map((item) => (
                        <option value={item._id}{...register('categoryId')}>{item.name}</option>

                    ))}
                    {/* {categories.map((item) => ( */}

                </select>
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

        </form>
    )
}

export default UpdateProduct