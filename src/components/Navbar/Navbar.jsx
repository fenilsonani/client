import React, { useState } from 'react'
// import './Navbar.scss'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
import { useSelector } from 'react-redux'


const Navbar = () => {
    const [open, setopen] = useState(false)
    const products = useSelector(state => state.cart.products)
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
    };

    return (

        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to={"/"} className="flex items-center">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" /> */}
                    <span className="self-center -tracking-wider text-4xl whitespace-nowrap font-bold dark:text-white" id="title-logo">Artlaaza</span>
                </Link>
                <div className="flex items-center md:order-2">
                    <button type="button" className="flex mr-3 text-sm bg-gray-200 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        {/* code for the shopping cart fontawosome */}
                        <div className="cartIcon p-2 " onClick={() => setopen(!open)}>
                            <i className="fa-solid fa-shopping-cart flex"><p className='px-2'>{products.length}</p></i>
                            {/* <span className='absolute top-3 right-50 py-0 px-1.5 bg-blue-400 text-white rounded-full'>{products.length}</span> */}
                        </div>
                    </button>
                    <button onClick={handleClick} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 transition-all ease-in duration-300 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="items-center  justify-between flex w-full sm:flex md:flex md:w-auto md:order-1" id="mobile-menu-2" style={{ display: isShown ? 'block' : 'none' }}>
                    <ul className="flex flex-col p-4 mt-4 border sm:w-full border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 sm:flex md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white 
                    sm:space-x-1 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to={"/about"} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 transition-all ease-in duration-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                        </li>
                        <li>
                            <Link to={"/about"} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 transition-all ease-in duration-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white transition-all ease-in duration-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
                        </li>
                        <li>
                            <Link className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white transition-all ease-in duration-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Categories</Link>
                        </li>
                        <li>
                            <Link to={"/contact"} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 transition-all ease-in duration-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >Contact</Link>
                        </li>
                        {/* <li>
                            <Link to={"/fullcart"} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 transition-all ease-in duration-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >Full Cart</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
            {open && <Cart />}
        </nav>


        // <div className="navbar">
        //     <div className="wrapper">
        //         <div className="left">
        //             <div className="item">
        //                 <img src="/img/en.png" alt="" />
        //                 <KeyboardArrowDownIcon />
        //             </div>
        //             <div className="item">
        //                 <span>USD</span>
        //                 <KeyboardArrowDownIcon />
        //             </div>
        //             <div className="item">
        //                 <Link className="link" to="/categories/other">Women</Link>
        //             </div>
        //             <div className="item">
        //                 <Link className="link" to="/categories/2">Men</Link>
        //             </div>
        //             <div className="item">
        //                 <Link className="link" to="/categories/women">Children</Link>
        //             </div>
        //         </div>
        //         <div className="center">
        //             <Link className="link" to="/">LAMASTORE</Link>
        //         </div>
        //         <div className="right">
        //             <div className="item">
        //                 <Link className="link" to="/">Homepage</Link>
        //             </div>
        //             <div className="item">
        //                 <Link className="link" to="/">About</Link>
        //             </div>
        //             <div className="item">
        //                 <Link className="link" to="/">Contact</Link>
        //             </div>
        //             <div className="item">
        //                 <Link className="link" to="/">Stores</Link>
        //             </div>
        //             <div className="icons">
        //                 <i className="fa-solid fa-search"></i>
        //                 <i className="fa-regular fa-user"></i>
        //                 <i className="fa-regular fa-heart"></i>

        //                 <div className="cartIcon" onClick={() => setopen(!open)}>
        //                     <ShoppingCartOutlinedIcon />
        //                     <i className="fa-solid fa-shopping-cart"></i>
        //                     <span>{products.length}</span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>
    )
}

export default Navbar