import React from "react";
const makeFunc = () => {
  return (
    <div>
      <div>
        <h1 style={{ marginLeft: "30px", marginTop: "30px" }}>
          Fun facts about React
          {orderList()}
        </h1>
      </div>
    </div>
  );
};
const orderList = () => {
  return (
    <ul style={{ marginLeft: "70px", marginTop: "30px", fontSize: "20px" }}>
      <li>Was first released in 2013</li>
      <li>Was orignally created by Jorden Walke</li>
      <li>Has Well over 100k Github stars</li>
      <li>Is maintained by Facebook</li>
      <li>Powered thousand of apps ,including mobile apps</li>
    </ul>
  );
};

const Body = () => makeFunc();

export default Body;
