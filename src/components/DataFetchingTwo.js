import React, {useReducer, useEffect} from 'react'
import axios from 'axios';
const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) =>{
    switch(action.type)
    {
        case "FETCH_SUCCESS":
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: "Something went wrong"
            }
        default:
            return state
    }
}

function DataFetchingTwo() {

    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        const postlist = axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
                            .then(response => {
                                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
                            })
                            .catch(error => {
                                dispatch({ type: 'FETCH_ERROR', payload: '' })
                            })
    }, [])

    return (
        <div>
            {
                state.loading ? <h2> LOADING... </h2> : <h2> {state.post.title} </h2>
            }

            {
                state.error ? state.error : null
            }
        </div>
    )
}

export default DataFetchingTwo
