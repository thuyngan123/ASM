import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type ICategory = {
    addCategory: (categories: ICategory) => void
}

const AddCategory = (props: ICategory) => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm();
    const onCategory = (values: ICategory) => {
        props.addCategory(values);
        alert("Thêm danh mục thành công");
        navigate('/admin/categories')
    }


    return (
        <div>  <form onSubmit={handleSubmit(onCategory)}>
            <div className="mb-3">
                <label className="form-label">Tên danh mục</label>
                <input  {...register('name', { required: true })} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nhập tên danh mục" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}

export default AddCategory