import { useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const add = () => {
    setResult(result + Number(input));
  };

  const subtract = () => {
    setResult(result - Number(input));
  };

  const multiply = () => {
    setResult(result * Number(input));
  };

  const divide = () => {
    if (Number(input) !== 0) {
      setResult(result / Number(input));
    } else {
      alert("Cannot divide by zero");
    }
  };

  const resetInput = () => {
    setInput("");
  };

  const resetResult = () => {
    setResult(0);
  };

  return (
    <div className="App-container">
      <div className="App">
        <h1>Simple Calculator</h1>
        <div className="result">Result: {result}</div>
        <input type="number" value={input} onChange={handleInputChange} input ="Enter a number" />
        <div className="buttons">
          <button onClick={add}>Add</button>
          <button onClick={subtract}>Subtract</button>
          <button onClick={multiply}>Multiply</button>
          <button onClick={divide}>Divide</button>
          <button onClick={resetInput}>Reset Input</button>
          <button onClick={resetResult}>Reset Result</button>
        </div>
      </div>
    </div>
  );
}