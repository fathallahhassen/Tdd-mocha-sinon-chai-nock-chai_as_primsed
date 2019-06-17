const axios = require('axios');

module.exports = {
    getUser(username) {
        return axios
            .get(`https://api.github.com/users/${username}`)
            .then(res => res.data)
            .catch(error => console.log(error));
    },
    getHeyFromApi: (req, res) => {
        res.send("Hey");
    },
    checkingLoginUser: (req, res) => {
        if (req.user.isLoggedIn()) {
            return res.send("conneceted User");
        }
        res.send("Ooops. You need to log in to access this page");
    }
};