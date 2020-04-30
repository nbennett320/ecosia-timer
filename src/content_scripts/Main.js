import React, { Component } from 'react'
import Timer from './Timer'
import Footer from './Footer'

export default class Main extends Component {
    render() {
        const { time, args } = this.props
        return (
            <div className="widget-container" style={styles.main}>
                <Timer time={time} args={args} />
                <Footer />
            </div>
        )
    }
}

const styles = {
    main: {
        padding: '0'
    }
}