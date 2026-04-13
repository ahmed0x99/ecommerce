import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Cart from "./components/Cart/Cart"
import Product from "./components/Product/Product"
import NotFound from "./components/NotFound/NotFound"


let routes = createBrowserRouter([
  {path:"/" , element:<Layout/> , children:[
    {index:"home" , element:<Home/>},
    {path:"login" , element:<Login/>},
    {path:"register" , element:<Register/>},
    {path:"cart" , element:<Cart/>},
    {path:"product" , element:<Product/>},
    {path:"*" , element:<NotFound/>},


  ]}
])
export default function App() {
  return (
   <RouterProvider router={routes}/>
  )
}
