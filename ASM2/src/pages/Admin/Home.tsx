import React from 'react'
import Header from '../Layout/HeaderAdmin'
import ProductsPage from '../Products'
import Footer from '../Layout/footer'
import { Outlet } from 'react-router-dom'
import Products from './Products'

const HomeAdmin = () => {
    return (
        <div>
            {/* <ProductsPage /> */}
            <Footer />
        </div>
    )
}

export default HomeAdmin
