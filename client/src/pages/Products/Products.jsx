import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router";
import useFetch from "../../components/hooks/useFetch.jsx";
export default function Products() {
  const catId = useParams().id;
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);

  const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);
  console.log(data);

  let handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCategory(isChecked ? [...selectedSubCategory, value] : selectedSubCategory.filter((item) => item !== value));
  };

  console.log(selectedSubCategory);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data.map((item) => (
            <div className="inptItem" key={item.id}>
              {/* <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} /> */}
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        {/* <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inptItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div> */}
        {/* <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inptItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={(e) => setSort("asc")} />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inptItem">
            <input type="radio" id="desc" value="desc" name="price" onChange={(e) => setSort("desc")} />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div> */}
      </div>
      <div className="right">
        <img className="catImg" src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCategory={selectedSubCategory} />
      </div>
    </div>
  );
}
