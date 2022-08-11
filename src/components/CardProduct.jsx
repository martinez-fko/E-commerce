import React from 'react';
import { useDispatch } from "react-redux";
import { addProductThunk } from '../store/slices/cart.slice';
import { useNavigate } from "react-router-dom";


const CardProduct = ({product}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addProduct = id => {
    const data = { id : id , quantity : 1 }
    dispatch(addProductThunk(data))
  }

  const detailProduct = () => {
    navigate(`/product/${product.id}`)
  }

    return (
        <div className="card">
        <div className="card__bxImg" onClick={detailProduct}>
          <img src={product.productImgs[0]} alt="prduct" />
        </div>
        <div className="card__info">
          <h2>{product.title}</h2>
          <p>Price</p>
          <p>$ {product.price}</p>
        </div>
        <button onClick={() => addProduct(product.id)} className="card__btn">
          <i className="bx bx-cart"></i>
        </button>
      </div>
    );
};

export default CardProduct;