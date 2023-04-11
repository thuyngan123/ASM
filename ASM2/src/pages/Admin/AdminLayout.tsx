import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    // getItem('Option 1', '1', <PieChartOutlined />),
    // getItem('Dashboard', '2', <DesktopOutlined />, <Link to={'/admin'} />),
    getItem('Quản lí sản phẩm', 'sub1', <UserOutlined />, [
        getItem('Danh sách sản phẩm', '3', <Link to={'/admin/products'} />),
        getItem('Thêm sản phẩm', '4', <Link to={'/admin/products/add'} />),
        // getItem('Cập nhật sản phẩm', '4'),
    ]),
    getItem('Quản lí danh mục', 'sub2', <TeamOutlined />,
        [getItem('Danh sách danh mục', '6', <Link to={'/admin/categories'} />),
        getItem('Thêm danh mục', '6', <Link to={'/admin/categories/addcategory'} />)]),
    getItem('Quản lí tài khoản', 'sub2', <TeamOutlined />,
        [getItem('Admin', '6', <Link to={'/admin/products'} />),
        getItem('Member', '6', <Link to={'/'} />)]),

];


const AdminLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '0 16px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                        < Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};


export default AdminLayout