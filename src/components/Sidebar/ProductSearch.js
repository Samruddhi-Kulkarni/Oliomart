import React from "react";

const ProductSearch = () => {
  return (
    <>
      <div className="search_field">
        <input
          type="text "
          placeholder="Search"
          className="searchProduct bg-transparent text-primary"
        />
        <button><i class="fas fa-search text-trade text-2xl searchIcon"></i></button>
      </div>
    </>
  );
};

export default ProductSearch;
