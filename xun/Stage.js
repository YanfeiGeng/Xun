goog.provide('xun.Stage');

goog.require('xun.Puzzle');
goog.require('xun.CardBar');
goog.require('xun.Card');

xun.Stage = function() {
	lime.Sprite.call(this);
	this.name = '';
	//1. Create Puzzle
	this.puzzle = new xun.Puzzle();
	//2. Create Card
	this.cards = new Array();
	var card = new xun.Card('player01');
	var card2 = new xun.Card('player02');
	this.cardbar = new xun.CardBar().setPosition(0, 1704).setAnchorPoint(0, 0);
	this.cardbar.addCard(card);
	this.cardbar.addCard(card2);
	this.cardbar.selectCard(card);
	//3. Background image
	this.appendChild(this.BgImage());
	this.appendChild(this.puzzle);
	this.appendChild(this.cardbar);
	return this;
};
goog.inherits(xun.Stage, lime.Sprite);

xun.Stage.config = {
	width:1536,
	height:2048,
	puzzleWidth:272*5,
	puzzleHieght:272*6,
	offsetWidth:85,
	offsetHeight:110,
    puzzle: {
        row: 6,
        column : 5,
        cubes: [
        	'coin','orc','skeleton','coin','blood',
        	'coin','skeleton','skeleton','coin','blood',
        	'coin','skeleton','orc','skeleton','skeleton',
        	'skeleton','blood','blood','coin','blood',
        	'coin','orc','orc','orc','blood',
        	'coin','blood','skeleton','coin','blood'
        ]
    },
    card: null
};

xun.Stage.prototype.BgImage = function(){
	var config = xun.Stage.config;
	var bgImg = new lime.Sprite;
	bgImg.setFill('assets/background.png');
	bgImg.setPosition(config.offsetWidth, config.offsetHeight);
	bgImg.setAnchorPoint(0, 0);

	var allBgImg = new lime.Sprite;
	allBgImg.setFill('assets/background02.png');
	allBgImg.setPosition(0, 0);
	allBgImg.setAnchorPoint(0, 0);

	var layer = new lime.Layer();
	layer.appendChild(allBgImg);
	layer.appendChild(bgImg);
	return layer;
};


xun.Stage.prototype.getName = function(){
	return this.name;
};

xun.Stage.prototype.setName = function(name){
	this.name = name;
};