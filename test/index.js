var should = require('chai').should();
var recorder = require('../index');

var r = new recorder();

describe ('recorder', function() {
    it ('returns false for active if no activated', function() {
        r.active().should.equal(false);
    });
})