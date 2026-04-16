import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Cart from "./components/Cart/Cart"
import Product from "./components/Product/Product"

import NotFound from "./components/NotFound/NotFound"
import { useEffect, useState } from 'react'




export default function App() {

  const [userToken, setUserToken] = useState(null)
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setUserToken(localStorage.getItem("userToken"))
    }
  } , [])
let routes = createBrowserRouter([
  {path:"/" , element:<Layout isLogin={Boolean(userToken)}/> , children:[
    {index:true , element:<Home/>},
    {path:"login" , element:<Login setUserToken={setUserToken} />},
    {path:"register" , element:<Register/>},
    {path:"cart" , element:<Cart/>},
    {path:"product" , element:<Product/>},
    {path:"*" , element:<NotFound/>},


  ]}
])
  return (
   <RouterProvider router={routes}/>
  )
}
