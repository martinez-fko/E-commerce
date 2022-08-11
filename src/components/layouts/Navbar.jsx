import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate()

  const token = localStorage.getItem("token");

  const open = () => {
    if(token){
      setIsCartOpen(!isCartOpen);
    }else{
      navigate("/login")
    }
  };

  return (
    <>
      <nav className="nav-principal">
        <span className="title" onClick={() => navigate("/")} >Ecommerce</span>
        <Link to={"/login"} className="btn_icon">
          <i className="bx bx-user"></i>
        </Link>
        <Link to={"/purchases"} className="btn_icon">
          <i className="bx bxs-shopping-bags"></i>
        </Link>
        <button onClick={open} className="btn_icon">
          <i className="bx bx-cart"></i>
        </button>
      </nav>
      <Cart isCartOpen={isCartOpen}/>
    </>
  );
};

export default Navbar;
