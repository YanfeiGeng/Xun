goog.provide('xun.Cube');

goog.require('xun.H_Spirite');

var executer = function(type, innerObj){
	var card = xun.Stage.config.card;
	if(type != 'enter'){
		//Remove the inner object
		innerObj.setSize(0, 0);
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
			cube.removeAllChildren();
			var parent = singleCb.getParent();
			if(parent){
				parent.removeAllChildren();
			}
			var innerObj = spriteCreater.CreateSprite(type, posScale, cubeScale);
			parent.appendChild(innerObj);
			var showBg = function(innerObj){
				if(innerObj){
					executer(type, innerObj);
				}
			}
			var callbackBg = function(){
				showBg(innerObj);
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