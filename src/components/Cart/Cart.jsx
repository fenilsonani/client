import React from 'react'
import './Cart.scss'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';



const Cart = () => {
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
        <div className="cart">
            <h1>Produts In Your Cart</h1>
            {products.map((item) => (
                <div className="item" key={item.id}>
                    <img src={"http://localhost:1337" + item.img1} alt="" />
                    <div className="itemDetail">
                        <h1>{item.title}</h1>
                        <h1>{item.desc?.substring(0, 100)}</h1>
                        <div className="price">
                            {item.quantity}x ${item.price}
                        </div>
                    </div>
                    <i className="fa-solid fa-trash" onClick={() => dispatch(removeItem(item.id))}></i>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>{totalPrice()}</span>
            </div>
            <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
            <span className="reset" onClick={() => dispatch(resetCart())}> Reset Cart</span>
        </div>
    )
}

export default Cart