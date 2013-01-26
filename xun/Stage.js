goog.provide('xun.Stage');

goog.require('xun.Puzzle');
goog.require('xun.Card');

xun.Stage = function() {
	this.name = '';
	//1. Create Puzzle
	var puzzle = new xun.Puzzle();
	//2. Create Card
	var card = new xun.Card();
	alert('Create Stage!');
};

xun.Stage.prototype.createStage = function(){

};

xun.Stage.prototype.getName = function(){
	return this.name;
};

xun.Stage.prototype.setName = function(name){
	this.name = name;
};