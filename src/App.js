import React, { Component } from 'react';
import Timer from './Timer';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Boston Trip Countdown!</h1>
        </header>
        <Timer deadline="March 16, 2018"/>
        <div className="container">
          <ButtonGroup justified>
            <Button
                    href="https://docs.google.com/document/d/1CP6XiOyGoqh3O28YtV0Xde6eX0QkgIlhZX3Amu1vNpk/edit"
                    target="_blank">
              Song List
            </Button>
            <Button
                    href="https://docs.google.com/document/d/1Sulb8xef5hJA7JGjMl7GDmxN1hBlN7hcNacga-lDOCA/edit"
                    target="_blank">
              Ideas
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default App;
