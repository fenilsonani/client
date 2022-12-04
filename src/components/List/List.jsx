import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";

const List = ({ subCats, maxPrice, sort, catId }) => {
    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(item => `&[filters][sub_categories][id]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    );



    return (
        <div className="list">
            {error ?
                "error" :
                loading
                    ? <Loading/>
                    : data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
    );
};

export default List;
