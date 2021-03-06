module.exports.add=(a,b) => a + b;

module.exports.square = (x) => x*x;

module.exports.asyncAdd = function (a, b , callback){
    setTimeout(function(){
        callback(a + b);
    }, 1000);
};

module.exports.setName = (user, fullName) => {
    var names = fullName.split('');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;

};