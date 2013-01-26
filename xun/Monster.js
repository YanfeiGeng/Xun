goog.provide('xun.Monster');

xun.Monster = function() {
	this.life = '';
	this.attack = '';
	this.type = '';
};

xun.Monster.prototype.getLife = function(){
	return this.life;
};

xun.Monster.prototype.setLife = function(life){
	this.life = life;
};

xun.Monster.prototype.getType = function(){
	return this.type;
};

xun.Monster.prototype.setType = function(type){
	this.type = type;
};

xun.Monster.prototype.getAttack = function(){
	return this.attack;
};

xun.Monster.prototype.setAttack = function(attack){
	this.attack = attack;
};

xun.Monster.prototype.dropLife = function(amount){
	this.life -= amount;
}