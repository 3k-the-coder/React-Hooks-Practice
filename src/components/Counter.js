import React, {useState, useMemo} from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)  


    

    const isEven = useMemo(() => {
        let i =0
        while(i < 200000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <div>
            <div>
                <button onClick={() => setCounterOne(prevCounterOne => prevCounterOne + 1)}> Increment - {counterOne} </button>
                <span> { isEven ? 'Even' : 'Odd' } </span>
            </div>
            <div>
                <button onClick={() => setCounterTwo(prevCounterTwo => prevCounterTwo + 1)}> Increment - {counterTwo} </button>
            </div>
        </div>
    )
}

export default Counter
