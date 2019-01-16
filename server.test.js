const request = require('express');

var app = require('./server').app;

it('should return hello world response',function(done){
    request(app)
    .get('/')
   // .expect.status(200).('Hello world!')
    .expect(404)
    .expect({
        error: 'Page not found.'
    })

   .end(done);
});