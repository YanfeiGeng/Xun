goog.provide('xun.Cube');

goog.require('xun.H_Spirite');

var getScale = function(rowCol){
	var config = xun.Stage.config;
	var scale = {
		y : (config.puzzleWidth/config.puzzle.column)*rowCol.x + config.offsetHeight,
		x : (config.puzzleHieght/config.puzzle.row)*rowCol.y + config.offsetWidth
	};
	return scale;
};

var getIndexByPos = function(row, col){
	return row*xun.Stage.config.puzzle.column + col;
}

var getEnabledCubes = function(rowCol){
	//1,2
	var row = rowCol.row;
	var col = rowCol.col;
	var arry = new Array();

	//Top
	arry.push({
		x:row-1,
		y:col
	});

	//Right
	arry.push({
		x:row,
		y:col+1
	});
	//Bottom
	arry.push({
		x:row+1,
		y:col
	});
	//Left
	arry.push({
		x:row,
		y:col-1
	});
	return arry;
}

var executer = function(type, innerObj){
	var card = xun.Stage.config.card;
	if(type != 'enter'){
		//Remove the inner object
		innerObj.getParent().setSize(0,0);
		innerObj.getParent().removeAllChildren();
		// innerObj.getParent().removeAllChildren();
		switch(type){
			case 'blood':
				card.increaseLife(10);
				break;
			case 'orc':
			case 'skeleton':
				card.dropLife(10);
				break;
		}
	}
}

var updateCube = function(amount,singleCb, cube, rowCol){
	//1. Drop blood of the card
	if(cube && singleCb && amount){
		// cube.removeAllChildren();
		// var parent = singleCb.getParent();
		// if(parent){
		// 	parent.removeAllChildren();
		// }
		var index = getIndexByPos(rowCol.row-1, rowCol.col-1);

		var type = xun.Stage.config.puzzle.cubes[index];
		var spriteCreater = new xun.H_Spirite();
		var posScale = getScale({
			x:rowCol.row-1,
			y:rowCol.col-1
		});
		// alert(posScale.x + ', ' + posScale.y);
		var innerObj = spriteCreater.CreateSprite(type, posScale, null);
		cube.getParent().appendChild(innerObj);
		var showBg = function(obj){
			if(obj){
				executer(type, obj);
			}
		}
		var callbackBg = function(){
			showBg(innerObj);
		}
		goog.events.listen(innerObj, ['mousedown', 'touchstart'], callbackBg);
	}
}

var cubeMaskArray = new Array();

//Get index by the row col
var getIndexByRowCol = function(rowCol){
	var index = rowCol.x * xun.Stage.config.puzzle.column + rowCol.y - 1;
	return cubeMaskArray[index];
}

//Enable the mask after click on the cube
var enableMask = function(rowCol,orignCube,cube, scale){
	// alert((rowCol.row+1) + ', ' + (rowCol.col+1));
	var targets = getEnabledCubes(rowCol);
	var count = 1;

	var spriteCreater = new xun.H_Spirite();
	if(orignCube){
		orignCube.setSize(0,0);
		var clickedCubeScale = getScale({
			x:rowCol.row-1,
			y:rowCol.col-1
		});
		var clickedUnMask = spriteCreater.CreateSprite('cube', clickedCubeScale, null);
		var newUpdateColRow = {
			row:rowCol.row-1,
			col:rowCol.col-1
		};
		var callback = function(){
			updateCube(10, clickedUnMask, cube, rowCol);
		}
		goog.events.listen(clickedUnMask, ['mousedown', 'touchstart'], callback);
		cube.getParent().appendChild(clickedUnMask);

	}
	
	for(pos in targets){
		var neiRowCol = targets[pos];
		if(maskCube){
			// alert(maskCube.getParent().getParent().getPosition().x);
			maskCube.setSize(0,0);
		}
		var row = neiRowCol.x;
		var col = neiRowCol.y;
		neiRowCol = {
			x: row-1,
			y: col
		}
		//Remove other four masks
		var maskCube = getIndexByRowCol(neiRowCol);
		if(maskCube){
			maskCube.setSize(0,0);
		}
		neiRowCol = {
			x: row-1,
			y: col-1
		}
		var innerScale = getScale(neiRowCol);
		var unMaskCube = spriteCreater.CreateSprite('cube', innerScale, null);
		cube.getParent().appendChild(unMaskCube);
	}
}

var checkAvailable = function(){

}

var addMask = function(posScale, cubeScale){
	var creater = new xun.H_Spirite();
	var enterCube = creater.CreateSprite('enter', posScale, cubeScale);
	return enterCube;
}

xun.Cube = function(type, cubeScale, posScale, rowCol) {
	lime.Sprite.call(this);
	//Return single xun.Cube
	//Contains the inner object, randomly

	this.spriteCreater = new xun.H_Spirite();
	if(cubeScale && posScale){
		// if(type == 'enter'){
			var maskCube = this.spriteCreater.CreateSprite(type, posScale, cubeScale);
			this.appendChild(maskCube);
			var callback = function(){
				updateCube(10, maskCube, this, rowCol);
				// enableMask(rowCol, maskCube, this, posScale, type);
			}
			//Store the arry
			cubeMaskArray.push(maskCube);
			goog.events.listen(maskCube, ['mousedown', 'touchstart'], callback);
		// } else {
		// 	this.appendChild(addMask(posScale, cubeScale));
		// }
	}
	

};
goog.inherits(xun.Cube, lime.Sprite);

xun.Cube.prototype.createCube = function(){
	
};

xun.Cube.prototype.getName = function(){
	return this.name;
};

xun.Cube.prototype.setName = function(name){
	this.name = name;
};