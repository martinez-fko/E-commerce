import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { searchProductThunk } from "../store/slices/products.slice";

const FormSearch = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch(searchProductThunk(search));
  };

  return (
    <form onSubmit={submit} className="form-search">
      <input
        className="form-search__input"
        type="text"
        placeholder="What are you looking for?"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="form-search__btn">
        <i className="bx bx-search-alt-2"></i>
      </button>
    </form>
  );
};

export default FormSearch;
