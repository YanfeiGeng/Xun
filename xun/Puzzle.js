goog.provide('xun.Puzzle');

goog.require('xun.Cube');

var randomPos = {
	x : Math.floor(Math.random()*this.row),
	y : Math.floor(Math.random()*this.column)
}

xun.Puzzle = function() {
	lime.Sprite.call(this);
	this.name = '';
	this.column = xun.Stage.config.puzzle.column;
	this.row = xun.Stage.config.puzzle.row;
	this.cubesType = xun.Stage.config.puzzle.cubes;
	this.width = xun.Stage.config.puzzleWidth;
	this.height = xun.Stage.config.puzzleHieght;
	pos = 0;
	for(var x = 0; x < this.row; x++){
		for(var y = 0; y < this.column; y++){
			// var ref = this.cubesType[pos++]
			var ref = 'mask';
			var pos = {
				row : x+1,
				col : y+1
			};
			var cube = null;
			if(x == randomPos.x && y == randomPos.y){
				cube = new xun.Cube('enter', this.getCubeScale(), 
				this.getPosScale(x, y), pos);
			} else {
				cube = new xun.Cube(ref, this.getCubeScale(), 
				this.getPosScale(x, y), pos);
			}
			this.appendChild(cube);
		}
	}
	//1. collect the cubes
	this.cube = new xun.Cube();
};
goog.inherits(xun.Puzzle, lime.Sprite);

xun.Puzzle.prototype.getCubeScale = function(){
	var scale = {
		x : this.width / this.column,
		y : this.height / this.row
	};
	return scale;
};

xun.Puzzle.prototype.getPosScale = function(x, y){
	var config = xun.Stage.config;
	var scale = {
		y : (this.width/this.column)*x + config.offsetHeight,
		x : (this.height/this.row)*y + config.offsetWidth
	};
	return scale;
};

xun.Puzzle.prototype.createPuzzle = function(){
	
};

xun.Puzzle.prototype.setName = function(name){
	this.name = name;
};

xun.Puzzle.prototype.getName = function(){
	return this.name;
}