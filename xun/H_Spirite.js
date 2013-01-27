goog.provide("xun.H_Spirite");

goog.require('lime');
goog.require('lime.Director');
goog.require('lime.Layer');
goog.require('lime.Scene');
goog.require('lime.Sprite');
goog.require('lime.animation.Delay');
goog.require('lime.animation.FadeTo');
goog.require('lime.animation.MoveBy');
goog.require('lime.animation.MoveTo');
goog.require('lime.animation.RotateBy');
goog.require('lime.animation.ScaleBy');
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.Sequence');
goog.require('lime.animation.Spawn');

var SCREENWIDTH = 1024;
var SCREENHEIGTH = 768;
var SP;
var SType = 
{
	BLOCK:'block',
	BACKGROUND:'background',
	CUBE:'cube',
	COIN:'coin',
	HP:'hp',
	CARD1:'card1',
	CARD2:'card2',
	CARD3:'card3',
};

xun.H_Spirite = function() {
};


xun.H_Spirite.prototype.TestFunc =function()
{
	H_Spirite.director = new lime.Director(document.body, SCREENWIDTH, SCREENHEIGTH);
	H_Spirite.director.makeMobileWebAppCapable();

	var gamescene = new lime.Scene;

	var flameLayer = new lime.Sprite().setAnchorPoint(0, 0);
	flameLayer.setPosition(100, 0);

	// canvas rendering for no reason
	flameLayer.setRenderer(lime.Renderer.CANVAS);

	gamescene.appendChild(flameLayer);
	var Position ={x:100, y:100};
	var Scale  =  {x:100, y:100}; 
	this.Create(SType.BLOCK,gamescene,flameLayer,Position,Scale);
	H_Spirite.director.replaceScene(gamescene);
}


xun.H_Spirite.prototype.Create = function(Type,Position,Scale,AMsg) //in_Scene,in_Layer,
{
	var config = xun.Stage.config;
	// var NowScene = in_Scene;
	// var NowLayer = in_Layer;
	switch(Type)
	{
		case SType.BLOCK:
		var Block_SP = new lime.Sprite;
			SP=Block_SP; 
        	// NowLayer.appendChild(Block_SP);
        	Block_SP.setFill('assets/block_yes.PNG');
        	Block_SP.setRotation(0);
        	Block_SP.setPosition(Position.x + config.offsetWidth, 
        		Position.y + config.offsetHeight);
        	// Block_SP.setSize(Scale.x, Scale.y);
            // NowLayer.appendChild(Block_SP);
            Block_SP.setAnchorPoint(0,0);
            var Press = function(e)
	        {
	           Block_SP.setFill(255,0,255);
	        }
	        var Up=function(e)
	        {
	        	 Block_SP.setFill(255,0,255);
	        }
	        MsgCall=AMsg;
	        if(MsgCall!=null)
	        {
	        	 goog.events.listen(Block_SP, ['mousedown', 'touchstart'], MsgCall);

	        }
		break;
	}
	
	return Block_SP;
}
xun.H_Spirite.prototype.ChangeSpirite=function(Sp_Path)
{
	SP.setFill(Sp_Path);
}