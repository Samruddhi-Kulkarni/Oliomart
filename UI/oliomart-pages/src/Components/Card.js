import React from "react";
import { useState, useEffect } from "react";

const Card = () => {
  const [userData, setuserData] = useState(null);

  useEffect(() => {

    
    const getData = async () => {
      const response = fetch("https://apicrudapp.herokuapp.com/userspage");
      const data = (await response).json;

      setuserData(data);
    };
    // return () => {
    //     cleanup
    // }
    
getData();
}, []);

  

  return (
    < >
      <h1>Users of the app</h1>
      {userData && (
        <div >
          {userData.map((userData, index) => {
            <div key={index}>
              <h2>{userData.username}</h2>
            </div>;
          })}
        </div>
      )}
    </>
  );
};

export default Card;
