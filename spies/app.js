var db = require('./db.js');

module.exports.handleSignup = function(email, password){
    db.saveUser({
        email: email,
        password: password
    });
};