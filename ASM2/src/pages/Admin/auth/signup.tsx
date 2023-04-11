import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignup } from '../../../interface/user';
import Header from '../../Layout/Header';
import Footer from '../../Layout/footer';





const Signup = (props: ISignup) => {
    const text = {
        "color": "red",
        "text-align": "center",
        "margin-top": 100,
        "margin-bottom": 50
    }
    const formStyle = {
        "maxWidth": 1200,
        "margin-left": 90
    }

    const navigate = useNavigate();
    const onFinish = (values: any) => {
        props.onSignup(values);
        alert("Đăng kí thành công");
        navigate('/auth/Login');
    }

    return (
        <div>
            <Header />
            <h3 style={text}>ĐĂNG KÍ TÀI KHOẢN</h3>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={formStyle}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name='email' label="Email" rules={[{ required: true, message: 'Please input your email!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="ConfirmPassword"
                    name="confirmPassword"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form >
            < Footer />

        </div >
    )
}




export default Signup