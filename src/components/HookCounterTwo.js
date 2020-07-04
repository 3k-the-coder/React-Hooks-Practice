import React, {useState} from 'react'

function HookCounterTwo() {
    const [ count, setCount ] = useState(0)
    return (
        <div>
            <h2> Count {count} </h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}> Increment Count  </button> 
            <button onClick={() => setCount(prevCount => prevCount - 1)}> Decrement Count  </button> 
            <button onClick={() => setCount(0)}> Reset Count </button> 

        </div>
    )
}

export default HookCounterTwo
