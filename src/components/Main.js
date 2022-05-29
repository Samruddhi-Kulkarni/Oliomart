import React, { useState } from "react";
import "../styles/style.css";
import Logo from "../Images/oliomart.png";
import Modal from "./modals/Modal";

const Main = () => {
  const [showModal,setshowModal]=useState(false);

  const openModal=()=>{
    setshowModal(prev=>!prev);
  }
  return (
    <>
      <div className="text-primary m-20">
        <img src={Logo} className="logo"  />
        {/* <span>adshsadb</span> */}
        <p className="mt-10 text-center lg:text-5xl md:text-3xl font-light">
          <span className="line2-1">MAXIMUM REACH FOR</span>
          <span className="line2-2"> HOMEMADE PRODUCTS</span>
        </p>
        <p className="disc mt-10 text-center lg:text-base md:text-xl font-normal">
          Consectetur tempor consequat elit ea id adipisicing aute excepteur
          reprehenderit est dolore nulla. Cillum proident cupidatat in velit
          nisi et commodo amet aliqua velit. Sunt et sint commodo eiusmod quis
          laborum. Consectetur tempor consequat elit ea id adipisicing aute
          excepteur reprehenderit est dolore nulla. Cillum proident cupidatat in
          velit nisi et commodo amet aliqua velit. Sunt et sint commodo eiusmod
          quis laborum.
        </p>
        <div className="buttons">
          <div className="flex justify-center mt-10">
            <nav></nav>
            {/* <button className="inline-flex text-white bd-transparent border-2 border-trade py-2 px-6 focus:outline-none hover:bg-trade hover:text-black  text-md">
              Skip
            </button> */}
         
            <button href="/login"
              
              className=" inline-flex text-gray-700 bg-trade border-0 py-2 px-6 focus:outline-none hover:bg-white  text-md"
            onClick={openModal}>
              Login
            </button>
            <Modal showModal={showModal} setshowModal={setshowModal}/>
          </div>
        </div>
      </div>


    </>
  );
};

export default Main;
