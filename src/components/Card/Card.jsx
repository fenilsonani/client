import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
// import "./Card.scss"
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/cartReducer';
import Staremp from './Staremp';


const Card = ({ item }) => {
    // alert(item?.attributes?.title);
    const discount = Math.round(100 * (item?.attributes?.oldprice - item?.attributes?.price) / item?.attributes?.oldprice)
    const id = useParams().id;
    const dispatch = useDispatch()
    const quantity = 1
    const fenilst = {
        width: "60px",
        height: "60px"
    }

    return (
        <>
            {/* <div className='card'>
                <div className="image">
                    {item?.attributes?.isNew && <span className="new">New</span>}
                    <img src={"http://localhost:1337"+item?.attributes?.img1.data.attributes?.url} className="mainImg" alt="" />
                    <img src={"http://localhost:1337"+item?.attributes?.img2.data.attributes?.url} className="secondImg" alt="" />
                    <h2>{item?.attributes?.title}</h2>
                </div>
                <div className="prices">
                    <h3>${item?.attributes?.oldprice}</h3>
                    <h3>{}</h3>
                    <h3>${item?.attributes?.price}</h3>
                </div>
                
            </div> */}

            <div className="min-h-[10rem] w-72 rounded-2xl overflow-hidden bg-white text-gray-700 shadow-2xl" id="fenil-sonani">
                <Link className='link' to={`/product/${item.id}`}>
                    <img src={"http://localhost:1337" + item?.attributes?.img1.data?.attributes?.url} className="object-cover w-72 p-2 hover:scale-90 rounded-2xl transition-all ease-in  pb-15 h-[360px]" alt="anyimage" />
                </Link>
                <div className="flex flex-col  gap-3 p-5 mt-[350px]">
                    <div className="flex items-center gap-2">
                        {/* if the attributes are empty do not render this */}

                        {item?.attributes?.isNew && <span className="text-xs text-white bg-green-500 px-2 py-1 rounded-md">New</span>}
                        {item?.attributes?.isSale && <span className="text-xs text-white bg-red-500 px-2 py-1 rounded-md">Sale</span>}
                        {item?.attributes?.isTop && <span className="text-xs text-white bg-blue-500 px-2 py-1 rounded-md">Top</span>}
                    </div>
                    <div className="flex items-center gap-2">
                        {item?.attributes?.tag1 && <span className="text-xs; rounded-full bg-gray-100 px-3 py-1">{item?.attributes?.tag1}</span>}
                        {item?.attributes?.tag2 && <span className="text-xs; rounded-full bg-gray-100 px-3 py-1">{item?.attributes?.tag2}</span>}

                    </div>
                    <h2 className="overflow-hidden capitalize  overflow-ellipsis whitespace-nowrap text-2xl font-semibold" title="Best Headphone Ever">{item?.attributes?.title}</h2>
                    <div>
                        <span className="text-xl font-extrabold"> ₹{item?.attributes?.price} </span>
                    </div>
                    <div className="mt-1 flex items-baseline gap-2">
                        <span className="line-through text-md opacity-50"> ₹{item?.attributes?.oldprice} </span>
                        <span className="rounded-md bg-green-400 px-1.5 py-0.5 text-md text-white">{discount}%</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="mt-1 flex items-center">
                            <Staremp rating={item?.attributes?.rating} />
                        </span>
                        <span className="ml-2  text-xs text-gray-900 "><p className='text-lg'>{item?.attributes?.rating}</p></span>
                    </div>
                    <div className="mt-5 flex gap-2">
                        <button className="bg-yellow-500/80 hover:bg-yellow-500/50 rounded-md
    text-white font-medium flex px-10 py-1 tracking-wider transition-all ease-in w-full" onClick={() => dispatch(addToCart({
                            id: item.id,
                            title: item.attributes.title,
                            desc: item.attributes.desc,
                            price: item.attributes.price,
                            img1: item?.attributes?.img1?.data?.attributes?.url,
                            quantity,
                        }))}>
                            <lord-icon
                                src="https://cdn.lordicon.com/slkvcfos.json"
                                trigger="hover"
                                style={fenilst}>

                            </lord-icon>
                            <p className='mb-[10px] mt-[15px] text-black'>Add to Cart</p></button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Card