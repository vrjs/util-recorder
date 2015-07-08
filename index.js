
module.exports = function () {
	this.objects = [];
    this.active = function () {
    	return false;
    }, 
    this.tracked = function () {
    	return this.objects;
    }, 
    this.track = function (obj) {
    	this.objects.push(obj);
    	console.log(this.objects.length)
    }
}
