import React from "react";
import "./FeatureProducts.scss";
import Card from "../Card/Card";
import useFetch from "../hooks/useFetch";

export default function FeatureProducts({ type }) {
  // console.log(import.meta.env.VITE_API_URL);
  // import.meta.env.VITE_API_URL + `products?populate=*&[filters][type][$eq]=${type}`

  const { data, loading, error } = useFetch(`products?populate=*&[filters][type][$eq]=${type}`);

  return (
    <div className="featureProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
      </div>
      <div className="bottom">{error ? "Something went wrong" : loading ? "loading" : data.map((item) => <Card item={item} key={item.id} />)}</div>
    </div>
  );
}
