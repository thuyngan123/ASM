import Joi from "joi"
export const signupSchema = Joi.object({
    name: Joi.string().required().messages({
        "string.empty": "Ten khong duoc de trong",
        "any.required": "Truong name la bat buoc"
    }),
    email: Joi.string().required().messages({
        "string.empty": "Email khong duoc de trong",
        "any.required": "Truong email la bat buoc",
        "string.email": "Email khong dung dinh dang"
    }),
    password: Joi.string().required().min(6).messages({
        "string.empty": "Password khong duoc de trong",
        "any.required": "Truong password la bat buoc",
        "string.min": "Password phai co it nhat {#limit} ki tu"
    }),
    confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
        "string.empty": "Xac nhan mat khau khong duoc de trong",
        "any.required": "Xac nhan mat khau la bat buoc",
        "any.only": "Xac nhan mat khau khong khop"
    })
})

export const signinSchema = Joi.object({
    email: Joi.string().required().messages({
        "string.empty": "Email khong duoc de trong",
        "any.required": "Truong email la bat buoc",
        "string.email": "Email khong dung dinh dang"
    }),
    password: Joi.string().required().min(6).messages({
        "string.empty": "Password khong duoc de trong",
        "any.required": "Truong password la truong bat buoc",
        "string.min": "Password phai co it nhat 6 ki tu"
    })
})