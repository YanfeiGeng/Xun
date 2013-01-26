goog.provide('xun.Puzzle');

goog.require('xun.Cube');

xun.Puzzle = function() {
	this.name = '';
};

xun.Puzzle.prototype.createPuzzle = function(){
	//1. collect the cubes
	var cubes = new xun.Cube();
	cubes.createCube();
	alert('Puzzle Created!');
};

xun.Puzzle.prototype.setName = function(name){
	this.name = name;
};

xun.Puzzle.prototype.getName = function(){
	return this.name;
}