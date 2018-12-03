import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter'

class App extends Component {
  constructor() {
    super()
    this.state = {
      total: 0
    }
    this.increment = this.increment.bind(this);
  }

  increment() {
    let current = this.state.total
    this.setState({total: current + 1})
  }

  render() {
    let count = this.state.total

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <div>{ count }</div>
        <Counter increment={this.increment} />
      </div>
    );
  }
}

export default App;
