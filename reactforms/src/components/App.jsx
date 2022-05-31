import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  function handleChange(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }

  function handleSubmit(e) {
    setHeading(name);
    e.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello, {heading}</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
