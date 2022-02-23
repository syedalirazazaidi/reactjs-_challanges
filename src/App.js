import React from "react";
import Box from "./Box/Box";
import Project2 from "./project2/components/app";
import Project3 from "./Project3/app";
import Hero from "./project4/app";
import Project1 from "./project1/app";
// import "./project4/styles.css";
import Heronew from "./project5/components/hero";
import Main from "./project5/components/main";
import Incre from "./new/button";

const App = () => {
  const [items, setItems] = React.useState(["item 1", "item 2"]);
  const addItem = () => {
    setItems((prev) => [...prev, `item${prev.length + 1}`]);
  };
  const ite = items.map((ip) => <div>{ip}</div>);

  return (
    <div>
      <Incre />
      {/* add an items{ite} */}
      {/* <Project1 /> */}
      {/* <Project2 /> */}
      {/* <Hero /> */}
      {/* <Heronew /> */}
      {/* <Box /> */}
      {/* <Main /> */}
    </div>
  );
};

export default App;
