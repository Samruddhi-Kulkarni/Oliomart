import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import {Link,Routes,Route} from 'react-router-dom'

const Modal = ({setshowModal,showModal}) => {
const hideModal=()=>{
  setshowModal(prev => !prev)
}
  
 return (
    <>
      {showModal ?
<div className="fixed z-10 inset-0 overflow-y-auto " aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" aria-hidden="true"></div>

   {/* This element is to trick the browser into centering the modal contents. */}
    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
  
    <div className="inline-block align-bottom border_trade bg-black border-rad-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg p-5">
      <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className=" sm:items-start">
         {/* sm:flex */}
      <div className="closeModal text-trade text-right"><i className="fas fa-times cursor-pointer" onClick={hideModal}></i></div>
     <Login/>


        { /*<Link to="#signup" className="text-trade " >Signup</Link>*/
}
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>  
         
        
        </div>
      </div>
      
    </div>
  </div>
</div>
:null}

    </>
  );
};





 
  



export default Modal;
