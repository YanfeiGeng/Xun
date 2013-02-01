goog.provide('xun.Card');

goog.require('lime.Label');

xun.Card = function(type) {
	lime.Sprite.call(this);
	this.life = 60; //number, full is 1 
	this.attack = 3; //number, depends on different level
	this.exp = 0; //number, Will increase along with attack monster
	this.level = 0; //Number, related with exp
	this.type = type;
	
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
	
	if (this.life <= 0)
	{
		this.life = 0;
		this.attack = 0;
	}
	this.refresh();
};

xun.Card.prototype.increaseAttack = function(amount){
	this.attack += amount;
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

xun.Card.prototype.getAttack = function(){
	return this.attack;
};


xun.Card.prototype.getExp = function(){
	return this.exp;
};

xun.Card.prototype.getLevel = function(){
	return this.level;
};

xun.Card.prototype.init = function(){
	var layer = new lime.Layer();
	var card = new lime.Sprite().setFill('assets/' + this.type + '.png').setPosition(0, 0).setAnchorPoint(0, 0);
	this.lifeLabel = new lime.Label(this.life).setPosition(80, 254).setAnchorPoint(0, 0)
		.setFontColor("#DDDDDD").setFontSize(40);
	this.attackLabel = new lime.Label(this.attack).setPosition(194, 254).setAnchorPoint(0, 0)
		.setFontColor("#DDDDDD").setFontSize(40);
	var expbg = new lime.Sprite().setFill("#fff").setSize(59, 59).setPosition(17, 20).setAnchorPoint(0, 0);
	this.expLabel = new lime.Label(this.exp).setPosition(34, 25).setAnchorPoint(0, 0)
		.setFontColor("#DDDDDD").setFontSize(40);
	
	layer.appendChild(card);
	layer.appendChild(this.lifeLabel);
	layer.appendChild(this.attackLabel);
	layer.appendChild(this.expLabel);	
		
	layer.setAnchorPoint(0, 0);
	
	this.appendChild(layer);
	this.setSize(279, 340);
};

xun.Card.prototype.refresh = function(){
	this.lifeLabel.setText(this.life);
	this.attackLabel.setText(this.attack);
	this.expLabel.setText(this.exp);
};