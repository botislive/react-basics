import { useState } from "react";
import "./App.css"; 

function App() {
  let [counter, setCounter] = useState(10);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const decrementValue = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="app-container">
      <div className="counter-card">
        <h1 className="title">React Counter</h1>
        <div className="counter-display">
          <span className="counter-value">{counter}</span>
        </div>
        <p className="instruction">Adjust the count below</p>
        
        <div className="button-group">
          <button className="btn primary" onClick={addValue}>
            Increment +
          </button>
          <button className="btn secondary" onClick={decrementValue}>
            Decrement -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;