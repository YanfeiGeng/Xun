goog.provide('xun.Card');

goog.require('lime.Label');

xun.Card = function() {
	lime.Sprite.call(this);
	this.life = 60; //number, full is 1 
	this.attack = 3; //number, depends on different level
	this.exp = 0; //number, Will increase along with attack monster
	this.level = 0; //Number, related with exp
	
	this.init();
};
goog.inherits(xun.Card, lime.Sprite);

xun.Card.config = {
	cardWidth:60,
	cardHeight:80,
	initLift:100,
	initExp: 0,
	initAttack:100,
	initLevel:0
};

xun.Card.prototype.createCard = function(){
	//Get a new xun.Card object
};

xun.Card.prototype.increaseLife = function(amount){
	this.life += amount;
	this.refresh();
};

xun.Card.prototype.dropLife = function(amount){
	this.life -= amount;
	this.refresh();
};

xun.Card.prototype.increaseLevel = function(targetLevel){
	this.level = targetLevel;
	this.refresh();
};

xun.Card.prototype.increaseExp = function(amount){
	this.exp += amount;
	this.refresh();
};

xun.Card.prototype.getLife = function(){
	return this.life;
};

xun.Card.prototype.getExp = function(){
	return this.exp;
};

xun.Card.prototype.getLevel = function(){
	return this.level;
};

xun.Card.prototype.init = function(){
	var layer = new lime.Layer();
	var card = new lime.Sprite().setFill('assets/player01.png').setPosition(0, 0).setAnchorPoint(0, 0);
	this.lifeLabel = new lime.Label(this.life).setPosition(80, 250).setAnchorPoint(0, 0)
		.setFontColor("#DDDDDD").setFontSize(40);
	this.attackLabel = new lime.Label(this.attack).setPosition(194, 250).setAnchorPoint(0, 0)
		.setFontColor("#DDDDDD").setFontSize(40);
	var expbg = new lime.Sprite().setFill("#fff").setSize(59, 59).setPosition(17, 20).setAnchorPoint(0, 0);
	this.expLabel = new lime.Label(this.exp).setPosition(34, 25).setAnchorPoint(0, 0)
		.setFontColor("#DDDDDD").setFontSize(40);
	//this.otherCard = new lime.
	
	var spriteCreater = new xun.H_Spirite();
	var position = {
		x : 100,
		y : 50
	};
	var scale = {
		x : 100,
		y : 50
	};
	//this.appendChild(spriteCreater.Create('card',position, scale));
	layer.appendChild(card);
	layer.appendChild(this.lifeLabel);
	layer.appendChild(this.attackLabel);
	//layer.appendChild(expbg);
	layer.appendChild(this.expLabel);	
		
	layer.setPosition(634, 24).setAnchorPoint(0, 0);
	
	this.appendChild(layer);
	this.setPosition(0, 1704).setAnchorPoint(0, 0).setFill('assets/mianban02.png');
};

xun.Card.prototype.refresh = function(){
	this.lifeLabel.setText(this.life);
	this.attackLabel.setText(this.attack);
	this.expLabel.setText(this.exp);
};