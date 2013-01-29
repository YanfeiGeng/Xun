//set main namespace
goog.provide('xuntestCube');

//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.Circle');
goog.require('lime.Label');
goog.require('lime.GlossyButton');
goog.require('lime.animation.Spawn');
goog.require('lime.animation.FadeTo');
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.MoveTo');

goog.require('xun.Cube');

// entrypoint
xuntestCube.start = function() {

	xuntestCube.director = new lime.Director(document.body, 300, 300);

	var scene = new lime.Scene(),
		layer = new lime.Layer();

	scene.appendChild(layer);

    var cube = new xun.Cube('orc').setPosition(0, 0).setAnchorPoint(0, 0).setSize(300, 300);
    layer.appendChild(cube);
	
	var i = 0;
	goog.events.listen(cube, ['mousedown', 'touchstart'], function(){
		switch(i)
		{
			case 0:
				cube.removeMask();
				break;
			case 1:
				cube.openBox();
				break;
			//case 2:
			//	cube.openBox();
			//	break;
		}
		i++;	
	});	

	xuntestCube.director.makeMobileWebAppCapable();
	// set current scene active
	xuntestCube.director.replaceScene(scene);
};

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('xuntestCube.start', xuntestCube.start);
