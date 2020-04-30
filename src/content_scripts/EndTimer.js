import React, { Component } from 'react'
import moment from 'moment'

export default class EndTimer extends Component {
    render() {
        return (
            <div>
                Time's up! 
                <br />
                <div style={styles.ended}>
                    Ended at {moment().format('hh:mm:ss')}.
                </div>
            </div>
        )
    }
}

const styles = {
    ended: {
        margin: '0',
        fontSize: '16px',
        color: '#aaa',
        cursor: 'text'
    }
}