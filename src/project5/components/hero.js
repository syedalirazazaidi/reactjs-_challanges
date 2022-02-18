import React from "react";

const Heronew = () => {
  const [objnew, objFunc] = React.useState({
    answer: true,
    name: "ali",
  });

  const clicktheButton = () => {
    objFunc((pre) => {
      return { ...pre, answer: !pre.answer, name: "zaidi" };
    });
  };

  return (
    <div>
      <button onClick={clicktheButton}>update the object{objnew.answer}</button>
      <h2>{objnew.name}</h2>
    </div>
  );
};

export default Heronew;
