import React from 'react';
import { useForm } from "react-hook-form";
import { login } from '../../../api/auth';
import { Form, Input, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    type Props = {}

    const signin = (props: Props) => {
        const {
            register,
            handleSubmit,
            formState: { errors },

        } = useForm();
        const onHandleSubmit = async (data: any) => {
            const { data: users } = await login(data)
            // console.log("user", user);
            localStorage.setItem('users', JSON.stringify(users));  //Lưu vào localStorage 


        }
        return (
            <div>
                {/* <form onSubmit={handleSubmit(onHandleSubmit)}>

                    <input type="text"{...register('email')} />
                    <input type="password" {...register('password')} />
                    <button>Login</button>

                </form> */}
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish{handleSubmit(onHandleSubmit)}}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }

    export default signin