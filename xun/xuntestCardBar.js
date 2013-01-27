//set main namespace
goog.provide('xuntestCardBar');

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

goog.require('xun.Card');
goog.require('xun.CardBar');

// entrypoint
xuntestCardBar.start = function() {

	xuntestCardBar.director = new lime.Director(document.body, 1536, 344);

	var scene = new lime.Scene(),
		layer = new lime.Layer();

	scene.appendChild(layer);

    var card = new xun.Card();
	var card2 = new xun.Card();
	var card3 = new xun.Card();
	
	var cardBar = new xun.CardBar().setPosition(0, 0).setAnchorPoint(0, 0);
	cardBar.addCard(card);
	cardBar.addCard(card2);
	cardBar.addCard(card3);
    layer.appendChild(cardBar);
	
	//goog.events.listen(monster, ['mousedown', 'touchstart'], function(){
	//	monster.dropLife(10);
	//});	

	xuntestCardBar.director.makeMobileWebAppCapable();
	// set current scene active
	xuntestCardBar.director.replaceScene(scene);
};

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('xuntestCardBar.start', xuntestCardBar.start);
