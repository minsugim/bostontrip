import React, {Component} from 'react';
import {Line} from 'rc-progress';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
    count: {
        '@media (max-width: 768px)': {
            display: 'block'
        },
        fontSize: "3em"
    },
    text: {
        color: "#1e1e1e"
    },
    seconds: {
        color: "#FFB7C5"
    },
    numbers: {
        fontSize: "4em",
        display: "inline-block",
        color: "white",
        marginLeft: ".1em",
        marginRight: ".1em",
        padding: ".5em",
        backgroundColor: "rgba(9, 0, 155, 0.6)"
    },
    blocks: {
        display: "inline-block"
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
        let time = Date.parse(deadline) - Date.parse(new Date());
        let seconds = Math.floor((time/1000) % 60);
        let minutes = Math.floor((time/1000/60) % 60);
        let hours = Math.floor(time/(1000*60*60) % 24);
        let days = Math.floor(time/(1000*60*60*24));
        this.setState({days, hours, minutes, seconds});
    }

    render() {
        // let day = this.state.days === 1 ? "day" : "days";
        // let hours = this.state.hours === 1 ? "hour" : "hours";
        // let minutes = this.state.minutes === 1 ? "minute" : "minutes";
        // let seconds = this.state.seconds === 1 ? "second" : "seconds";
        return(
            <div>
                <div>
                    <div className={css(styles.numbers)}>{((this.state.hours < 10) ? "0" : "") + this.state.hours}</div>
                    <div className={css(styles.numbers)}>{((this.state.minutes < 10) ? "0" : "") + this.state.minutes}</div>
                    <div className={css(styles.numbers, styles.seconds)}>{((this.state.seconds < 10) ? "0" : "") + this.state.seconds}</div>
                </div>
                {/* <span className={css(styles.count)}>Hours:<span className={css(styles.number)}>{((this.state.hours < 10) ? "0" : "") + this.state.hours}</span></span>
                <span className={css(styles.count)}> Minutes:<span className={css(styles.number)}>{((this.state.minutes < 10) ? "0" : "") + this.state.minutes}</span> </span> 
                <span className={css(styles.count)}> Seconds:<span className={css(styles.number, styles.seconds)}>{((this.state.seconds < 10) ? "0" : "") + this.state.seconds}</span> </span>                */}
            </div>
        )
    }
}

export default Timer;