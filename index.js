
module.exports = function () {
	this.objects = [];
    this.active = function () {
    	return false;
    }, 
    this.tracked = function () {
    	return this.objects;
    }
}
