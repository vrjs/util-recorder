var should = require('chai').should();
var recorder = require('../index');

var r = new recorder();

describe ('recorder', function() {
    it ('returns false for active if not activated', function() {
        r.active().should.equal(false);
    });
    it ('returns true for active after activated', function() {
        r.start();
        r.active().should.equal(true);
    });
    it ('starts with no objects being tracked', function (){
    	r.tracked().length.should.equal(0);
    });
    it ('accepts new object via track', function() {
    	r1 = new recorder()
    	r1.track({name:'test'});
    	r1.tracked().length.should.equal(1);
    })
})