import React from "react";
import "./styles.css";
const Boxx = (props) => {
  const styles = { backgroundColor: props.on ? "white" : "grey" };

  return (
    <div
      style={styles}
      className="box"
      onClick={() => props.toggle(props.id)}
    ></div>
  );
};

export default Boxx;
