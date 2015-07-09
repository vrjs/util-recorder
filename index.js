
module.exports = function () {
	this.objects = [];
    this.interval = 50;
    this.activated = false;
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
    }
}
