goog.provide('xun.Stage');

goog.require('xun.Puzzle');
goog.require('xun.Card');



xun.Stage = function() {
	lime.Sprite.call(this);
	this.name = '';
	//1. Create Puzzle
	this.puzzle = new xun.Puzzle();
	//2. Create Card
	this.card = new xun.Card();
	xun.Stage.config.card = this.card;
	this.appendChild(this.puzzle);
	this.appendChild(this.card);
	return this;
};
goog.inherits(xun.Stage, lime.Sprite);

xun.Stage.config = {
	width:1024,
	height:768,
    puzzle: {
        row: 3,
        column : 3,
        cubes: [
        	1,2,3,
        	2,1,3,
        	4,3,2
        ]
    },
    card: null
};

xun.Stage.prototype.getName = function(){
	return this.name;
};

xun.Stage.prototype.setName = function(name){
	this.name = name;
};