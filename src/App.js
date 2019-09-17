import React, { Component } from 'react';

const App = () => (
    <Counter></Counter>
  )

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0}
  }
  handlePluss = () => {
    this.setState( { count: this.state.count + 1 } )
  }

  handleMinus = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
    <div>
    { this.state.count }
    <button onClick={this.handlePluss}>+1</button>
    <button onClick={this.handleMinus}>-1</button>
    </div>)
  }
}
export default App;
