// const axios = require('axios')
let headers = {
  'accept': 'application/json',
  'Content-Type': 'application/json'
}
let data = {
  name: 'matt'
}

axios.post('https://order1-1.herokuapp.com/', data, { headers: headers })
  .then( res => {
    console.log(res)
  }).catch(function (error) {
    console.log(error);
  })