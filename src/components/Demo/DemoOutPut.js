import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutPut = (props) => {
  console.log("DemoOutput is RUNNING");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

export default React.memo(DemoOutPut);
