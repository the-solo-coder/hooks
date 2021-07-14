import React, { useState } from "react";

const initialState1 = 0;
const initialState2 = 10;

const CounterOne = () => {
  const [count1, setCount1] = useState(initialState1);
  const [count2, setCount2] = useState(initialState2);
  return (
    <div>
      <div>Counter 1 - {count1}</div>
      <div>Counter 2 - {count2}</div>
      <button onClick={() => setCount1(count1 + 1)}>Increment</button>
      <button onClick={() => setCount1(count1 - 1)}>Decrement</button>
      <button onClick={() => setCount1(count1 + 5)}>Increment 5</button>
      <button onClick={() => setCount1(count1 - 5)}>Decrement 5</button>
      <button
        onClick={() => {
          setCount1(initialState1);
          setCount2(initialState2);
        }}
      >
        Reset
      </button>
      <div>
        <button onClick={() => setCount2(count2 + 1)}>
          Increment Counter 2
        </button>
        <button onClick={() => setCount2(count2 - 1)}>
          Increment Counter 2
        </button>
      </div>
    </div>
  );
};

export default CounterOne;
