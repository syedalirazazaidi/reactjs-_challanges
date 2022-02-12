// function App() {
//   return <div>hi</div>;
// }

// export default App;

import React, { useState } from "react";
import Question from "./Question";

const App = () => {
  const [question, setAnswer] = useState({
    question: "what is your name",
    name: "my name is ali raza",
  });
  const handleChange = (e) => {
    setAnswer((prevState) => ({
      ...prevState,
      question: question.name,
    }));
  };

  return (
    <div>
      <button onClick={handleChange}> {question.question}</button>
    </div>
  );
};

export default App;
