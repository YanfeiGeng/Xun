goog.provide('xun.Cube');

goog.require('xun.H_Spirite');

xun.Cube = function(type, width, height, posx, posy) {
	lime.Sprite.call(this);
	//Return single xun.Cube
	//Contains the inner object, randomly

	// this.setRenderer(lime.Renderer.DOM)
	//     .setFill('assets/background.jpg')
	//     .setPosition(posx, posy)
	//     .setSize(width, height);
	var spriteCreater = new xun.H_Spirite();
	var position = {
		x : 100,
		y : 50
	};
	var scale = {
		x : 100,
		y : 50
	};
	this.appendChild(spriteCreater.Create('block',position, scale));
	// alert('Cube Created!');
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