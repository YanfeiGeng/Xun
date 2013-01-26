goog.provide('xun.Stage');

goog.require('xun.Puzzle');
goog.require('xun.Card');

xun.Stage = function() {
	this.name = '';
};

xun.Stage.prototype.createStage = function(){
	//1. Create Puzzle
	var puzzle = new xun.Puzzle();
	puzzle.createPuzzle();
	//2. Create Card
	var card = new xun.Card();
	card.createCard();
	alert('Create Stage!');

};

xun.Stage.prototype.getName = function(){
	return this.name;
};

xun.Stage.prototype.setName = function(name){
	this.name = name;
};