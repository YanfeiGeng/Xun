goog.provide('Key');

Key = function() {
	this.name = '';
};

Key.prototype.getKeyName = function(){
	return this.name;
};

Key.prototype.setKeyName = function(name){
	this.name = name;
}