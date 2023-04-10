import axios from "axios";
import Joi from "joi";
import Product from "../models/product";
import category from "../models/category";

const productSchema = Joi.object({
    Name: Joi.string().required(),
    Price: Joi.number().required(),
    Description: Joi.string(),
    // images: Joi.required(),
    images: Joi.required(),
    categoryId: Joi.string().required(),
})

export const getAll = async function (req, res) {
    const { _sort = "createAt", _order = "asc", _litmit = 10, _page = 1 } = req.query;
    const options = {
        page: _page,
        limit: _litmit,
        sort: {
            [_sort]: _order == "desc" ? -1 : 1
        }
    }
    try {
        const data = await Product.find()
        // const { docs, totalDocs, totalPages } = await Product.paginate({}, options);
        if (data.length === 0) {
            return res.status(400).json({ message: "Không có sản phẩm nào" });
        }
        // return res.status(200).json({ data: docs, totalDocs, totalPages });
        return res.status(200).json(data);
    } catch (error) {
        return res.json({
            message: error.message,
        });
    }
};
export const remove = async (req, res) => {
    try {
        const products = await Product.findByIdAndDelete(req.params.id);
        // await axios.delete(`http://localhost:3001/products/${req.params.id}`);
        return res.json({ message: "Xóa thành công" });
    } catch (error) {
        return res.json({
            message: error.message,
        });
    }
};
export const create = async (req, res) => {
    try {
        const body = req.body;
        const { error } = productSchema.validate(body);
        if (error) {
            const errors = error.details.map((errorItem) => errorItem.message);
            return res.status(400).json({
                message: errors,
            })
        }
        const product = await Product.create(body);
        await category.findByIdAndUpdate(product.categoryId, {
            $addToSet: {
                products: product._id,
            },
        });
        // const { data } = await axios.post("http://localhost:3001/products", body);
        if (!product) {
            return res.status(400).json({ message: "Thêm sản phẩm thất bại" });
        }
        return res.json({
            message: "Thêm sản phẩm thành công",
            product,
        });
    } catch (error) {
        return res.json({
            message: error.message,
        });
    }
};
export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await Product.findOneAndUpdate({ _id: id }, body, { new: true })
        // const { data } = await axios.put(`http://localhost:3001/products/${id}`, body);
        if (!data) {
            return res.status(400).json({ message: "Cập nhật thất bại" });
        }
        return res.json({
            message: "Cập nhật thành công",
            data,
        });
    } catch (error) {
        return res.json({
            message: error.message,
        });
    }
};
export const get = async function (req, res) {
    try {
        const data = await Product.findOne({ _id: req.params.id }).populate({
            path: "categoryId"
        });// populate là một phương thức sủ dụng trong mongoose sử dụng để thay thế các đường dẫn được chỉ định trong một tài liệu 
        // const { data } = await axios.get(`http://localhost:3001/products/${req.params.id}`);
        if (!data) {
            return res.status(400).json({ message: "Không có sản phẩm nào" });
        }
        return res.json(data);
    } catch (error) {
        return res.json({
            message: error.message,
        });
    }
};



