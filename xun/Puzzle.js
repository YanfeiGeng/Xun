goog.provide('xun.Puzzle');

goog.require('xun.Cube');

xun.Puzzle = function() {
	lime.Sprite.call(this);
	this.name = '';
	this.column = xun.Stage.config.puzzle.column;
	this.row = xun.Stage.config.puzzle.row;
	this.cubesType = xun.Stage.config.puzzle.cubes;
	this.width = xun.Stage.config.width;
	this.height = xun.Stage.config.height;
	pos = 0;
	for(var x = 0; x < this.row; x++){
		for(var y = 0; y < this.column; y++){
			var ref = this.cubesType[pos++];
			var cube = new xun.Cube(ref, this.getCubeScale(), 
				this.getPosScale(x, y));
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
	var scale = {
		x : (this.width/this.column)*x,
		y : (this.height/this.row)*y
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