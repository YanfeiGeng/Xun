goog.provide('xun.Key');

xun.Key = function() {
	this.name = '';
};

xun.Key.prototype.getKeyName = function(){
	return this.name;
};

xun.Key.prototype.setKeyName = function(name){
	this.name = name;
}