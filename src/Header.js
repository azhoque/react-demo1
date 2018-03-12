import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {
    render() {
      return (
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
      )
    }
  }

  export default Header; //its telling any file that is importing JS file that is defaulting to this file