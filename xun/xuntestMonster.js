//set main namespace
goog.provide('xuntestMonster');

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
xuntestMonster.start = function() {

	xuntestMonster.director = new lime.Director(document.body, 300, 300);

	var scene = new lime.Scene(),
		layer = new lime.Layer();

	scene.appendChild(layer);

    var monster = new xun.Monster('bat').setPosition(0, 0).setAnchorPoint(0, 0).setSize(300, 300);
    layer.appendChild(monster);
	
	goog.events.listen(monster, ['mousedown', 'touchstart'], function(){
		monster.dropLife(10);
	});	

	xuntestMonster.director.makeMobileWebAppCapable();
	// set current scene active
	xuntestMonster.director.replaceScene(scene);
};

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('xuntestMonster.start', xuntestMonster.start);
