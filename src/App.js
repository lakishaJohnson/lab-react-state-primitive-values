import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(1);

  const handleIncrement = () => {
    setCount(count + add);
  };

  const handleDecrementTen = () => {
    if (count >= 10) {
      setCount(count - 10);
      setAdd(add + 1);
    } else {
      alert("You can't afford that!");
    }
  };

  const resetGame = () => {
    setCount(0);
    setAdd(1);
  };

  if (count < 100) {
    return (
      <main>
        <h2>Current Score: {count}</h2>
        <button onClick={handleIncrement}>+{add}</button>
        <button onClick={handleDecrementTen}>
          Pay 10 points to change from +{add} to +{add + 1}
        </button>
      </main>
    );
  } else {
    return (
      <main>
        <h2>You Win!</h2>
        <button onClick={resetGame}>Play again?</button>
      </main>
    );
  }
};

export default App;
