import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'
// import axios from 'axios'
import useFetch from '../../hooks/useFetch'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
// import useFetch from "../hooks/useFetch";



const FeaturedProducts = ({ type }) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );
    return (
        <div className='featuredProduct'>
            <div className="top">
                <h1>{type} Product</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, consequuntur veritatis. Pariatur!</p>
            </div>
            <div className="bottom">
                {error
                    ?<Error/>
                    : loading
                        ?<Loading/>
                        : data?.map((item) => <Card item={item} key={item.id} />)}
            </div>
        </div>
    )
}

export default FeaturedProducts