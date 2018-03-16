import React, { Component } from 'react';
import Timer from './Timer';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import {StyleSheet, css} from 'aphrodite';
import './App.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

const styles = StyleSheet.create({
  name: {
    fontSize: "2em",
    color: "#4b2e83",
    fontWeight: "bold",
    marginBottom: "1em"
  },
  trip: {
    fontSize: "2em"
  }
});

class App extends Component {
  state = { value: 0, previous: 0 };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Boston Trip Countdown!</h1>
        </header>
        <div className={css(styles.name)}>UW Christian Students</div>
        <div className="container">
          <div className={css(styles.trip)}>Trip 2 </div>
          <Timer deadline="16 Mar 2018 23:59:00 PDT"/>
          <br />
          <ButtonGroup justified>
            <Button
                    href="https://www.dropbox.com/sh/r2wuewa6sbeu9sf/AABqyBwPpa6SlwL-F7AQwXxSa?dl=0"
                    target="_blank">
              Sprink Break Recordings
            </Button>
            <Button
                    href="https://drive.google.com/file/d/1n-UvbRbv1mIZN_X6KawecGixSvNlTgo8/view?usp=sharing"
                    target="_blank">
              Schedule
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}



export default App;
