import React, { useState } from 'react'
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/cartReducer';
import './Product.scss'
import Pincode from 'react-pincode';
import ReactMarkdown from "react-markdown";
import Loading from '../../components/Loading/Loading';
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};



const Product = () => {
  const id = useParams().id;
  const dispatch = useDispatch()
  const [selectedImage, setselectedImage] = useState("img1")
  const [quantity, setquantity] = useState(1)
  const [timed, setTimed] = useState("");
  const [temp, setTemp] = useState(null);
  const [deliverycharge, setDeliverycharge] = useState(0);

  const [pincodeData, setPincodeData] = useState(null);
  const handlePincode = () => {
    if (temp.stateName === "Gujarat") {
      setPincodeData(temp)
      setTimed("1-2 days")
      setDeliverycharge(40)
    }
    else {
      setPincodeData(temp)
      setTimed("3-4 days")
      setDeliverycharge(60)
    }
  }

  if (quantity < 1) {
    setquantity(1)
  }
  const fenilst = {
    width: "60px",
    height: "60px"
  }
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  // data images data from the server
  const images = [
    `http://localhost:1337${data?.attributes?.img1.data?.attributes?.url}`,
    `http://localhost:1337${data?.attributes?.img2.data?.attributes?.url}`,
    `http://localhost:1337${data?.attributes?.img3.data?.attributes?.url}`,
    `http://localhost:1337${data?.attributes?.img4.data?.attributes?.url}`,
  ]
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  const discount = Math.round((data?.attributes?.oldprice - data?.attributes?.price))
  const discountper = Math.round(100 * (data?.attributes?.oldprice - data?.attributes?.price) / data?.attributes?.oldprice)
  if (loading) {
    return <h1><Loading /></h1>
  }
  return (
    <>
      {/* ce */}
      <div className="grid mt-20 sm:mt-10 grid-cols-2 sm:grid-cols-1 h-auto sm:h-auto">
        <div className="col-span-1 overflow-hidden sm:h-[100vw] sm:mt-8  w-[100vw]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              className='w-[600px] h-[600px] sm:w-[100vw] sm:h-[100vw] sm:mx-0 sm:my-0 object-cover mx-36'
              key={page}
              whileTap={{ scale: 0.9 }}
              whileDrag={{ scale: 0.6 }}
              whileHover={{ scale: 1.3, transition: { duration: 0.8 }, style: { cursor: 'pointer' } }}
              src={images[imageIndex]}
              alt="product image"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 60 },
                opacity: { duration: 0.5 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
          </AnimatePresence>
        </div>
        <div className="col-span-1 sm:mt-5">
          {/* code for title */}
          <h3 className='sm:ml-3'>Brand:{data?.attributes?.brand}</h3>
          <h1 className='font-bold font-sans sm:ml-5 w-full capitalize sm:py-3 py-5 text-4xl' style={{ 'whiteSpace': 'pre-wrap', 'overflowWrap': 'break-word' }}>{data?.attributes?.title}</h1>
          {/* code for price */}
          <table className="text-sm sm:ml-5 text-gray-500 dark:text-gray-400">
            <tbody>
              <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-2 pr-6 sm:py-1 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                  M.R.P:
                </th>
                <td className="py-2 pr-6 sm:py-1 line-through">
                  ₹{data?.attributes?.oldprice}
                </td>
              </tr>
              <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-2 text-left pr-6 sm:py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Price:
                </th>
                <td className="py-2 pr-6 sm:py-1 font-bold text-2xl text-gray-900">
                  ₹{data?.attributes?.price}
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="py-2 text-left pr-6 sm:py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Discount:
                </th>
                <td className="py-2 pr-6 sm:py-1 font-bold text-red-800">
                  ₹{discount}({discountper}%)
                </td>
              </tr>
            </tbody>
          </table>
          {/* code for description
          {/* code for setquantity */}

          <div className="quantity my-4 mx-0 sm:ml-2 w-full flex gap-2">
            <button className='btn' onClick={() => setquantity(prev => prev - 1)}>-</button>
            <p className='btn-1 text-center'>{quantity}</p>
            <button className='btn' onClick={() => setquantity(prev => prev + 1)}>+</button>
          </div>
          <div className="flex gap-2 my-4 items-center">
            {/* code for add to cart */}
            <button className="bg-yellow-500/80 hover:bg-yellow-500/50 rounded-md
    text-white font-medium flex h-14 px-10 py-1 tracking-wider transition-all sm:ml-2 sm:w-[80vw] ease-in" onClick={() => dispatch(addToCart({
              id: data.id,
              title: data.attributes.title,
              desc: data.attributes.desc,
              price: data.attributes.price,
              img1: data?.attributes?.img1?.data?.attributes?.url,
              quantity,
            }))}>
              <lord-icon
                src="https://cdn.lordicon.com/slkvcfos.json"
                trigger="hover"
                style={fenilst}>

              </lord-icon>
              <p className='mb-[10px] mt-[15px] text-black'>Add to Cart</p></button>
            {/* code for links */}
            <div className="links sm:w-[20vw] flex gap-2">
              <div className="item">
                <button className='bg-red-500/80 hover:bg-red-500/50 rounded-md
    text-white font-medium flex px-4 py-4 my-2 tracking-wider transition-all ease-in' id='heart-icon'><i className="fa-regular fa-heart"></i></button>
              </div>
            </div>
          </div>
          <div className="features">
            {/* code for features */}
            <h1 className='text-3xl sm:text-2xl sm:py-1 font-semibold py-2'>Features:-</h1>
            <p>
              {/* displ */}
              <ReactMarkdown className='py-4 text-md pl-6'>{data?.attributes?.features}</ReactMarkdown>
            </p>
          </div>
          {/* code for pincode */}
          <h1 className='text-3xl font-semibold sm:text-2xl sm:py-1 sm:mx-0 py-2 '>Delivery Detail:-</h1>
          <div className="pincode sm:mx-2">
            <div className="input-area flex">
              <Pincode
                showArea={false}
                showCity={false}
                pincodeInput={{ padding: "10px 1px", width: "100%", height: "50px", borderRadius: "10px", border: "none" }}
                showDistrict={false}
                showState={false}
                getData={(data) => setTemp(data)}
              />
              <button onClick={handlePincode} className="bg-yellow-500/80 hover:bg-yellow-500/50 rounded-md font-medium items-center flex ml-5 px-10 py-1 tracking-wider text-black transition-all ease-in">Check</button>
            </div>
            <table>
              <tbody>
                <tr>
                  <th scope="row" className="py-2 pr-6 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    Delivery State:
                  </th>
                  <td className="py-2 pr-6 text-sm text-gray-900">
                    {pincodeData?.stateName}
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-2 text-left pr-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Delivery City:
                  </th>
                  <td className="py-2 pr-6 text-sm text-gray-900">
                    {pincodeData?.district}
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-2 text-left pr-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Delivery Time:
                  </th>
                  <td className="py-2 pr-6 text-red-400">
                    {timed}
                  </td>

                </tr>
                <tr>
                  <th scope="row" className="py-2 text-left pr-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Delivery Chareges:
                  </th>
                  <td className="py-2 pr-6 text-red-400">
                    {deliverycharge}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="col-span-1">
          <div className="description ml-10 sm:ml-2 sm:mx-2">
            <h1 className='text-3xl sm:text-2xl sm:py-1 font-semibold py-2'>Desctiption:-</h1>
            <p>
              {/* displ */}
              <ReactMarkdown className='py-4 text-md pl-6'>{data?.attributes?.desc}</ReactMarkdown>
            </p>
          </div>
        </div>
      </div>
      {/* <!-- render a features components -->F */}
      {/* <div className="product">
        <div className="left">
          <div className="images">
            <img src={"http://localhost:1337" + data?.attributes?.img1?.data?.attributes?.url} alt="" onClick={e => setselectedImage("img1")} className="w-1/2" />
            <img src={"http://localhost:1337" + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e => setselectedImage("img2")} />
          </div>
          <div className="mainImg">
            <img src={"http://localhost:1337" + data?.attributes?.[selectedImage]?.data?.attributes?.url} alt="" />
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
          <button className="add" onClick={() => dispatch(addToCart({
            id: data.id,
            title: data.attributes.title,
            desc: data.attributes.desc,
            price: data.attributes.price,
            img1: data?.attributes?.img2?.data?.attributes?.url,
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
      </div> */}
    </>
  )
}

export default Product