import React from "react";
import Profile from "../Images/TestAccount.png"

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a className="mr-5 hover:text-trade menu_links text-primary">First Link</a>
            <a className="mr-5 hover:text-trade menu_links text-primary">Second Link</a>
            <a className="mr-5 hover:text-trade  menu_links text-primary">Third Link</a>
            <a className="hover:text-trade  menu_links text-primary">Fourth Link</a>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-primary lg:items-center lg:justify-center mb-4 md:mb-0">
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button className="mr-3 bg-trade inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-secondary mt-4 md:mt-0">Sell On Olio</button>
            <img src={Profile} className="profileDemo"/>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
