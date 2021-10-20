import React, { useEffect, useState } from 'react';
import './counter.scss';

export const Counter = () => {
    
    const [count, setCount] = useState<number>(0);
    const [counterChanged, setCounterChanged] = useState<number>(0);

    useEffect(() => {
        setCounterChanged(counterChanged + 1);
    }, [count]);

    return <div className='counter-container'>
        <div className='counter-value'>{count}</div>
        <button className='increment-button' onClick={() => setCount(count + 1)}>Increment</button>
        <button className='decrement-button' onClick={() => setCount(count - 1)}>Decrement</button>
        <div className='counter-value'> {counterChanged} </div>
    </div>
     
};