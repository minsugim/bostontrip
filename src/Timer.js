import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
    count: {
        '@media (max-width: 768px)': {
            display: 'block'
        },
        fontSize: "4em"
    },
    text: {
        color: "#1e1e1e"
    }
});


class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    getTimeUntil(deadline) {
        console.log(Date.parse(deadline));
        let time = Date.parse(deadline) - Date.parse(new Date());
        let seconds = Math.floor((time/1000) % 60);
        let minutes = Math.floor((time/1000/60) % 60);
        let hours = Math.floor(time/(1000*60*60) % 24);
        let days = Math.floor(time/(1000*60*60*24));
        this.setState({days, hours, minutes, seconds});
    }

    render() {
        let day = this.state.days === 1 ? "day" : "days";
        let hours = this.state.hours === 1 ? "hour" : "hours";
        let minutes = this.state.minutes === 1 ? "minute" : "minutes";
        let seconds = this.state.seconds === 1 ? "second" : "seconds";
        return(
            <div>
                <div className={css(styles.count)}><span className={css(styles.number)}>{this.state.days}</span> <span className={css(styles.text)}> {day} </span></div>
                <span className={css(styles.count)}><span className={css(styles.number)}>{this.state.hours}</span> <span className={css(styles.text)}> {hours} </span></span>
                <span className={css(styles.count)}><span className={css(styles.number)}>{this.state.minutes}</span> <span className={css(styles.text)}> {minutes} </span></span> 
                <span className={css(styles.count)}><span className={css(styles.number)}>{this.state.seconds}</span> <span className={css(styles.text)}> {seconds}</span></span>               
            </div>
        )
    }
}

export default Timer;