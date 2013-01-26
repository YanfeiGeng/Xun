goog.provide('Puzzle');

Puzzle = function() {
	this.name = '';
};

Puzzle.prototype.setName = function(name){
	this.name = name;
};

Puzzle.prototype.getName = function(){
	return this.name;
}