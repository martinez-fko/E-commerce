import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setIsLoading } from "../store/slices/isLoading.slice";
import {useDispatch} from 'react-redux';

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setIsLoading(false));
  }, []);

  const submit = (data) => {
    axios
      .post(
        "https://ecommerce-api-react.herokuapp.com/api/v1/users/login",
        data
      )
      .then((res) => {
        navigate("/");
        console.log(res);
        localStorage.setItem("token", res.data.data.token);
      });
  };

  return (
    <div className="container-login">
      <h2>Welcome! Enter your email and password to continue</h2>

      <div className="test">
        <h2>Test data</h2>
        <p>jose@gmail.com</p>
        <p>jose12345</p>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email")} />
        </div>
        <div className="form-input">
          <label htmlFor="pass">Password</label>
          <input type="password" {...register("password")} />
        </div>
        <button className="btn_login">Login</button>
      </form>
    </div>
  );
};

export default Login;
