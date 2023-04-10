import jwt from "jsonwebtoken";
import User from "../models/user";

export const checkPermission = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(400).json({
                message: "Vui long dang nhap"
            })
        }
        const token = req.headers.authorization.split(" ")[1];
        const { _id } = await jwt.verify(token, "LaThuyNgan");
        const user = await User.findById(_id);
        if (user.role !== "admin") {
            return res.status(400).json({
                message: "Bạn không có quyền truy cập tài nguyên này"
            })
        }
        next()

        //     if (error.name == 'TokenExpiredError') {
        //         return res.status(400).json({
        //             message: "Token hết hạn"
        //         })
        //     }
        //     if (error.name == 'JsonWebTokenError') {
        //         return res.status(400).json({
        //             message: 'Token không hợp lệ'
        //         })

        //     }
        // }
        // const user = await User.findById(payload._id);
        // if (user.role !== "admin") {
        //     return res.status(400).json({
        //         message: "Bạn không có quyền truy cập tài nguyên này"
        //     })
        // }
    } catch (error) {
        return res.status(400).json({
            message: error.message || "Token khong hop le"
        })

    }
}