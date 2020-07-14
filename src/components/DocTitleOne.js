import React, {useState} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function DocTitleOne() {

    const [count, setCount] = useState(0)

    useDocumentTitle(count)

    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}> Clicked {count} times </button>
        </div>
    )
}

export default DocTitleOne
