import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hello");
  const [mouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeading("Submitted");
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{
          backgroundColor: mouseOver ? "black" : "white"
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
