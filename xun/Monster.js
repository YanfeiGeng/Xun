goog.provide('Monster');

Monster = function() {
	this.life = '';
	this.attack = '';
	this.type = '';
};

Monster.prototype.getLife = function(){
	return this.life;
};

Monster.prototype.setLife = function(life){
	this.life = life;
};

Monster.prototype.getType = function(){
	return this.type;
};

Monster.prototype.setType = function(type){
	this.type = type;
};

Monster.prototype.getAttack = function(){
	return this.attack;
};

Monster.prototype.setAttack = function(attack){
	this.attack = attack;
};

Monster.prototype.dropLife = function(amount){
	this.life -= amount;
}