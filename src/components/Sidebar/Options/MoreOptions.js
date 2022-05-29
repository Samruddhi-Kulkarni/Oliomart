import React from "react";
import { Link } from "react-router-dom";

const MoreOptions = () => {
  return (
    <>
      <nav className="flex   flex-col text-left text-base text-primary">
       <button>
       <Link to="/cart" className=" hover:text-trade categoriesType">
          Cart <i class="fas fa-shopping-cart text-trade"></i>
        </Link>
       </button>

        <button>
        <Link to="/wishlist" className=" hover:text-trade categoriesType">
          Wishlist <i class="fas fa-bookmark text-trade"></i>
        </Link>
        </button>

       
      </nav>
    </>
  );
};

export default MoreOptions;
