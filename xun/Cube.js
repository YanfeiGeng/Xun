goog.provide('Cube');

Cube = function() {
	this.name = '';
};

Cube.prototype.getName = function(){
	return this.name;
};

Cube.prototype.setName = function(name){
	this.name = name;
};