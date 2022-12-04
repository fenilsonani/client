import React, { useState } from 'react'
import "./Product.scss"
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
  const id = useParams().id;
  const dispatch = useDispatch()
  const [selectedImage, setselectedImage] = useState("img1")
  const [quantity, setquantity] = useState(1)


  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  return (
        <>
          <div className="product">
            <div className="left">
              <div className="images">
                <img src={"http://localhost:1337"+ data?.attributes?.img1?.data?.attributes?.url} alt="" onClick={e => setselectedImage("img1")} />
                <img src={"http://localhost:1337"+data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e => setselectedImage("img2")} />
              </div>
              <div className="mainImg">
                <img src={"http://localhost:1337"+data?.attributes?.[selectedImage]?.data?.attributes?.url} alt="" />
              </div>
            </div>
            <div className="right">
              <h1>{data?.attributes?.title}</h1>
              <span>${data?.attributes?.price}</span>
              <p>
              {data?.attributes?.desc}
              </p>
              <div className="quantity">
                <button onClick={() => setquantity(prev => prev - 1)}>-</button>
                {quantity}
                <button onClick={() => setquantity(prev => prev + 1)}>+</button>
              </div>
              <button className="add" onClick={()=>dispatch(addToCart({
                id: data.id,
                title: data.attributes.title,
                desc: data.attributes.desc,
                price: data.attributes.price,
                img1:data?.attributes?.img2?.data?.attributes?.url,
                quantity,
              }))}>
                <i className="fa-solid fa-cart-shopping"></i>Add to cart
              </button>
              <div className="links">
                <div className="item">
                  <i className="fa-regular fa-heart"></i>Add to Wishlist
                </div>
                <div className="item">
                  <i className="fa-solid fa-scale-balanced"></i>Compare With Other
                </div>
              </div>
              <div className="info">
                <span>Vender:1</span>
                <span>Product Type:T Shirt</span>
                <span>Tag:tshirt,pent,artlaza</span>
              </div>
              <div className="info">
                <span>Description</span>
                <hr />
                <span>Additional Infomation</span>
                <hr />
                <span>Faq</span>
                <hr />
              </div>
            </div>
          </div>
        </>
  )
}

export default Product