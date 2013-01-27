//set main namespace
goog.provide('xuntestCard');

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

// entrypoint
xuntestCard.start = function() {

	xuntestCard.director = new lime.Director(document.body, 300, 300);

	var scene = new lime.Scene(),
		layer = new lime.Layer();

	scene.appendChild(layer);

    var card = new xun.Card().setPosition(0, 0).setAnchorPoint(0, 0).setSize(300, 300);
    layer.appendChild(card);
	
	goog.events.listen(card, ['mousedown', 'touchstart'], function(){
		card.dropLife(10);
	});	

	xuntestCard.director.makeMobileWebAppCapable();
	// set current scene active
	xuntestCard.director.replaceScene(scene);
};

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('xuntestCard.start', xuntestCard.start);
