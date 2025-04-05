import "./App.css";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleIncrementSteps() {
    setStep((s) => s + 1);
  }

  function handleDecrementSteps() {
    setStep((s) => s - 1);
  }

  function handleIncrementCount() {
    setCount((c) => c + step);
  }

  function handleDecrementCount() {
    setCount((c) => c - step);
  }

  return (
    <div className="App">
      <div className="stepCounter">
        <button className="minusButton" onClick={handleDecrementSteps}>
          -
        </button>
        <p>Step: {step}</p>
        <button className="plusButton" onClick={handleIncrementSteps}>
          +
        </button>
      </div>

      <div className="counter">
        <button className="minusButton" onClick={handleDecrementCount}>
          -
        </button>
        <p>Count: {count}</p>
        <button className="plusButton" onClick={handleIncrementCount}>
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is: "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        {date.toDateString()}
      </p>
    </div>
  );
}

export default App;
