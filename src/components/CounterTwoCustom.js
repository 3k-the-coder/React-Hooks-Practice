import React, {useState, useEffect} from 'react'
import useCounter from '../hooks/useCounter'

function CounterTwoCustom() {
    const [count, increment, decrement, reset] = useCounter()


    return (
        <div>
            Count : {count}
            <button onClick={increment}> Increment </button>
            <button onClick={decrement}> Decrement </button>
            <button onClick={reset}> Reset </button>
        </div>
    )
}

export default CounterTwoCustom
