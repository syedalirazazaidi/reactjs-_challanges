import React from "react";

const Main = () => {
  const [arr, setArr] = React.useState(["item 1", "item 2"]);
  const additem = () => {
    const neww = `item ${arr.length + 1}`;
    setArr((pre) => [...pre, neww]);
  };
  console.log(arr);

  const alldata = arr.map((item) => {
    return <p key={item}>{item}</p>;
  });

  return (
    <div>
      {alldata}
      <button onClick={additem}>increase</button>
    </div>
  );
};

export default Main;
