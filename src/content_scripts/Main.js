import React, { Component } from 'react'
import Footer from './Footer'

export default class Main extends Component {
    render() {
        const { query } = this.props
        return (
            <div className="widget-container" style={styles.main}>
                {/* put widget content here */}
                <p className="widget-result"> {query} </p>
                <Footer />
            </div>
        )
    }
}

const styles = {
    main: {
        padding: '30px 20px'
    }
}