import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUser } from '../../../interface/user';


interface IProps {

    onAdd: (user: IUser) => void
}


const Signup = (props: IProps) => {

    const navigate = useNavigate();
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors }, } = useForm()

    const onFinish = (values: any) => {
        props.onAdd(values);
        console.log("Đăng kí thành công");
        navigate('/auth/Login');
    }
    // const onSubmit: SubmitHandler<IUser> = (data) => {
    //     onAdd(data);
    // }

    return (
        <Form
            name="basic"
            // labelCol={{ span: 8 }}
            // wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            // initialValues={{ remember: true }}
            onFinish={onFinish}
            // onSubmit={handleSubmit(onSubmit)}
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
                name="confirmpassword"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form >
    )
}




export default Signup