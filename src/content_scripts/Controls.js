import React, { Component } from 'react'
import { IconButton } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import RestoreIcon from '@material-ui/icons/Restore'

export default class Controls extends Component {
    render() {
        const { isPlaying } = this.props
        render (
            <div style={styles.main}>
                <IconButton>
                    {isPlaying
                        ? <PauseIcon />
                        : <PlayArrowIcon />
                    }
                </IconButton>

                <IconButton>
                    <RestoreIcon />
                </IconButton>
            </div>
        )
    }
}

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'row'
    }
}