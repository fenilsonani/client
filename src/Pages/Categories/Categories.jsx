import React from 'react'
import './Catf.scss'
import useFetch from '../../hooks/useFetch'

const Categories = () => {

  const { data, loading, error } = useFetch(
    `/categories?populate=*`
  );

  return (
    <>
      <div className="container overflow-hidden m-auto mt-10 sm:mx-10 h-auto">
        <div className="row grid sm:grid-cols-1 gap-20 grid-cols-5 ">
          {error
            ? "<Error />"
            : loading
              ? "<Loading />"
              : data?.map((item) =>
                <div className="column overflow-hidden sm:mt-20 col-span-1">
                  <div className="card">
                    <div className="content">
                      <div className="front">
                        <img className="profile" width="100%" src={"http://localhost:1337" + item?.attributes?.img.data?.attributes?.url} alt={"http://localhost:1337" + item?.attributes?.img.data?.attributes?.name} />
                        <h6 className='des text-4xl'>{item.attributes.title}</h6>
                      </div>
                      <div className="back from-left">
                        <h2>{item.attributes.title}</h2>
                        <p className="des mt-10 text-2xl">
                          {item.attributes.desc}
                        </p>
                        <ul className="social-icon mt-20 gap-10">
                          <li><i className="fab fa-facebook-f bg-gray-800 p-3 mx-2 rounded-full text-white" /></li>
                          <li><i className="fab fa-instagram bg-gray-800 p-3 mx-2 rounded-full text-white" /></li>
                          <li><i className="fab fa-twitter bg-gray-800 p-3 mx-2 rounded-full text-white" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
        </div>
      </div>
    </>
  )
}

export default Categories