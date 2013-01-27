goog.provide('xun.Card');

goog.require('lime.Label');

xun.Card = function() {
	lime.Sprite.call(this);
	this.life = 100; //number, full is 1 
	this.attack = 100; //number, depends on different level
	this.exp = 0; //number, Will increase along with attack monster
	this.level = 0; //Number, related with exp
	
	this.setSize(1000, 200).setFill(255, 255, 0).setPosition(0, 500);
	this.refresh();
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
	refresh();
};

xun.Card.prototype.dropLife = function(amount){
	this.life -= amount;
	refresh();
};

xun.Card.prototype.increaseLevel = function(targetLevel){
	this.level = targetLevel;
	refresh();
};

xun.Card.prototype.increaseExp = function(amount){
	this.exp += amount;
	refresh();
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

xun.Card.prototype.refresh = function(){
	this.removeAllChildren();
	
	this.lifeLabel = new lime.Label(this.life).setSize(100, 100).setPosition(100, 10).setAnchorPoint(0, 0);
	this.attackLabel = new lime.Label(this.attack).setSize(100, 100).setPosition(50, 10).setAnchorPoint(0, 0);
	this.expLabel = new lime.Label(this.exp).setSize(100, 100).setPosition(20, 10).setAnchorPoint(0, 0);
	this.card = new lime.Sprite().setFill('assets/player01.png').setPosition(634, 0).setAnchorPoint(0, 0);
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
	this.appendChild(this.card);
	this.appendChild(this.lifeLabel);
	this.appendChild(this.attackLabel);
	this.appendChild(this.expLabel);	
		
	this.setPosition(0, 1704).setSize(1110, 200).setAnchorPoint(0, 0).setFill('assets/mianban02.png');
};