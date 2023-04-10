import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Upload, Select, Image } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { IProduct } from '../../interface/product';
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../interface/category';
import { getAllCategory } from '../../api/category';
import axios from 'axios';



interface IProps {
    onAdd: (product: IProduct) => void
}

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 20 },
};

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

    const navigate = useNavigate();
    const onFinish = (values: any) => {
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
        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{ maxWidth: 1000 }}

        >
            <Form.Item name='Name' label="Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name='Price' label="Price" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name='images' label="Image" rules={[{ required: true }]} >
                <input type='file' name='images'
                    onChange={(event: any) =>
                        setImage(event.target.files[0])

                    }



                />


            </Form.Item>
            <Form.Item name='Description' label="Description" rules={[{ required: true }]}>
                <Input.TextArea />
            </Form.Item>
            <Form.Item name='categoryId' label="Categories" >
                <Select value={categories}>
                    {categories.map((item) => (
                        <Select.Option key={item._id} value={item._id}>{item.name}</Select.Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                <Button onClick={uploadImage} type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>

    )


}

export default AddProducts