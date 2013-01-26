goog.provide('xun.Card');

xun.Card = function() {
	this.life = ''; //number, full is 1 
	this.attack = ''; //number, depends on different level
	this.exp = ''; //number, Will increase along with attack monster
	this.level = ''; //Number, related with exp
};

xun.Card.prototype.createCard = function(){
	//Get a new xun.Card object
	alert('Card Created!');
};

xun.Card.prototype.increaseLife = function(amount){
	this.life += amount;
};

xun.Card.prototype.dropLife = function(amount){
	this.life -= amount;
};

xun.Card.prototype.increaseLevel = function(targetLevel){
	this.level = targetLevel;
};

xun.Card.prototype.increaseExp = function(amount){
	this.exp += amount;
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