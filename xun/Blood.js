goog.provide('xun.Blood');

xun.Blood = function() {
	this.name = '';
};

xun.Blood.prototype.getName = function(){
	return this.name;
};

xun.Blood.prototype.setName = function(name){
	this.name = name;
}