
require('dotenv').config();

module.exports = {  
    method : 'GET',
    headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + process.env.TOKEN,
        'Host' : 'api.producthunt.com'
    }
}