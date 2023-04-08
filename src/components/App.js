import React, { useReducer } from "react";
import { counterReducer } from "../reducers/counterReducer";
import "../styles/App.css";
const App = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div id="main">
      <button
        id="increment-btn"
        onClick={() => dispatch({ type: "increment" })}
      >
        increase
      </button>
      <span id="counter">{state.count}</span>
      <button
        id="decrement-btn"
        onClick={() => dispatch({ type: "decrement" })}
      >
        decrease
      </button>
    </div>
  );
};

export default App;
