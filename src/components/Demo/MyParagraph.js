import React from "react";

const MyParagraph = (props) => {
  console.log("DemoOutput is RUNNING");
  return <p>{props.children}</p>;
};

export default MyParagraph;
