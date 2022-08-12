import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPurchasesThunk } from "../store/slices/purchases.slice";

const Purchases = () => {
  const dispatch = useDispatch();
  const purchases = useSelector((state) => state.purchases);

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);

  const formated = date => {
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'};
    return new Date(date).toLocaleDateString('en-us', options);
  };


  return (
    <div className="container-purchase">
      <h1>My purchases</h1>
      {purchases.map((item) => (
        <div key={item.id} className="card-purchase">
          <div className="date-purchase">
            <h2>{ formated(item.createdAt) }</h2>
          </div>
          {item.cart.products.map((cart) => (
            <div key={cart.id} className="detail-product-purchase">
              <h3>{cart.title}</h3>
              <input
                type="text"
                defaultValue={cart.productsInCart.quantity}
                disabled
              />
              <p>Total: $ {cart.price}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Purchases;
