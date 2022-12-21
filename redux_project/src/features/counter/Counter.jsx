import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {increment,
        decrement,
        incrementByAmount,
        reset
} from "./counterSlice.js";
import {useState} from "react";

const Counter = () => {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
    const [incrementAmount,setIncrementAmount] = useState(0)
    const addValue = Number(incrementAmount) || 0
    const resetAll = ()=>{
        setIncrementAmount(0)
        dispatch(reset())
    }
    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={()=>dispatch(increment())}>+</button>
                <button onClick={()=>dispatch(decrement())}>-</button>
            </div>
            <input
                type={"text"}
                value={incrementAmount}
                onChange={(event)=> setIncrementAmount(event.target.value)}
            />
            <div>
                <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </section>
    );
};

export default Counter;