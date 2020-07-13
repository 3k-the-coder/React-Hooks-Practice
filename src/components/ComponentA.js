import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentA() {

    const context = useContext(CountContext)
    return (
        <div>

            <button onClick={() => context.dispatchCount('increment')}> Increment from Component A </button>
        </div>
    )
}

export default ComponentA
