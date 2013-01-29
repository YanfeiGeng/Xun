goog.provide('xun.Cube');

xun.Cube = function(type, cubeScale, posScale, rowCol) {
	lime.Sprite.call(this);	

};
goog.inherits(xun.Cube, lime.Sprite);

xun.Cube.prototype.createCube = function(){
	
};

xun.Cube.prototype.getName = function(){
	return this.name;
};

xun.Cube.prototype.setName = function(name){
	this.name = name;
};