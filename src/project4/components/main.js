import React from "react";
import memeData from "./memeData";
const Main = () => {
  const [img, setImg] = React.useState("");
  const randomData = () => {
    const rand =
      memeData.data.memes[
        Math.floor(Math.random() * memeData.data.memes.length)
      ].url;
    setImg(rand);
  };
  return (
    <main>
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          width: "436px",
        }}
      >
        <input
          type="text"
          placeholder="Top Text"
          style={{ margin: "20px -20px", padding: "10px 10px" }}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          style={{ margin: "20px 30px", padding: "10px 10px" }}
        />
      </div>
      <button
        style={{ margin: "0px 530px", width: "384px", padding: "10px" }}
        onClick={randomData}
      >
        Get a new meme image 🖼
      </button>
      <img src={img} />
    </main>
  );
};

export default Main;
