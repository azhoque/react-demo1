import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Intro from './Intro';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Other People\'s Shit'
    }

    this.setTitle = this.setTitle.bind(this)
  }

  setTitle(newTitle) {
    this.setState({
      title: newTitle
    })
  }

  render() {
    return (
      <div className="App">
        <Header words={this.state.title}/>
        <Intro inputText={this.state.title} titleChange={this.setTitle} />
      </div>
    );
  }
}

export default App;

