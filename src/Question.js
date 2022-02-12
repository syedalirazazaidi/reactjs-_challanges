import React from "react";

const Question = ({ onlick }) => {
  console.log(onlick, "lplp");
  return <div onClick={onlick}>Question</div>;
};

export default Question;
