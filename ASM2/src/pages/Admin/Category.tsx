
import React from 'react';
import { Button, Table, Space, } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ICategory } from '../../interface/category';

type Props = {}
interface DataType {
    key: string | number,
    _id: number | string,
    name: String,
}
interface ICategoryList {
    categories: ICategory[]
}

const Category = (props: ICategoryList) => {
    const columns: ColumnsType<DataType> = [

        {
            title: 'Id',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
    ];
    const data: DataType[] = props.categories.map((item: ICategory) => {
        return {
            key: item._id,
            ...item

        }
    })

    return (
        <div> <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} /></div>
    )
}

export default Category