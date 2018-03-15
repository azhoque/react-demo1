import React, { Component } from 'react'


const style = {
    background: "lightgrey",
    border: "1px solid grey",
    borderRadius: "4px",
    margin: "20px"
}

export default class Helper extends Component {
  render() {
    return (
      <div style={style}>
        <span>I'm here to help</span>
        <button onClick={() => this.props.helperToggle(false)}>Cancel</button>
      </div>
    )
  }
}
