
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
    categories: ICategory[],
    removeCategory: (id: number) => void
}

const Category = (props: ICategoryList) => {
    const RemoveCategory = (id: number) => {
        props.removeCategory(id);
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: "Action",
            dataIndex: '',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <div>
                        <Button type="primary" onClick={() => RemoveCategory(record._id)}>Xóa</Button>
                    </div>


                </Space>

            )

        }
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