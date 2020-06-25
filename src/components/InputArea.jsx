import React, {useState} from "react";

function InputArea(props) {
const [inputText, setInputText] = useState("");


function updateItem(event) {
    const newInput = event.target.value;
    setInputText(newInput);
}

    return (
        <div className="form">
        <input onChange={updateItem} type="text" value={inputText}/>
        <button onClick={() => {
          props.addItem(inputText);
          setInputText("");
      }} type="submit">
          <span>Add</span>
        </button>
        </div>
    );
}

export default InputArea;