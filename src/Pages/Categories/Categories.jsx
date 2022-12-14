import React from 'react'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading/Loading'
import CatCard from './CatCard';
import Error from '../../components/Error/Error';

const Categories = () => {

  const { data, loading, error } = useFetch(
    `/categories?populate=* `
  );

  return (
    <>
      {error
        ? <Error />
        : loading
          ? <Loading />
          : data?.map((item) => <CatCard item={item} key={item.id} />)}

    </>
  )
}

export default Categories