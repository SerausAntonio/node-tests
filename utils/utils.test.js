
const expect = require('expect');

const utils = require('./utils');

describe('utils',function(){

    describe('#add', function(){
        it('should add two numbers', function() {
            var res = utils.add(33,11);
          
            expect(res).toBe(44);             //.toBeAn("number");
        
            // if (res !== 44){
            //     throw new Error(`Expected 44, but got ${res}`);
            // }
        });
        
    });
});


it('should async add two numbers',function(done){
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7);
        done();
    })
})

it('should calculate a square', function() {
    var res = utils.square(12);

    expect(res).toBe(144);
    // if (res !== 144){
    //     throw new Error(`answer should be 144 but was ${res}.`);
    // }
});

it('should expect some values', function(){
//    expect(12).toBe(11);                        //.toBeAn('number');

   // expect({name: 'Antonio'}).toEqual({name: 'Antonio'});
   // expect([2,3,4]).toInclude(5);
    expect({
        name: 'Antonio',
        age: 61,
        location: 'Amsterdam'
    }).toInclude({age: 61});

});

it('should set firstName and lastName', function(){
    var user = {location: 'Amsterdam', age: 61};
    var res = utils.setName(user, 'Antonio Seraus');

    expect(res).toInclude({
        firstName: 'Antonio',
        lastName: 'Seraus'
    })
})