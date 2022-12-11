import React from 'react'
import Card from '../Card/Card'
// import './FeaturedProducts.scss'
// import axios from 'axios'
import useFetch from '../../hooks/useFetch'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
// import useFetch from "../hooks/useFetch";



const FeaturedProducts = ({ type }) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}&pagination[limit]=4`
    );

    return (
        <div className='mx-16 sm:mx-2 my-20'>
            <div className="flex justify-between">
                <h1 className='text-4xl font-semibold capitalize'>{type} Product</h1>
                <p className='text-right text-xl'>New Lanched Product Recently</p>
            </div>
            <div className="bottom sm:w-full my-10 grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                {error
                    ? <Error />
                    : loading
                        ? <Loading />
                        : data?.map((item) => <Card item={item} key={item.id} />)}
            </div>

        </div>
    )
}

export default FeaturedProducts