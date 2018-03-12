import React, { Component } from 'react';

class Intro extends Component {
  constructor(props) {
    super(props)

    this.changeTitleHandler = this.changeTitleHandler.bind(this)
  }


  changeTitleHandler() {
    const inputEl = document.querySelector(".changeTitleText")
    const newTitle = inputEl.value
    this.props.titleChange(newTitle)
  }

  render() {
    return (
      <div>
        <p className="App-intro">
            <input className="changeTitleText" type="text" />
            <button onClick={this.changeTitleHandler}>Change Title</button>
        </p>
      </div>
    )
  }
}

export default Intro;