goog.provide('xun.Cube');

goog.require('xun.Monster');

xun.Cube = function(type) {
	lime.Sprite.call(this);

	this.type = type;
	this.isOpen = false;
	this.isMasked = true;
	this.isEmpty = false;
	this.isLocked = false;
	this.init();
};
goog.inherits(xun.Cube, lime.Sprite);

xun.Cube.prototype.init = function(){
	if (this.type === 'orc' || this.type === 'skeleton' || this.type === 'bat')
		this.content = new xun.Monster(this.type);
	else
		this.content = new lime.Sprite().setFill('assets/' + this.type + '.png').setPosition(0, 0).setAnchorPoint(0, 0);
	this.box = new lime.Sprite().setFill('assets/block_yes' + (Math.floor(Math.random()*3) + 1) + '.png')
		.setPosition(0, 0).setAnchorPoint(0, 0);
	this.mask = new lime.Sprite().setFill('assets/mask.png').setPosition(-23, -23).setAnchorPoint(0, 0);
	
	this.appendChild(this.content);
	this.appendChild(this.box);
	this.appendChild(this.mask);
};

xun.Cube.prototype.getType = function(){
	return this.type;
};

xun.Cube.prototype.getContent = function(){
	return this.content;
};

xun.Cube.prototype.isOpen = function(){
	return this.isOpen;
};

xun.Cube.prototype.isMasked = function(){
	return this.isMasked;
};

xun.Cube.prototype.isEmpty = function(){
	return this.isEmpty;
};

xun.Cube.prototype.isLocked = function(){
	return this.isLocked;
};

xun.Cube.prototype.openBox = function(){
	this.removeChild(this.box);
	this.isOpen = true;
};

xun.Cube.prototype.removeMask = function(){
	this.removeChild(this.mask);
	this.isMasked = false;
};

xun.Cube.prototype.lockCube = function(){
	if (!this.isLocked)
	{
		this.lock = new lime.Sprite().setFill('assets/block_no.png').setPosition(0, 0).setAnchorPoint(0, 0);
		this.appendChild(this.lock);
		this.isLocked = true;
	}
};

xun.Cube.prototype.unlockCube = function(){
	this.removeChild(this.lock);
	this.isLocked = false;
};

xun.Cube.prototype.removeContent = function(){
	this.removeChild(this.content);
	this.isEmpty = true;
};

xun.Cube.prototype.getName = function(){
	return this.name;
};

xun.Cube.prototype.setName = function(name){
	this.name = name;
};