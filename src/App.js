// function App() {
//   return <div>hi</div>;
// }

// export default App;

import React, { useState } from "react";
import Question from "./Question";
import RandomColor from "./randomColor";

const App = () => {
  // challange---1
  // const [question, setAnswer] = useState({
  //   quest: "what is your name",
  //   name: "my name is ali raza",
  // });
  // const handleChange = (e) => {
  //   setAnswer((prevState) => ({
  //     ...prevState,
  //     quest: question.name,
  //   }));
  // };
  // return (
  //   <div>
  //     <button onClick={handleChange}> {question.quest}</button>
  //   </div>
  // );
  // challange ---2
  const [firstName, setFirstName] = useState("");
  function handleChange(event) {
    setFirstName(event.target.value);
  }

  return (
    <div>
      <input name="firstName" value={firstName} onChange={handleChange} />
      {firstName.toUpperCase()}
      <RandomColor />
    </div>
  );
};

export default App;
// var arr1 = "john".split("");
// var arr2 = arr1.reverse();
// var arr3 = "jones".split("");
// arr2.push(arr3);
// console.log(arr1.length + " " + arr1.slice(-1));
