const axios = require('axios')
const url = 'https://api.kanye.rest/'

axios.get(url).then(response => {
    let quote = response.data.quote
    console.log(quote)
})