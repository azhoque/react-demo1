import React, { Component } from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Listicle from '../components/Listicle';

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
        <Listicle />
      </div>
    );
  }
}

export default App;

