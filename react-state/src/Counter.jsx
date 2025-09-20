import React from 'react'
import { useState } from 'react';

function Counter() {
    let [count, setCount] = useState(0)

    function incCount() {
        count +=  1
        setCount(count)
        console.log(count)
    }

    return (
        <>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count {count} </button>
        </>
    )
}

export default Counter
