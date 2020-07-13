import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentF() {

    const context = useContext(CountContext)

    return (
        <div>
            <button onClick={() => context.dispatchCount('reset')}> Reset Component F </button>
        </div>
    )
}

export default ComponentF
