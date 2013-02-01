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
	this.cubeContents = xun.Stage.config.puzzle.cubes;
	this.selectedCard = null;
	this.firstCube = true;
	
	this.init();
	
	goog.events.listen(this, ['mousedown', 'touchstart'], function(e){
		//alert("Hello Puzzle:" + e.position.x + " " + e.position.y);
		for(var x = 0; x < this.column; x++){
			for(var y = 0; y < this.row; y++){
				var cube = this.cubes[x][y];
				if(cube.hitTest(e))
				{
					if (cube.isLocked)
						return;
				
					if (cube.isMasked)
					{
						if (this.isNearCubesOpen(x, y) || this.firstCube)
						{
							this.firstCube = false;
							cube.removeMask();
							this.removeNearCubesMasks(x, y);
						}
						return;
					}
					
					if(!cube.isOpen)
					{
						cube.openBox();
						this.removeNearCubesMasks(x, y);
						
						var type = cube.getType();
						switch(type)
						{
							case 'coin':
							case 'blood':
							case 'sword':
							case 'enter':
								break;
							default:
								this.lockCubes();
						}

						return;
					}
					
					if(cube.isOpen && !cube.isEmpty && !cube.isLocked)
					{
						var type = cube.getType();
						switch(type)
						{
							case 'coin':
								cube.removeContent();
								break;
							case 'blood':
								this.selectedCard.increaseLife(10);
								cube.removeContent();
								break;
							case 'sword':
								this.selectedCard.increaseAttack(1);
								cube.removeContent();
								break;
							case 'enter':
								alert('You win');
								break;
							default:
								var monster = cube.getContent();
								monster.dropLife(this.selectedCard.getAttack() * Math.floor(Math.random()*11));
								this.selectedCard.dropLife(monster.getAttack() * Math.floor(Math.random()*11));
								if (monster.getLife() <= 0)
								{
									cube.removeContent();
									this.unlockCubes();
								}
						}
						return;
					}
				}
			}
		}
	});	
};
goog.inherits(xun.Puzzle, lime.Sprite);

xun.Puzzle.prototype.init = function(){
	this.cubes = [];	
	for(var x = 0; x < this.column; x++){
		this.cubes[x] = [];
		for(var y = 0; y < this.row; y++){
			var	cube = new xun.Cube(this.cubeContents[x + this.column * y])
				.setPosition(x * 273, y * 273).setSize(273, 273).setAnchorPoint(0, 0); 
			this.cubes[x][y] = cube;
			
			this.appendChild(cube);
		}
	}
	this.setSize(this.column * 273, this.row * 273);
};

xun.Puzzle.prototype.getNearCubes = function(x, y){
	var nearCubes = new Array();
	
	if (x-1 >= 0)
		nearCubes.push(this.cubes[x-1][y]);
	if (x+1 < this.column)
		nearCubes.push(this.cubes[x+1][y]);
	if (y-1 >= 0)
		nearCubes.push(this.cubes[x][y-1]);
	if (y+1 < this.row)
		nearCubes.push(this.cubes[x][y+1]);
		
	return nearCubes;
};

xun.Puzzle.prototype.removeNearCubesMasks = function(x, y){
	var nearCubes = this.getNearCubes(x, y);
	for(var i = 0; i < nearCubes.length; i++)
	{
		nearCubes[i].removeMask();
	}
};

xun.Puzzle.prototype.isNearCubesOpen = function(x, y){
	var nearCubes = this.getNearCubes(x, y);
	for(var i = 0; i < nearCubes.length; i++)
	{
		if(nearCubes[i].isOpen)
		{
			return true;
		}
	}
	return false;
};

xun.Puzzle.prototype.getClosedAndUnMaskedCubes = function(){
	var needcubes = new Array();
	
	for(var x = 0; x < this.column; x++){
		for(var y = 0; y < this.row; y++){
			var cube = this.cubes[x][y];
			if (!cube.isOpen && !cube.isMasked)
				needcubes.push(cube);
		}
	}
	return needcubes;
};

xun.Puzzle.prototype.lockCubes = function(){
	var cubes = this.getClosedAndUnMaskedCubes();
	for(var i = 0; i < cubes.length; i++)
	{
		cubes[i].lockCube();
	}
};

xun.Puzzle.prototype.unlockCubes = function(){
	var cubes = this.getClosedAndUnMaskedCubes();
	for(var i = 0; i < cubes.length; i++)
	{
		cubes[i].unlockCube();
	}
};

xun.Puzzle.prototype.selectCard = function(card){
	this.selectedCard = card;
};

xun.Puzzle.prototype.setName = function(name){
	this.name = name;
};

xun.Puzzle.prototype.getName = function(){
	return this.name;
}