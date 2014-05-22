function Inventory() {
	this.bagSlots = [0,0,0,0];
	this.bagSpace = this.bagSlots.length;
}

Inventory.prototype.inventoryAvailable = function() {
	var currAvail = this.bagSpace;
	for(var i=1; i<this.bagSpace; i++) {
		if(this.bagSlots[i] != 0) {
			currAvail--;
		}
	}
	return currAvail;
}
