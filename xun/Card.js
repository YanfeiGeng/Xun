goog.provide('Card');

Card = function() {
	this.life = ''; //number, full is 1 
	this.attack = ''; //number, depends on different level
	this.exp = ''; //number, Will increase along with attack monster
	this.level = ''; //Number, related with exp
};

Card.prototype.increaseLife = function(amount){
	this.life += amount;
};

Card.prototype.dropLife = function(amount){
	this.life -= amount;
};

Card.prototype.increaseLevel = function(targetLevel){
	this.level = targetLevel;
};

Card.prototype.increaseExp = function(amount){
	this.exp += amount;
};

Card.prototype.getLife = function(){
	return this.life;
};

Card.prototype.getExp = function(){
	return this.exp;
};

Card.prototype.getLevel = function(){
	return this.level;
};