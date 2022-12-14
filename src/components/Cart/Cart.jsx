import React from 'react'
import './Cart.scss'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';



const Cart = () => {


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

    return (
        // <div className="cart">
        //     <h1>Produts In Your Cart</h1>
        //     {products.map((item) => (
        //         <div className="item" key={item.id}>
        //             <img src={"http://localhost:1337" + item.img1} alt="" />
        //             <div className="itemDetail">
        //                 <h1>{item.title}</h1>
        //                 <h1>{item.desc?.substring(0, 100)}</h1>
        //                 <div className="price">
        //                     {item.quantity}x ${item.price}
        //                 </div>
        //             </div>
        //             <i className="fa-solid fa-trash" onClick={() => dispatch(removeItem(item.id))}></i>
        //         </div>
        //     ))}
        //     <div className="total">
        //         <span>SUBTOTAL</span>
        //         <span>{totalPrice()}</span>
        //     </div>
        //     <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        //     <span className="reset" onClick={() => dispatch(resetCart())}> Reset Cart</span>
        // </div>
        <div className="ab absolute w-[40vw] sm:w-full bg-gray-100 z-50 h-auto right-0 rounded-2xl top-14">
            <div className="inner-width flex justify-between">
                <h1 className='px-5 py-3 text-2xl font-semibold'>Products In Cart</h1>
                {/* <button><i class="fa-solid fa-xmark mx-4 px-2 rounded-lg text-2xl bg-gray-100"></i></button> */}
            </div>
            <hr class="my-2 h-px bg-gray-400 border-0 dark:bg-gray-700" />
            <div className="content-fe w-full">
                <div className="container-f overflow-hidden  ">
                    <table className='table'>
                        {products.map((item) => (
                            <tr className='h-40' >
                                <td className="w-[25%] flex">
                                    <img src={"http://localhost:1337" + item.img1} alt="" className='w-[25%] overflow-scroll p-2 rounded-3xl' />
                                </td>
                                <td className="w-[65%] flex-none">
                                    <h1 className='text-lg font-semibold'>{item.title}</h1>
                                    <div className="price flex items-center">
                                        <p className='text-2xl'>{item.quantity}x</p><p className='text-2xl font-bold'>₹{item.price}</p><p>={(item.quantity) * (item.price)}</p>
                                    </div>
                                </td>
                                <td className="w-[10%]">
                                    <i className="fa-solid fa-trash bg-red-300 p-2 hover:bg-red-400 transition-all ease-in duration-300 rounded-lg" onClick={() => dispatch(removeItem(item.id))}></i>
                                </td>
                            </tr>
                        ))}
                    </table>
                    <hr />
                </div>
                <div className="total-amount">
                    <div className="total flex justify-between">
                        <span className='text-2xl p-10 font-semibold'>SUBTOTAL</span>
                        <span className='text-2xl p-10 font-bold'>₹{totalPrice()}</span>
                    </div>
                </div>
                <div className="proceed flex justify-center">
                    <button className='bg-black text-white my-10 p-3 rounded-lg w-[80%] hover:bg-gray-900 transition-all ease-in duration-300' onClick={handlePayment}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="another-item flex justify-center">
                    <button className='border-2 border-red-300 mb-10 p-3 rounded-lg w-[80%] hover:bg-red-400 hover:text-white transition-all ease-in duration-300'>
                        Reset Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart