goog.provide('xun.Puzzle');

goog.require('xun.Cube');

xun.Puzzle = function() {
	lime.Sprite.call(this);
	this.name = '';
	this.column = xun.Stage.config.puzzle.column;
	this.row = xun.Stage.config.puzzle.row;
	this.cubesType = xun.Stage.config.puzzle.cubes;
	pos = 0;
	for(var x = 0; x < this.row; x++){
		for(var y = 0; y < this.column; y++){
			var ref = this.cubesType[pos++];
			var posX = 100*x;
			var posY = 90*y;
			var cube = new xun.Cube(ref, 
				xun.Stage.config.cubeWidth, xun.Stage.config.cubeHeight,
				posX, posY);
			this.appendChild(cube);
			console.log('Append: ' + posX + ", " + posY);
		}
	}
	//1. collect the cubes
	this.cube = new xun.Cube();
};
goog.inherits(xun.Puzzle, lime.Sprite);

xun.Puzzle.prototype.createPuzzle = function(){
	
};

xun.Puzzle.prototype.setName = function(name){
	this.name = name;
};

xun.Puzzle.prototype.getName = function(){
	return this.name;
}