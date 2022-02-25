import React from "react";
import "./styles.css";
import boxes from "./boxes";
import Boxx from "./Boxx";
function Box() {
  const [box, setBox] = React.useState(boxes);
  const toggle = (id) => {
    setBox((previous) => {
      return previous.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : box;
      });
    });
    // setBox((prev) => {
    //   const newSquaare = [];
    //   for (let i = 0; i < prev.length; i++) {
    //     const currentValue = prev[i];
    //     if (currentValue.id === id) {
    //       const update = {
    //         ...prev,
    //         on: !prev.on,
    //       };
    //       newSquaare.push(update);
    //     } else newSquaare.push(currentValue);
    //   }
    //   return newSquaare;
    // });
  };

  const allboxes = box.map((square) => (
    <div className="box">
      <Boxx key={square.id} id={square.id} on={square.on} toggle={toggle} />
    </div>
  ));
  return <div>{allboxes}</div>;
}

export default Box;
