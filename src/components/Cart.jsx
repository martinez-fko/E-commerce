import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCart, removeProductThunk } from "../store/slices/cart.slice";

const Cart = ({ isCartOpen }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const deleteProduct = (id) => {
    dispatch(removeProductThunk(id));
  };

  const total = () => {
    let check = 0;
    cart.products.map( item => {
        check += item.productsInCart.quantity * item.price
    })
    return check
  }
  
 console.log(cart);

  return (
    <aside className={`aside-cart ${isCartOpen ? "active" : ""}`}>
      <h2>Cart</h2>
      <div className="container-aside-cart">
        {cart.products?.map((item) => (
          <article key={item.id} className="cart-item">
            <div className="cart-head">
              <p>{item.brand}</p>
              <button onClick={() => deleteProduct(item.id)}>
                <i className="bx bxs-trash"></i>
              </button>
            </div>
            <div className="cart-body">
              <p>{item.title}</p>
              <input type="text" defaultValue={item.productsInCart.quantity} disabled />
            </div>
            <div className="cart-footer">
              <p>
                Total <span> $ {item.productsInCart.quantity * item.price}</span>
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="aside-cart-footer">
        <div className="cart-total">
          <p>Total</p>
          <p>$ {total()}</p>
        </div>
        <button onClick={() => dispatch(buyCart())}>Checkout</button>
      </div>
    </aside>
  );
};

export default Cart;
