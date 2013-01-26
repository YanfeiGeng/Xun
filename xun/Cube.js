goog.provide('xun.Cube');

xun.Cube = function() {
	this.name = '';
};

xun.Cube.prototype.createCube = function(){
	//Return single xun.Cube
	//Contains the inner object, randomly
	alert('Cube Created!');
};

xun.Cube.prototype.getName = function(){
	return this.name;
};

xun.Cube.prototype.setName = function(name){
	this.name = name;
};