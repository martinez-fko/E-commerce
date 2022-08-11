import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCartThunk } from "../../store/slices/cart.slice";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const open = () => {
    if (token) {
      setIsCartOpen(!isCartOpen);
      dispatch(getCartThunk());
    } else {
      navigate("/login");
    }
  };

  const logOut = () => {
    localStorage.setItem("token", "");
    setIsCartOpen(false);
    navigate("/login");
  };

  return (
    <>
      <nav className="nav-principal">
        <span className="title" onClick={() => navigate("/")}>
          Ecommerce
        </span>
        {token ? (
          <button onClick={logOut} className="btn_icon">
            <i className="bx bx-exit"></i>
          </button>
        ) : (
          <Link to={"/login"} className="btn_icon">
            <i className="bx bx-user"></i>
          </Link>
        )}

        <Link to={"/purchases"} className="btn_icon">
          <i className="bx bxs-shopping-bags"></i>
        </Link>
        <button onClick={open} className="btn_icon">
          <i className="bx bx-cart"></i>
        </button>
      </nav>
      <Cart isCartOpen={isCartOpen} />
    </>
  );
};

export default Navbar;
