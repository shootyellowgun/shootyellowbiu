import React from 'react';
import './state.css'

class state extends React.Component {
  constructor() {
    super()
    this.state = {
      num: 1
    }
  }
  fn() {
    this.setState({
      num: ++this.state.num
    })
  }
  render() {
    return (
      <div className="state">
        {this.state.num}
        <button onClick={() => { this.fn() }}>+</button>
      </div>
    )
  }
}

export default state;
