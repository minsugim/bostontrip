import React, { Component } from 'react';
import Timer from './Timer';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import {StyleSheet, css} from 'aphrodite';
import HorizontalTimeline from 'react-horizontal-timeline';
import './App.css';

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

const VALUES = ['2018-03-16', 
                '2018-03-17',
                '2018-03-18',
                '2018-03-19',
                '2018-03-20',
                '2018-03-21',
                '2018-03-22',
                '2018-03-23',
                '2018-03-24',
               ];
                // {date: '18/03/2018', title: 'Day 3'},
                // {date: '19/03/2018', title: 'Day 4'},
                // {date: '20/03/2018', title: 'Day 5'},
                // {date: '21/03/2018', title: 'Day 6'},
                // {date: '22/03/2018', title: 'Day 7'},
                // {date: '23/03/2018', title: 'Day 8'},
                // {date: '24/03/2018', title: 'Day 9: Depart to Seattle'}

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
          <div className={css(styles.trip)}>Trip 1 </div>
          <Timer deadline="16 Mar 2018 10:45:00 PDT"/>
          <hr />
          <div className={css(styles.trip)}>Trip 2 </div>
          <Timer deadline="16 Mar 2018 23:59:00 PDT"/>
          <ButtonGroup justified>
            <Button
                    href="https://www.dropbox.com/sh/r2wuewa6sbeu9sf/AABqyBwPpa6SlwL-F7AQwXxSa?dl=0"
                    target="_blank">
              Sprink Break Recordings
            </Button>
            <Button
                    href="/schedule.pdf"
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
