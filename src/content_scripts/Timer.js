import React, { Component } from 'react'
import Countdown from 'react-countdown'
import EndTimer from './EndTimer'

const renderer = ({ hours, minutes, seconds, completed }, time) => {
    hours = (hours).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    minutes = (minutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    seconds = (seconds).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    if(completed) {
        return <EndTimer />
    } else {
    return time < 3600000 
        ? <span> {minutes}:{seconds} </span>
        : <span> {hours}:{minutes}:{seconds} </span>
    }
}

export default class Timer extends Component {
    render() {
        const { time, args } = this.props
        return (
            <span>
                <div style={styles.left}>
                    <span style={styles.label}> 
                        Timer for {args.time} {standardizeUnitString(args.unit)} 
                    </span>
                    
                    <Countdown
                        date={Date.now() + time}
                        precision={3}
                        renderer={({ hours, minutes, seconds, completed }) => (
                            renderer({ hours, minutes, seconds, completed }, time)
                        )}
                    >
                        
                    </Countdown>
                </div>
            </span>
        )
    }
}

const styles = {
    left: {
        padding: '30px 10px',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '48px',
        color: '#4a4a4a',
        cursor: 'text'
    }, 

    span: {
        margin: '0 10px'
    },

    label: {
        margin: '0',
        fontSize: '16px',
        color: '#aaa',
        cursor: 'text'
    }
}

// convert "sec" to "seconds", etc
const standardizeUnitString = units => {
    let str
    if(secs.test(units)) str = "seconds"
    else if(mins.test(units)) str = "minutes"
    else if(hours.test(units)) str = "hours"
    else {
        console.log("error standardizing time units")
        str = "minutes"
    } return str
}

const secs = /\b(seconds|second|secs|sec|s)\b/gmi
const mins = /\b(minutes|minute|mins|min|m)\b/gmi
const hours = /\b(hours|hour|hrs|hr|h)\b/gmi