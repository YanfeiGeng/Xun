goog.provide('xun.Cube');

xun.Cube = function(width, height) {
	//Return single xun.Cube
	//Contains the inner object, randomly
	this.width = width;
	this.height = height;
	alert('Cube Created!');
};

xun.Cube.prototype.createCube = function(){
	
};

xun.Cube.prototype.getName = function(){
	return this.name;
};

xun.Cube.prototype.setName = function(name){
	this.name = name;
};