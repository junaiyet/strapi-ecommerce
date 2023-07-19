import React, { useEffect, useState } from "react";
import "./FeatureProducts.scss";
import Card from "../Card/Card";
import axios from "axios";
// import process from "dotenv/config";
import dotenv from "dotenv";

export default function FeatureProducts({ type }) {
  console.log(import.meta.env.VITE_API_URL);

  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const featchData = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_API_URL + "products?populate=*", {
          headers: {
            Authorization: "junaiyet" + import.meta.env.VITE_API_TOKEN,
          },
        });
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    featchData();
  }, []);
  console.log(data);
  return (
    <div className="featureProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
          // <div item={item}>
          //   <img src={item.img} alt="" />
          // </div>
        ))}
      </div>
    </div>
  );
}
