import React, { Component } from "react";

class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: ''
    };
  }

  componentDidMount = () => {
    document.title = `Clicked ${this.state.count} times`;
  };

  componentDidUpdate = (prevProps, prevState) => {
    
    if(this.state.count !== prevState.count) 
    {
      console.log("In update")
      document.title = `Clicked ${this.state.count} times`;
    }
  };

  render() {
    return (
      <div>
        <input
          type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})}
        />
          <button
          onClick={() =>
            this.setState((prevState) => {
              return {count: prevState.count + 1}
            })
          }
        >
          
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
