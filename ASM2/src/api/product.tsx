import instance from "./instance"
import { IProduct } from "../interface/product";
// const user = JSON.parse(localStorage.getItem("user")!);
export const getAll = () => {
    return instance.get('/product');
}
export const removeProduct = (_id: number) => {
    return instance.delete(`/product/${_id}`

    )
}
export const updateProducts = (product: IProduct) => {
    return instance.put(`/product/` + product._id, product)
}
export const createProduct = (product: IProduct) => {
    return instance.post('/product', product,)
}
