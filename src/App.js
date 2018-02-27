import React, { Component } from 'react';
import Timer from './Timer';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import {StyleSheet, css} from 'aphrodite';
import './App.css';

const styles = StyleSheet.create({
  name: {
      fontSize: "2em",
      color: "#4b2e83",
      fontWeight: "bold"
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Boston Trip Countdown!</h1>
        </header>
        <div className={css(styles.name)}>UW Christian Students</div>
        <div className="container">
          <Timer deadline="16 Mar 2018 10:00:00 PDT"/>
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
