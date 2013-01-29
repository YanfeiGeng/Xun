goog.provide('xun.Cube');

xun.Cube = function(type) {
	lime.Sprite.call(this);

	this.type = type;
	this.init();
};
goog.inherits(xun.Cube, lime.Sprite);

xun.Cube.prototype.init = function(){
	this.content = new lime.Sprite().setFill('assets/' + this.type + '.png').setPosition(0, 0).setAnchorPoint(0, 0);
	this.box = new lime.Sprite().setFill('assets/block_yes.png').setPosition(0, 0).setAnchorPoint(0, 0);
	this.mask = new lime.Sprite().setFill('assets/mask.png').setPosition(-23, -23).setAnchorPoint(0, 0);
	
	this.appendChild(this.content);
	this.appendChild(this.box);
	this.appendChild(this.mask);
};

xun.Cube.prototype.openBox = function(){
	this.removeChild(this.box);
};

xun.Cube.prototype.removeMask = function(){
	this.removeChild(this.mask);
};

xun.Cube.prototype.createCube = function(){
	
};

xun.Cube.prototype.getName = function(){
	return this.name;
};

xun.Cube.prototype.setName = function(name){
	this.name = name;
};