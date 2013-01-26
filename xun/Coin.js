goog.provide('Coin');

Coin = function() {
	this.capacity = '10';
};

Coin.prototype.getCapacity = function(){
	return this.capacity;
};

Coin.prototype.setCapacity = function(cap){
	this.capacity = cap;
}