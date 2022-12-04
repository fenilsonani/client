import React, { useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const [open, setopen] = useState(false)
    const products = useSelector(state => state.cart.products)
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="/img/en.png" alt="" />
                        {/* <KeyboardArrowDownIcon /> */}
                    </div>
                    <div className="item">
                        <span>USD</span>
                        {/* <KeyboardArrowDownIcon /> */}
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/1">Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/3">Children</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to="/">LAMASTORE</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <i className="fa-solid fa-search"></i>
                        <i className="fa-regular fa-user"></i>
                        <i className="fa-regular fa-heart"></i>

                        <div className="cartIcon" onClick={() => setopen(!open)}>
                            {/* <ShoppingCartOutlinedIcon /> */}
                            <i className="fa-solid fa-shopping-cart"></i>
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    )
}

export default Navbar