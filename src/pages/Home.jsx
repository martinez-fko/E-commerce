import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AsideFilter from "../components/asideFilter";
import CardProduct from "../components/CardProduct";
import FormSearch from "../components/FormSearch";
import { getCartThunk } from "../store/slices/cart.slice";
import { getProductsThunk } from "../store/slices/products.slice";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products)
  

  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(getCartThunk())
  }, []);

  const openFilter = () => {
    const asideFilter = document.querySelector(".aside-filter");
    asideFilter.classList.toggle("active");
  };


  return (
    <main className="container">
      <AsideFilter openFilter={openFilter}/>

      <section className="container-products">

        <FormSearch/>
        <button onClick={openFilter} className="btn-filter">
          <i className="bx bx-filter-alt"></i> Filters
        </button>
        <section className="container-card">
        { products.map(product => ( 
          <CardProduct key={product.id} product={product} />
        ))}
        </section>
      </section>
    </main>
  );
};

export default Home;
