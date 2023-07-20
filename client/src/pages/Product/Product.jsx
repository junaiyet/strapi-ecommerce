import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../components/hooks/useFetch";
import { useParams } from "react-router";

export default function Product() {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/product/${id}?populate=*`);

  return (
    <div className="product">
      {loading ? (
        "loading.."
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img src={data?.attributes?.img?.data?.attributes?.url} onClick={(e) => setSelectedImg("img")} alt="" />
              <img src={data?.attributes?.img2?.data?.attributes?.url} onClick={(e) => setSelectedImg("img2")} alt="" />
            </div>
            <div className="mainImg">
              <img src={import.meta.env.VITE_API_UPLOAD_URL + data.attributes[selectedImg].data.attributes.url} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>Title</h1>
            <span className="price">$199</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse perspiciatis, earum reiciendis sed, accusantium quis modi eaque ducimus laboriosam dolorum assumenda mllam enim soluta sint eaque velit dicta dolor corporis deleniti quia!</p>
            <div className="quantity">
              <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="add">
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
