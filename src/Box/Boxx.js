import React from "react";
import "./styles.css";
const Boxx = (props) => {
  const style = { backgroundColor: props.on ? "black" : "grey" };

  return (
    <div style={style} className="box" onClick={props.toggle}>
      {" "}
      {window.innerWidth}
      click to change
    </div>
  );
};

export default Boxx;
