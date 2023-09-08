import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutPut from "./components/Demo/DemoOutPut";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [toggleParagraph, setToggleParagraph] = useState(false);

  console.log("APP RUNNING");

  const toggelButtonChangeHandler = useCallback(() => {
    if (toggleParagraph) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [toggleParagraph]);

  const toggleParagraphHandler = () => {
    setToggleParagraph(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutPut show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
      <Button onClick={toggelButtonChangeHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
