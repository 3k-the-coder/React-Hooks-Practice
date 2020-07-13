import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentD() {

    const context = useContext(CountContext)

    return (
        <div>
            <button onClick={() => context.dispatchCount('decrement')}> Decrement Component D </button>
        </div>
    )
}

export default ComponentD
