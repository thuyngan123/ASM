import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/footer'
import { Outlet } from 'react-router-dom'
import ProductsPage from './Products'
import { ICategory } from '../interface/category'


type Props = {}

const HomePage = (props: ICategory) => {
    return (
        <div>
            {/* <Header /> */}
            <ProductsPage />
            <Footer />
        </div>
    )
}

export default HomePage