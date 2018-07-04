const axios = require('axios')
const service = {}

service.getRepositories = function (githubUser){
    //
    let laPromesaDeAxios = axios
        .get('https://api.github.com/users/ezeggonzalez/repos')
        
        return laPromesaDeAxios.then(function(res){
            return res.data
})
}

module.exports = service;