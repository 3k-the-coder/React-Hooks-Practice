import React, { Component } from 'react'

export default class IntervalClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                count: 0
        }
    }

    componentDidMount = () => {
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillMount = () => {
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState((prevState) => {
            return {count: prevState.count + 1}
        })
    }
    
    render() {
        return (
            <h1> Count: {this.state.count} </h1>
        )
    }
}
