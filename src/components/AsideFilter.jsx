import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductByCategory } from "../store/slices/products.slice";

const AsideFilter = ({ openFilter }) => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
      )
      .then((res) => setCategories(res.data.data.categories));
  }, []);

  return (
    <aside className="aside-filter">
      <button onClick={openFilter} className="aside-filter_close">
        <i className="bx bx-x"></i>
      </button>
      <h2 className="aside-filter__title">Filters</h2>
      <div className="aside-filter__price">
        <h2 className="aside-filter__subtitle">Price</h2>
        <form>
          <div className="form-input">
            <label htmlFor="from">From</label>
            <input type="number" id="to" />
          </div>
          <div className="form-input">
            <label htmlFor="to">To</label>
            <input type="number" id="to" />
          </div>
          <button className="aside-filter__btn-filter">Filter Price</button>
        </form>
      </div>
      <div className="aside-filter__category">
        <h2 className="aside-filter__subtitle">Category</h2>
        <ul>
          <li onClick={() => dispatch(getProductByCategory(""))}>
            ALL
          </li>
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => dispatch(getProductByCategory(category.id))}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default AsideFilter;
