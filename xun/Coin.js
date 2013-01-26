goog.provide('xun.Coin');

xun.Coin = function() {
	this.capacity = '10';
};

xun.Coin.prototype.getCapacity = function(){
	return this.capacity;
};

xun.Coin.prototype.setCapacity = function(cap){
	this.capacity = cap;
}