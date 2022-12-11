import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';
// import './Full_Cart.scss'


const Full_Cart = () => {

    const products = useSelector(state => state.cart.products)
    
    const totalProduct = () => {
        let qty = 0
        products.forEach(item =>
            qty += item.quantity)
        return qty
    }

    const dispatch = useDispatch()

    const totalPrice = () => {
        let total = 0
        products.forEach(item =>
            total += item.quantity * item.price)
        return total.toFixed(2);
    }

    const stripePromise = loadStripe("pk_test_51MBENsSImbwDuIFfg5SwW0I6Q3Vyz6bl2eHMlJVN8ex4wUKdajy6yQUAGP0LCFSBlJ0NGhQqMbHEVs75dmDfQPPq00g1kkwJtV");
    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post("/orders", {
                products,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="mb-[100vh]">
            <h1 className='text-5xl font-bold mb-32'>Your Cart</h1>
            {products.map((item) => (
                // <div className="item" key={item.id}>
                //     <img src={"http://localhost:1337" + item.img1} alt="" />
                //     <div className="itemDetail">
                //         <h1>{item.title}</h1>
                //         <h1>{item.desc?.substring(0, 100)}</h1>
                //         <div className="price">
                //             {item.quantity}x ${item.price}
                //         </div>
                //     </div>
                //     <i className="fa-solid fa-trash" onClick={() => dispatch(removeItem(item.id))}></i>
                // </div>
                // generate code for display product in cart
                <div className="grid grid-cols-2">
                    <div className="col-span-1">
                        <div className="grid grid-col-2">
                            <div className="col-span-1">
                                {/* this code for the right side bar of cart product detial */}
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1">
                                        <img src={"http://localhost:1337" + item.img1} className="w-52" alt="" />
                                    </div>
                                    <div className="col-span-1">
                                        <div className="itemDetail">
                                            <h1>{item.title}</h1>
                                            <h1>{item.desc?.substring(0, 100)}</h1>
                                            <div className="price">
                                                <div className="quantity my-4 mx-0 sm:ml-2 w-full flex gap-2">
                                                    <button className='btn-1'>{item.quantity}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1">

                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                        </div>
                    </div>
                </div>
            ))}
            <div className="total mt-60">
                <span>SUBTOTAL</span>
                <span>{totalPrice()}</span>
            </div>
            <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
            <span className="reset" onClick={() => dispatch(resetCart())}> Reset Cart</span>
        </div>
    )
}

export default Full_Cart