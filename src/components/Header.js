import React from 'react'
import logo from '../images/logo.svg';

const Header = (props) => {

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{props.words}</h1>
      </header>
      <button onClick={() => props.helperToggle(true)}>show Helper</button>
    </div>
  )
}

export default Header;
