
module.exports = function () {
	this.objects = [];
    this.interval = 50;
    this.activated = false;
    this.samples = [];
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
}

function record_now(recorder) {
    recorder.samples.push(recorder.objects[0]);
    setTimeout(record_now, recorder.interval, recorder);
}
