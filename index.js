var Datastore = require('nedb')

module.exports = function () {
	this.objects = [];
    this.interval = 50;
    this.activated = false;
    this.internal_samples = [];
    this.active = function () {
    	return this.activated;
    }, 
    this.tracked = function () {
    	return this.objects;
    }, 
    this.track = function (obj) {
    	this.objects.push(obj);
    	console.log(this.objects.length)
    }
    this.start = function () {
        this.activated = true;
        record_now(this);
    }
    this.samples = function() {
        return this.internal_samples;
    }
    this.record_sample = function() {
        // id
        // name
        // local position
        // local orientation (quaternion)
        // world position
        // world orientation (quaternion)
        // current time
        // sample id

        this.internal_samples.push(this.objects[0]);
    }

    this.data = new Datastore({inMemoryOnly:true});
}

function record_now(recorder) {
    recorder.record_sample()
    setTimeout(record_now, recorder.interval, recorder);
}


