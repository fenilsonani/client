import React from 'react'
import { Link } from "react-router-dom"
import "./Card.scss"


const Card = ({ item }) => {
    // alert(item?.attributes?.title);
    return (
        <Link className='link' to={`/product/${item.id}`}>
            <div className='card'>
                <div className="image">
                    {item?.attributes?.isNew && <span className="new">New</span>}
                    {/* <img src={item?.attributes?.img1.data.id} alt="" /> */}
                    <img src={"http://localhost:1337"+item?.attributes?.img1.data.attributes?.url} className="mainImg" alt="" />
                    <img src={"http://localhost:1337"+item?.attributes?.img2.data.attributes?.url} className="secondImg" alt="" />
                    <h2>{item?.attributes?.title}</h2>

                    {/* <h2>fenil</h2> */}
                </div>
                <div className="prices">
                    <h3>${item?.attributes?.oldprice}</h3>
                    <h3>{}</h3>
                    <h3>${item?.attributes?.price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card