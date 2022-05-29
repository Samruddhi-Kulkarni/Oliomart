import React from "react";
import "./styles/style.css";
import Navbar from "./components/Navbar";


// import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer";
import Modal from "./components/modals/Modal";





const App = () => {
  
 
  return (
    <>
      
      { <Navbar /> }
      {<Modal/> }
     { <Footer/> }
      {/* <Sidebar/> */}
     
    </>

    // <div className='main_frame'>
    //   <Main/>
    // </div>
  );
};

export default App;
