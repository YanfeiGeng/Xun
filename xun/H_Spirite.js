goog.provide("H_Spirite");

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
CUBE:'cube'
};

H_Spirite.TestFunc =function()
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
H_Spirite.Up=function(e)
{
	SP.setFill(255,0,0);
}
H_Spirite.Press=function(e)
{
	SP.setFill(255,0,255);

}
H_Spirite.Create = function(Type,in_Scene,in_Layer,Position,Scale)
{
	var NowScene = in_Scene;
	var NowLayer = in_Layer;
	switch(Type)
	{
		case SType.BLOCK:
		var Block_SP = new lime.Sprite;
			SP=Block_SP; 
        	NowLayer.appendChild(Block_SP);
        	Block_SP.setFill('assets/Cube.PNG');
        	Block_SP.setRotation(0);
        	Block_SP.setPosition(Position.x, Position.y);
        	Block_SP.setSize(Scale.x, Scale.y);
            NowLayer.appendChild(Block_SP);
          //  goog.events.listen(Block_SP, ['mousedown', 'touchstart'], Press);
           // goog.events.listen(Block_SP, ['mouseup', 'touchstart'], Up);
           // goog.events.listen(Block_SP, ['mouseup', 'touchstart'], function(e){

       		//e.startDrag(false);
       		//var t = Block_SP;
       		//e.swallow(['mouseup', 'touchend'], function() {Block_SP.setFill(0, 0, 100)});
		break;
		case SType.BACKGROUND:
		break;
		case SType.CUBE:
		break;
	}
	return Block_SP;
}

H_Spirite.Move=function(Position)
{

}
