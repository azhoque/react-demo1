import React, { Component } from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Listicle from '../components/Listicle';
import Helper from '../components/Helper'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Other People\'s Shit',
      showHelper: true
    }

    this.setTitle = this.setTitle.bind(this)
    this.setShowHelper = this.setShowHelper.bind(this)
  }

  setTitle(newTitle) {
    this.setState({
      title: newTitle
    })
  }

  setShowHelper(value) {
    this.setState({
      showHelper: value
    })
  }

  render() {
    const RenderedHelper = this.state.showHelper 
       ? <Helper helperToggle={this.setShowHelper}/>
       : undefined 
    
    return (
      <div className="App">
        <Header helperToggle={this.setShowHelper} words={this.state.title}/>
        <Intro inputText={this.state.title} titleChange={this.setTitle} />
        <Listicle />
        {RenderedHelper}
      </div>
    );
  }
}

export default App;

