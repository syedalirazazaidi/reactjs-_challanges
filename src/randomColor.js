import React, { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState({
    color1: "",
    color2: "",
    color3: "",
  });
  const setnewColor = () => {
    return Math.floor(Math.random() * 250) + 1;
  };

  const changeColor = (e) => {
    console.log("ko");
    setColor((prevState) => ({
      ...prevState,
      color1: setnewColor(),
      color2: setnewColor(),
      color3: setnewColor(),
    }));
  };

  let newColor =
    "rgb(" + color.color1 + "," + color.color2 + "," + color.color3 + ")";
  return (
    <div
      style={{
        height: "250px",
        borderRadius: "120px",
        width: "250px",
        backgroundColor: newColor,
        marginTop: "150px",
        margin: "0 auto",
      }}
    >
      <button onClick={changeColor}>random color</button>
    </div>
  );
};

export default RandomColor;
