import React, {useEffect, useState, useReducer} from 'react'
import axios from 'axios'

const reducer = (state, action) => {

}

function DataFetchingOne() {

    const [loading, setLoading] = useState(true)
    const [error,setError] = useState(undefined)
    const [post, setPost] = useState({})

    useEffect( () => {
        const postList = axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
                            .then(response => {
                                setLoading(false)
                                setError('')
                                setPost(response.data)
                            })
                            .catch(error => {
                                setLoading(false)
                                setPost({})
                                setError("Something Went Wrong")
                            })
    }, [])


    return (
        <div>
            {
                loading ? <h2> LOADING... </h2> : <h2> {post.title} </h2>
            }

            {
                error? error : null
            }
        </div>
    )
}

export default DataFetchingOne
