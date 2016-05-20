function Book(theTitle,thePrice){
	this.title = theTitle;
	this.price = thePrice;
	this.buy = function(store){
		console.log("Buying " + this.title + " from " + store);
	};
}
//Book("dsf",23);

var b1 = new Book("ABC",45);
console.log(b1.title + " " + b1.price);
b1.buy("Amazon");

var b2 = new Book("XYZ",56);
console.log(b2.title + " " + b2.price);
b2.buy("FK");
