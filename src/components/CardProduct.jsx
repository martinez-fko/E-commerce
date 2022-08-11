import React from 'react';
import { useDispatch } from "react-redux";
import { addProductThunk } from '../store/slices/cart.slice';

const CardProduct = ({product}) => {
  const dispatch = useDispatch();

  const addProduct = id => {
    const data = { id : id , quantity : 1 }
    dispatch(addProductThunk(data))
  }

    return (
        <div className="card">
        <div className="card__bxImg">
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