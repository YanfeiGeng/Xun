goog.provide('xun.Puzzle');

goog.require('xun.Cube');

xun.Puzzle = function() {
	this.name = '';
	//1. collect the cubes
	var cube = new xun.Cube(100, 200);
	alert('Puzzle Created!');
};

xun.Puzzle.prototype.createPuzzle = function(){
	
};

xun.Puzzle.prototype.setName = function(name){
	this.name = name;
};

xun.Puzzle.prototype.getName = function(){
	return this.name;
}