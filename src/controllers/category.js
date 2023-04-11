import Joi, { trace } from "joi";
// import Product from "../models/product";
import Category from "../models/category";

const categorySchema = Joi.object({
    name: Joi.string().required(),
});

export const getAll = async (req, res) => {
    try {
        const categories = await Category.find();
        if (categories.length === 0) {
            return res.status(400).json({
                message: "Không có danh mục nào"
            })
        }
        return res.status(200).json(categories)
    } catch (error) {
        return res.json({
            message: error.message
        })

    }
}
export const get = async function (req, res) {
    try {
        const categoies = await Category.findById(req.params.id).populate("products");
        if (!categoies) {
            return res.status(400).json({
                message: "Không có danh mục nào"
            })
        };
        // const products = Product.find({ categoryId: req.params.id });
        // console.log(products);
        // return res.status(200).json(...categoies.toObject(), products) // chuyển đcatổi đối tượng category sang một đối tượng dạng Object
        return res.status(200).json(categoies);
    } catch (error) {
        return res.json({
            message: error.message
        })
    }

}
export const create = async (req, res) => {
    try {
        const body = req.body;
        const { error } = categorySchema.validate(body);
        if (error) {
            const errors = error.details.map((errorItem) => errorItem.message);
            return res.status(400).json({
                message: errors,
            });
        }
        const data = await Category.create(body);
        if (!data) {
            return res.status(200).json({
                message: "Thêm danh mục không thành công",
                data,
            })
        }
        return res.status(200).json({
            message: "Thêm danh mục thành công",
            data
        })
    } catch (error) {
        return res.json({
            message: error,
        })

    }


}
export const remove = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        return res.json({
            message: "Xóa danh mục thành công",
            category,
        })
    } catch (error) {
        message: error.message
    }
}
