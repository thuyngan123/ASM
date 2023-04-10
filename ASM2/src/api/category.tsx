import instance from "./instance"
import { ICategory } from "../interface/category"

export const getAllCategory = () => {
    return instance.get('/categories');
}
export const getOneCategory = (id: number) => {
    return instance.get(`/categories/${id}`)
}