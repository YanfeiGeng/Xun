goog.provide('xun.Cube');

goog.require('xun.H_Spirite');

xun.Cube = function(type, cubeScale, posScale) {
	lime.Sprite.call(this);
	//Return single xun.Cube
	//Contains the inner object, randomly

	var innerObjectCallBack = function(){
		alert('Should show the background now!');
	}

	var updateCube = function(amount,singleCb, cube){
		//1. Drop blood of the card
		if(cube && singleCb && amount){
			// cube.removeAllChildren();
			singleCb.setSize(0, 0);
			var position = singleCb.getPosition();
			var config = xun.Stage.config;
			var newPos = {
				x : position - config.offsetWidth,
				y : position - config.offsetHeight
			};
			var innerObj = spriteCreater.CreateSprite('coin', newPos, cubeScale);
			cube.appendChild(innerObj);
			alert('Show Bg!');
			var showBg = function(innerObj){
				if(innerObj){
					innerObj.setSize(0, 0);
				}
			}
			var callbackBg = function(){
				// showBg(innerObj);
				alert('Come In!');
			}
			goog.events.listen(innerObj, ['mousedown', 'touchstart'], callbackBg);
		}
	}

	var spriteCreater = new xun.H_Spirite();
	if(cubeScale && posScale){
		var singleCb = spriteCreater.CreateSprite('block', posScale, cubeScale);
		this.appendChild(singleCb);
		var callback = function(){
			updateCube(10, singleCb, this);
		}
		goog.events.listen(singleCb, ['mousedown', 'touchstart'], callback);
	}

	
	// alert('Cube Created!');
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