var should = require('chai').should();
var sinon = require('sinon');
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
});

describe('recorder samples', function() {
    var clock;
    beforeEach(function() {
        clock = sinon.useFakeTimers();
    });
    afterEach(function() {
        clock = clock.restore();
    });
    it ("should record one sample per interval", function() {
        r = new recorder();
        r.interval = 50;
        r.track({name:'test', 
            position: {x:0, y:0, z:0}, 
            orientation:{x:0, y:0, z:0, w:1 }});
        r.start()
        clock.tick(r.interval+1);
        r.samples.length.should.equal(2); // once on start, once after 50ms
    });
})