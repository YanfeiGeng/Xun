goog.provide('xun.Cube');

goog.require('xun.H_Spirite');

xun.Cube = function(type, cubeScale, posScale) {
	lime.Sprite.call(this);
	//Return single xun.Cube
	//Contains the inner object, randomly

	var cardCallback = function(amount){
		//1. Drop blood of the card
		var card = xun.Stage.config.card;
		card.dropLife(amount);
		cardu
		alert('Blood dropped:' + amount);
	}

	var spriteCreater = new xun.H_Spirite();
	if(cubeScale && posScale){
		this.appendChild(spriteCreater.Create('block', posScale, cubeScale, cardCallback));
	}

	
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