import React from "react";
import boxes from "./boxes";
import Boxx from "./Boxx";
import "./styles.css";
function Box() {
  const [box, setBox] = React.useState(boxes);

  function toggleState(id) {
    setBox((previous) => {
      return previous.map((squareitem) =>
        squareitem.id === id ? { ...box, on: !box.on } : box
      );
    });
  }
  const squareElements = box.map((square) => (
    <Boxx
      key={square.id}
      on={square.on}
      toggle={() => toggleState(square.id)}
    />
  ));

  return <div>{squareElements}</div>;
}

export default Box;
