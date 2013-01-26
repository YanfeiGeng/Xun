goog.provide('Stage');

Stage = function() {
	this.name = '';
};

Stage.prototype.getName = function(){
	return this.name;
};

Stage.prototype.setName = function(name){
	this.name = name;
};