import React from "react";

const FormSearch = () => {
  return (
    <form className="form-search">
      <input
        className="form-search__input"
        type="text"
        placeholder="What are you looking for?"
      />
      <button className="form-search__btn">
        <i className="bx bx-search-alt-2"></i>
      </button>
    </form>
  );
};

export default FormSearch;
