import React, { useState } from 'react';

const initialState = 0;

const CounterOne = () => {
    const [count, setCount] = useState(initialState);
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(initialState)}>Reset</button>
        </div>
    )
}

export default CounterOne;