import React, { useState } from "react";

function App() {
const [inputText, setInputText] = useState("");
const [items, setItems] = useState([]);

function update(event){
const newInput = event.target.value;
setInputText(newInput);
}

function add(event){
    setItems((prevValue) => [...prevValue, inputText]);
    event.preventDefault();
    setInputText("");
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
      <form onSubmit={add}>
        <input onChange={update} type="text" value={inputText}/>
        <button type="submit">
          <span>Add</span>
        </button>
        </form>
      </div>
      <div>
        <ul>
          {items.map((item) => <li>{item}</li>)}
        </ul> 
      </div>
    </div>
  );
}

export default App;
