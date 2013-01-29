goog.provide('xun.Puzzle');

goog.require('xun.Cube');

var randomPos = {
	x : Math.floor(Math.random()*this.row),
	y : Math.floor(Math.random()*this.column)
}

xun.Puzzle = function() {
	lime.Sprite.call(this);

	this.column = xun.Stage.config.puzzle.column;
	this.row = xun.Stage.config.puzzle.row;
	
	this.init();
};
goog.inherits(xun.Puzzle, lime.Sprite);

xun.Puzzle.prototype.init = function(){
	this.cubes = [];	
	for(var x = 0; x < this.row; x++){
		this.cubes[x] = [];
		for(var y = 0; y < this.column; y++){
			var	cube = new xun.Cube(); 
			this.cubes[x][y] = cube;
			
			this.appendChild(cube);
		}
	}
};

xun.Puzzle.prototype.createPuzzle = function(){
	
};

xun.Puzzle.prototype.setName = function(name){
	this.name = name;
};

xun.Puzzle.prototype.getName = function(){
	return this.name;
}