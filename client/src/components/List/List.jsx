import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../components/hooks/useFetch.jsx";

export default function List({ catId, maxPrice, sort, subCategory }) {
  const { data, loading, error } = useFetch(`products?populate=*&[filters][categories][id]=${catId}${subCategory.map((item) => `&[filters][sub_categories][id][$eq]=${item}`)}`);
  return <div className="list">{loading ? "Loading...." : data?.map((item) => <Card item={item} key={item.id} />)}</div>;
}
