goog.provide('xun.CardBar');

goog.require('lime.Label');

xun.CardBar = function() {
	lime.Sprite.call(this);
	
	this.cards = new Array();
	this.position = [558, 279, 837, 0, 1116];
	this.selectedCard = null;

	//this.setPosition(0, 1704).setAnchorPoint(0, 0).setFill('assets/mianban02.png');
	this.setAnchorPoint(0, 0).setFill('assets/mianban02.png');
	
	goog.events.listen(this, ['mousedown', 'touchstart'], function(){
		//this.selectCard(10);
	});	
	
};

goog.inherits(xun.CardBar, lime.Sprite);

xun.CardBar.prototype.addCard = function(card){
	this.cards.push(card);
	this.appendChild(card);
	this.refresh();
};

xun.CardBar.prototype.selectCard = function(card){
	this.cards.push(card);
	this.selectedCard = card;
	this.refresh();
};

xun.CardBar.prototype.refresh = function(){
	var i = 0;
	for(var card in this.cards){
		this.cards[i].setPosition(this.position[i], 28).setAnchorPoint(0, 0);
		i++;
	}
};