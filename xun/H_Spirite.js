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
	HP:'blood',
	ENTER: 'enter',
	ORC: 'orc',
	SKELETON: 'skeleton',
	CARD1:'card1',
	CARD2:'card2',
	CARD3:'card3',
	MASK:'mask'
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

xun.H_Spirite.prototype.CreateSprite = function(Type,Position,Scale) //in_Scene,in_Layer,
{
	
	var Block_SP = new lime.Sprite;
	switch(Type)
	{
		case SType.BLOCK:
			Block_SP.setFill('assets/block_yes.PNG');
			break;
		case SType.CUBE:
			Block_SP.setFill('assets/block_yes.PNG');
			break;
		case SType.COIN:
			Block_SP.setFill('assets/gold.PNG');
			break;
		case SType.HP:
			Block_SP.setFill('assets/blood.PNG');
			break;
		case SType.ENTER:
			Block_SP.setFill('assets/enter.png');
			break;
		case SType.ORC:
			Block_SP.setFill('assets/orc.png');
			break;
		case SType.SKELETON:
			Block_SP.setFill('assets/skeleton.png');
			break;
		case SType.MASK:
			Block_SP.setFill('assets/mask.png');
			break;

	}
	Block_SP.setRotation(0);
	Block_SP.setAnchorPoint(0,0);
	Block_SP.setPosition(Position.x, Position.y);
    var Press = function(e)
    {
       Block_SP.setFill(255,0,255);
    }
    var Up=function(e)
    {
    	 Block_SP.setFill(255,0,255);
    }
    return Block_SP;
}
xun.H_Spirite.prototype.ChangeSpirite=function(Sp_Path)
{
	SP.setFill(Sp_Path);
}