import React, { useState } from 'react'

const Counter = () => {
    let [count, whateverName] = useState(0);

    function increment() {
        if (count <  10)
        {
            whateverName(count+1);
        }
    }

    function reset() {
        whateverName(0);
    }

    function decrement() {
        if (count > 0) {
            whateverName(count-1);
        }
    }


    return (
        <div>
            <h1>{count}</h1>
            <button className='btn btn-primary me-2' onClick={increment}>+</button>
            <button className='btn btn-primary me-2' onClick={decrement}>-</button>
            <button className='btn btn-primary me-2' onClick={reset}>reset</button>
        </div>
    )
}

export default Counter