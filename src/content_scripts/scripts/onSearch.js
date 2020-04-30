const match = /^(timer|countdown)\s(.*)/gmi
const secs = /\b(seconds|second|secs|sec|s)\b/gmi
const mins = /\b(minutes|minute|mins|min|m)\b/gmi
const hours = /\b(hours|hour|hrs|hr|h)\b/gmi

const onSearch = {
    // parse user search query
    parseQuery: query => {
        const args = match.exec(query)
        console.log(args)
        if(args) {
            return args[args.length - 1]
        } else return false
    },

    // get timer args
    argsInclude: args => {
        args = args.split(' ')
        const time = args
            .filter(el => !isNaN(el))[0]
        const unit = args
            .filter(el => isNaN(el))[0]
        if(!mins.test(unit) 
            && !hours.test(unit) 
            && !secs.test(unit)
            && unit)
                return false
        else return {time, unit}
    }
}

export default onSearch