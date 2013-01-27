//set main namespace
goog.provide('xuntest');

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
goog.require('xun.Monster');

// entrypoint
xuntest.start = function() {

	xuntest.director = new lime.Director(document.body, 200, 200);

	var scene = new lime.Scene(),
		layer = new lime.Layer();

	scene.appendChild(layer);

	//var game = new xun.Game(mode);
	//layer.appendChild(game);	
    
    var monster = new xun.Monster('monster');
    layer.appendChild(monster);
	xuntest.director.replaceScene(scene);
	
	goog.events.listen(monster, ['mousedown', 'touchstart'], function(){
		monster.dropLife();
	});	


	xuntest.director.makeMobileWebAppCapable();
	// set current scene active
	xuntest.director.replaceScene(scene);
};

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('xuntest.start', xuntest.start);
