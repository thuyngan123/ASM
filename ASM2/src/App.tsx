import { useEffect, useState } from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsDetails from './pages/ProductsDetails'
import AdminLayout from './pages/Admin/AdminLayout'
import ProductsPage from './pages/Products'
import Products from './pages/Admin/Products'
import AddProducts from './pages/Admin/AddProducts'
import UpdateProduct from './pages/Admin/UpdateProduct'
import { IProduct } from './interface/product'
import { getAll, removeProduct, createProduct, updateProducts } from './api/product'
import { ICategory } from './interface/category'
import { getAllCategory } from './api/category'
import Category from './pages/Admin/Category'
import Signup from './pages/Admin/auth/signup';
import { ILogin, IUser } from './interface/user'
import { login } from './api/auth'
import Login from './pages/Admin/auth/signin'
import UploadImagePage from './pages/Admin/uploadImage'


function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([])
  useEffect(() => {
    getAll().then(({ data }) => setProducts(data))
  }, [])
  const onHandleRemove = (id: number) => {
    removeProduct(id).then(() => setProducts(products.filter((item: IProduct) => item._id !== id)))
  }
  const onHandleAdd = async (product: IProduct) => {
    createProduct(product).then(() => getAll().then(({ data }) => setProducts(data)))
  }
  const onHandleUpdate = (product: IProduct) => {
    updateProducts(product).then(() => setProducts(products.map(item => item._id === product._id ? product : item)))
    console.log(product)

  }

  //Danh mục
  useEffect(() => {
    getAllCategory().then(({ data }) => setCategories(data))
  }, []);



  //auth
  const [users, setUser] = useState<IUser[]>([]);
  const onAddUser = async (user: IUser) => {
    try {
      const { data } = await login(user);
      if (data) {
        setUser([...users, data])
      }
    } catch (error) {

    }
  }






  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='product'>
            <Route index element={<ProductsPage categoryName={categories} />} />
            <Route path=':id' element={<ProductsDetails products={products} />} />
          </Route>
        </Route>
        <Route path='/auth'>
          <Route path='signup' element={<Signup onAdd={onAddUser} />} />
          <Route path='Login' element={<Login />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='products'>
            <Route index element={<Products RemoveProducts={onHandleRemove} products={products} />} />
            <Route path='add' element={<AddProducts onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProduct products={products} onUpdate={onHandleUpdate} />} />
          </Route>
          <Route path='categories'>
            <Route index element={<Category categories={categories} />} />

          </Route>
        </Route>
        <Route path="/upload" element={<UploadImagePage />}>

        </Route>


      </Routes>
    </div >
  )
}

export default App
