import React, { useState, useCallback } from "react";

import Button from "./Button";

const initialState = 0;

const CounterOne = () => {

  const [count1, setCount1] = useState(initialState);
  const [count2, setCount2] = useState(initialState);

  const Add1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const Add2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  return (
    <div>
      <div>Counter 1 - {count1}</div>
      <div>Counter 2 - {count2}</div>
      <Button clickHandler={Add1}>Increment Counter 1</Button>
      <Button clickHandler={Add2}>Increment Counter 2</Button>
    </div>
  );
};

export default CounterOne;
