//Array, String, Number, Date, Object

var arr = [];
var arr2 = new Array(12,4,5,6);

var str = 'string';
var str2 = new String('sfj');

var dt = new Date();

var person = new Object();
person.name = "Sam";
person.age = 12;
person.hobbies = ["TV","Sleeping","Traffic"];
person.eat = function(){
		console.log("Eating");
};
console.log(person);
//JSON
var company = {
	name : "Accenture",
	stock: {
		symbol : "ACT",
		lastTradePrice : 45.67
	},
	locations: ["BLR","CHN"],
	size : 100000,
	hq : "USA",
	work: function(){
		
	}
};
console.log(company.stock.symbol);
console.log(company.locations[0]);






