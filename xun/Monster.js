goog.provide('xun.Monster');

xun.Monster = function(type) {
	lime.Sprite.call(this);

	this.life = 60;
	this.attack = 3;
	this.exp = 0;
	this.type = type;	
	
	this.init();
};
goog.inherits(xun.Monster, lime.Sprite);

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

xun.Monster.prototype.getExp = function(){
	return this.exp;
};

xun.Monster.prototype.setExp = function(exp){
	this.exp = exp;
};

xun.Monster.prototype.dropLife = function(amount){
	this.life -= amount;
	this.refresh();
}


xun.Monster.prototype.init = function(){
	var layer = new lime.Layer();
	var card = new lime.Sprite().setFill('assets/' + this.type + '.png').setPosition(0, 0).setAnchorPoint(0, 0);
	this.lifeLabel = new lime.Label(this.life).setPosition(80, 210).setAnchorPoint(0, 0)
		.setFontColor("#DDDDDD").setFontSize(40);
	this.attackLabel = new lime.Label(this.attack).setPosition(194, 210).setAnchorPoint(0, 0)
		.setFontColor("#DDDDDD").setFontSize(40);
	var expbg = new lime.Sprite().setFill("#fff").setSize(59, 59).setPosition(17, 20).setAnchorPoint(0, 0);
	this.expLabel = new lime.Label(this.exp).setPosition(34, 25).setAnchorPoint(0, 0)
		.setFontColor("#DDDDDD").setFontSize(40);

	layer.appendChild(card);
	layer.appendChild(this.lifeLabel);
	layer.appendChild(this.attackLabel);
	layer.appendChild(this.expLabel);		
	
	this.appendChild(layer);
};

xun.Monster.prototype.refresh = function(){
	this.lifeLabel.setText(this.life);
	this.attackLabel.setText(this.attack);
	this.expLabel.setText(this.exp);
};