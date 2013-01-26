goog.provide('Blood');

Blood = function() {
	this.name = '';
};

Blood.prototype.getName = function(){
	return this.name;
};

Blood.prototype.setName = function(name){
	this.name = name;
}