const secs = /\b(seconds|second|secs|sec|s)\b/gmi
const mins = /\b(minutes|minute|mins|min|m)\b/gmi
const hours = /\b(hours|hour|hrs|hr|h)\b/gmi

// convert time units to ms
const toMilliseconds = (time, units) => {
    let ms
    if(secs.test(units)) ms = time * 1000
    else if(mins.test(units)) ms = time * 60000
    else if(hours.test(units)) ms = time * 3600000
    else {
        console.log("error with time units")
        ms = time * 60000
    } return ms
}

export default toMilliseconds