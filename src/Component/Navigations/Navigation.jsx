import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AllProducts from '../Pages/Product/AllProducts'
import ProductDetail from '../Pages/ProductDetail/ProductDetail'
import AddProduct from '../Pages/Dashboard/AddProduct'

const router = createBrowserRouter([
    {
        path: "/",
        element: <AllProducts />
    },
    {
        path: "/product-detail/:id",
        element: <ProductDetail />
    },
    {
        path: "/dashboard",
        element: <AddProduct />
    },

])
function Navigation() {

    return (
        <RouterProvider router={router} />
    )
}
export default Navigation