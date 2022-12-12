import React from 'react'
// import './app.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Categories from './Pages/Categories/Categories';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Products from './Pages/Products/Products';
import Conatact from './Pages/Contact/Conatact';
import Dropdown from './Pages/Dropdown/Dropdown';


const Layout = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
      {
        path: "/categories",
        element: <Categories />
      },
      {
        path: "/contact",
        element: <Conatact />
      },
      {
        path: "/dropdown",
        element: <Dropdown />
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App