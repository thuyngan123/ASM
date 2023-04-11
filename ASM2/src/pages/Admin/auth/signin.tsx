import React from 'react';
import { useForm } from "react-hook-form";
import { login } from '../../../api/auth';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ISignin } from '../../../interface/user';
import Header from '../../Layout/Header';
import Footer from '../../Layout/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

// const LoginForm = () => {
//     const onFinish = (values: any) => {
//         console.log('Success:', values);
//     };

//     const onFinishFailed = (errorInfo: any) => {
//         console.log('Failed:', errorInfo);
//     };
// }


const signin = (props: any) => {
    const text = {
        "color": "red",
        "text-align": "center",
        "margin-top": 100,
        "margin-bottom": 50
    }
    const formlogin = {
        "margin-left": 500,
    }
    const formInput = {
        "width": 1000
    }
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm();
    const onHandleSubmit = async (data: any) => {
        const { data: user } = await login(data);
        localStorage.setItem("user", JSON.stringify(user))
        const users = JSON.parse(localStorage.getItem('user')!);
        if (users.user.role === "admin") {

            alert("Bạn đăng nhập Admin thành công");
            navigate("/admin");
        } else {
            alert("Bạn đăng nhập thành công");
            navigate("/")

        }
        console.log(users.users.role)



    }
    return (
        <div>
            <Header />
            <h2 style={text}>LOGIN</h2>
            <form onSubmit={handleSubmit(onHandleSubmit)} style={formlogin} >
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email"{...register('email')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={formInput} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" {...register('password')} className="form-control" id="exampleInputPassword1" style={formInput} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" >Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            < Footer />

        </div >
    )
}

export default signin