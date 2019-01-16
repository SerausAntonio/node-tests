const express = require('express');

var app = express();

app.get('/',function(req, res){
    res.status(404).send({
       error: "Page not found."

    });
});



app.listen(3000,function(){
    console.log("Server is running on port 3000");
});

module.exports.app = app;