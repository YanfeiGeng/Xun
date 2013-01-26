//set main namespace
goog.provide('xun');

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


// entrypoint
xun.start = function() {

	xun.director = new lime.Director(document.body, 320, 460);
	var scene = new lime.Scene(),
	    layer = new lime.Layer();

	//var background = new lime.Sprite().setFill(255,150,0).setSize(1536, 2048);
	//layer.appendChild(background);	
		
	var btn = new lime.GlossyButton("Play").setSize(100,50).setPosition(160, 200);
	goog.events.listen(btn, 'click', function() {
			xun.newgame(1);
	});
	layer.appendChild(btn);
	
	scene.appendChild(layer);

	xun.director.makeMobileWebAppCapable();
	// set current scene active
	xun.director.replaceScene(scene);

};

xun.newgame = function(mode) {
	var scene = new lime.Scene(),
		layer = new lime.Layer();

	scene.appendChild(layer);

	//var game = new xun.Game(mode);
	//layer.appendChild(game);	

	xun.director.replaceScene(scene);
};


//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('xun.start', xun.start);