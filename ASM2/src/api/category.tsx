import instance from "./instance"
import { ICategory } from "../interface/category"

export const getAllCategory = () => {
    return instance.get('/categories');
}
export const getOneCategory = (id: number) => {
    return instance.get(`/categories/${id}`)
}
export const creategory = (category: ICategory) => {
    return instance.post("/categories", category)
}
export const remove = (id: number) => {
    return instance.delete(`/categories/${id}`)
}