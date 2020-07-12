import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             X: 0,
             Y: 0
        }
    }
    
    setMousePosition = (e) => {
        this.setState({
            X: e.clientX,
            Y: e.clientY
        })
    }

    componentDidMount = () => {
        window.addEventListener('mousemove', this.setMousePosition)
    }

    render() {
        return (
            <div>
                X - {this.state.X} Y - {this.state.Y}
            </div>
        )
    }
}

export default ClassMouse
