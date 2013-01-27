goog.provide('xun.CardBar');

goog.require('lime.Label');

xun.CardBar = function() {
	lime.Sprite.call(this);
	
	this.cards = new Array();
	this.position = [558, 279, 837, 0, 1116];
	this.selectedCard = null;

	//this.setPosition(0, 1704).setAnchorPoint(0, 0).setFill('assets/mianban02.png');
	this.setAnchorPoint(0, 0).setFill('assets/mianban02.png');
	this.layer1 = new lime.Layer().setAnchorPoint(0, 0).setPosition(0, 0);
	this.layer2 = new lime.Layer().setAnchorPoint(0, 0).setPosition(0, 0);
	this.appendChild(this.layer1);
	this.appendChild(this.layer2);
	
	this.selectMode = new lime.Sprite().setAnchorPoint(0, 0).setPosition(837 - 342, -32).setFill('assets/kuang.png');
	this.layer2.appendChild(this.selectMode);
	
	goog.events.listen(this, ['mousedown', 'touchstart'], function(e){
		var i = 0;
		for(var card in this.cards){
			if(this.cards[i].hitTest(e))
			{
				this.selectCard(this.cards[i]);
				//alert(i);
			}
			i++;
		}
	});	
	
};

goog.inherits(xun.CardBar, lime.Sprite);

xun.CardBar.prototype.addCard = function(card){
	this.cards.push(card);
	this.layer1.appendChild(card);
	this.refresh();
};

xun.CardBar.prototype.selectCard = function(card){
	this.selectedCard = card;
	this.refresh();
};

xun.CardBar.prototype.getSelectCard = function(card){
	return this.selectedCard;
};

xun.CardBar.prototype.refresh = function(){
	var i = 0;
	for(var card in this.cards){
		this.cards[i].setPosition(this.position[i], 28).setAnchorPoint(0, 0);
		i++;
	}	
	
	if(this.selectedCard != null) {
		var pos = this.selectedCard.getPosition();
		this.selectMode.setPosition(pos.x - 63, pos.y - 60);
	}
};

