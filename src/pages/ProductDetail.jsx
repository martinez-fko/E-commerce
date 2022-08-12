import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductThunk } from "../store/slices/cart.slice";

const ProductDetail = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [counter, setCounter] = useState(1);
  const token = localStorage.getItem("token");


  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const addProduct = (id) => {
    if(token){
        const data = { id: id, quantity: counter };
        dispatch(addProductThunk(data));
    }else{
        navigate("/login")
    }
  };

  return (
    <div className="detailProduct">
      <div className="bxImg">
        <img src={product.productImgs[0]} alt={product?.title} />
      </div>
      <h2>{product?.title}</h2>
      <div className="price_quantity">
        <div className="price">
          <p>Price</p>
          <p>$ {product.price}</p>
        </div>
        <div className="quantity">
          <p>Quantity</p>
          <div className="select-quantity">
            <button
              onClick={() => setCounter(counter - 1)}
              disabled={counter === 1}
              className="btn-circle"
            >
              -
            </button>
            <input type="text" disabled value={counter} />
            <button
              onClick={() => setCounter(counter + 1)}
              className="btn-circle"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => addProduct(product.id)} className="addCart">
        Add to cart{" "}
      </button>
      <p className="description">{product.description}</p>
    </div>
  );
};

export default ProductDetail;
