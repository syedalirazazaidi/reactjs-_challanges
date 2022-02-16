import React from "react";

const ShowFruit = () => {
  const [fruits, setFruits] = React.useState({
    Fruits: [
      { name: "Apple", fact: " i m yellow in color" },
      { name: "Oranges", fact: " i m orange in color" },
      { name: "Grapes", fact: " i m lightgreen in color" },
    ],
    showfr: false,
    fruitMessage: "show me fruit fact",
  });
  const fruitFact = (e) => {
    setFruits((prevState) => ({
      ...prevState,
      fruitMessage: "fruit fact is boring",
      showfr: true,
    }));
  };
  const showData = () => {
    if (fruits.showfr) {
      {
        fruits.Fruits.map((i) => i);
      }
    }
  };

  return (
    <div>
      <button
        style={{
          background: "grey",
          width: "200px",
          height: "40px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={fruitFact}
      >
        {fruits.fruitMessage}
      </button>
    </div>
  );
};

export default ShowFruit;
