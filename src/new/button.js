import React from "react";

const Incre = () => {
  const [item, setItem] = React.useState(["item 1", "item 2"]);
  const addItems = () => {
    setItem((prev) => {
      return [...prev, `item${item.length + 1}`];
    });
  };
  const allItems = item.map((i, index) => {
    return <div key={index}>{i}</div>;
  });

  return (
    <div style={{ margin: "150px" }}>
      <button
        style={{
          padding: "20px 40px",
          borderRadius: "25px",
          border: "none",
          backgroundColor: "green",
          color: "#FFFF",
          fontSize: "17px",
        }}
        onClick={addItems}
      >
        Add Items
      </button>
      {allItems}
    </div>
  );
};

export default Incre;
