const expect = require('expect');

describe('App', function(){
    it('Should call the spy correctly', function(){
        var spy = expect.createSpy();
        spy('Antonio',61);
        expect(spy).toHaveBeenCalled('Antonio',61);
    });
});