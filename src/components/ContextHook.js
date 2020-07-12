import React, {useContext} from 'react'

import {UserContext, NameContext} from './../App'

function ContextHook() {

    const user = useContext(UserContext)
    const name = useContext(NameContext)

    return (
        <div>
            <h2> User is, {user} and the Name is {name} </h2>
        </div>
    )
}

export default ContextHook
