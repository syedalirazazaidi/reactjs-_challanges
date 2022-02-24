import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const ObjNew = () => {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    email: "aa@gmail.com",
    eyeColor: "blue",
    showStar: false,
  });
  let starIcon = contact.showStar ? <AiOutlineStar /> : <AiFillStar />;
  const toggleChange = () => {
    setContact((pre) => {
      return { ...pre, showStar: !contact.showStar };
    });
  };
  return (
    <div style={{ backgroundColor: "#fff", fontSize: "30px" }}>
      Name:{contact.firstName}
      <br />
      Email:{contact.email}
      <br />
      <div style={{ alignContent: "center" }} onClick={toggleChange}>
        <div>profile Star:{starIcon}</div>
      </div>
    </div>
  );
};

export default ObjNew;
