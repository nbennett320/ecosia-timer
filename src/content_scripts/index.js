import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import onSearch from './scripts/onSearch'
import toMilliseconds from './scripts/toMilliseconds'

console.log('Content scripts has loaded')
const content = document.getElementsByClassName('mainline-top')
const query = document.getElementsByClassName('search-form-input')[0].value
const matches = onSearch.parseQuery(query)
const args = onSearch.argsInclude(matches)
if(args) {  
    const time = toMilliseconds(Number(args.time), args.unit)
    ReactDOM.render(<Main time={time} args={args} />, content[0])
}