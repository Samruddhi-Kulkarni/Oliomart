// import React from "react";

// const SignUp = () => {
//   return (
//     <>
//       <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" id="signup">
//         <h3
//           className="text-lg leading-6 font-medium text-trade"
//           id="modal-title"
//         >
//           SignUp
//         </h3>
//         <small className="text-primary">Enter your credentials to Login</small>
//         <div className="mt-2">
//           <p className="text-sm text-gray-500">
//             Are you sure you want to deactivate your account? All of your data
//             will be permanently removed. This action cannot be undone.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;


import React, { useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";


const SignUp = () => {
  const[username,setUsername]=useState();
  // const[fname,setFname]=useState();
   const[gender,setGender]=useState();
  const [email, setEmail] = useState();
  const [phone, setPhone]=useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [loading, setLoading] = useState(false);
  

  const submitHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const data = await axios.post(
        "https://oliomart.herokuapp.com/newbuyer/register",
        {username, email,phone, password, confirmpassword ,gender},
        config
      );

     

      localStorage.setItem('userInfo',JSON.stringify(data));
            setLoading(false);
          
           console.log("Registered successful");

    } catch (error) {
      console.log("erorrrrr");
      setLoading(false);
    }
  };

 
  return (
    <>
      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3
          className="text-lg leading-6 font-medium text-trade"
          id="modal-title"
        >
          Sign Up
        </h3>
        <small className="text-primary mt-1">
          Enter your credentials to Sign up
        </small>
        <div className="w-full max-w-xs">
          <form className="bg-transparent shadow-md rounded  mb-4 mt-7">
            <div className="mb-4">
            <input
            autoComplete="off"
            className="shadow appearance-none border-b-2 border-b-trade rounded w-full py-2 px-3 text-primary bg-transparent   mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={username}
            placeholder="Enter Username "
            onChange={(e) => setUsername(e.target.value)}
            required
          />
           
              <input
                autoComplete="off"
                className="shadow appearance-none border-b-2 border-b-trade rounded w-full py-2 px-3 text-primary bg-transparent  mb-3  leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                value={email}
                placeholder="Enter email "
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            
            <input
            autoComplete="off"
            className="shadow appearance-none border-b-2 border-b-trade rounded w-full py-2 px-3 text-primary bg-transparent    leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="string"
            value={phone}
            placeholder="Enter Phone Number "
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          </div>
            <div className="mb-6">
              <input
                autoComplete="off"
                className="shadow appearance-none border-b-2 border-b-trade rounded w-full py-2 px-3 bg-transparent text-primary mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                value={password}
                placeholder="******************"
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <input
              autoComplete="off"
              className="shadow appearance-none border-b-2 border-b-trade rounded w-full py-2 px-3 bg-transparent text-primary mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="text"
              value={confirmpassword}
              placeholder="******************"
              onChange={(e) => setConfirmpassword(e.target.value)}
              required
            />
            
           <div>
            <select 
                className=" dropdown-menu
                min-w-max
                absolute
                text-base
                float-left
                list-none
                text-left
                rounded-lg
               my-1  mx-1
                shadow appearance-none border-b-2 border-b-trade  w-1/4 py-2 px-3 bg-trade text-black  leading-tight focus:outline-none focus:shadow-outline
                bg-clip-padding
                border-none
              "
                value={gender} onChange={e=>setGender(e.target.value)}>
                  <option>Male</option>
                  <option>Female</option>
                </select>
               
                </div>
                
              <a
                className="inline-block align-baseline text-sm my-12  text-trade "
                href="#"
              >
                Forgot Password?
              </a>
              <p className="text-red-500 text-xs italic  ">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-trade text-black   py-2 px-4 border-rad focus:outline-none focus:shadow-outline"
                type="button"
                onClick={submitHandler}
                isLoading={loading}
              >
              Sign Up
              </button>
            </div>
            <div className="text-primary text-sm mt-3">
          
            Not have an account ? Sign up  
          
            </div>
          </form>
        </div>
      </div>

      
    </>
  );
};

export default SignUp;
