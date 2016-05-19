/*
	function math(num){
		if(num % 2 == 0)
			console.log(num);
	}
	var numbers = [12,4,56,3,123,74,8,3,234,987];
	for (var i = 0; i < numbers.length; i++) {
		math(num);
	}
*/
function math(logic){
	var numbers = [12,4,56,3,123,74,8,3,234,987];
	for (var i = 0; i < numbers.length; i++) {
		logic(numbers[i]);
	}
}
var even = function(num){
	if(num%2 == 0)
		console.log(num);
};
console.log("***EVEN***");
math(even);

console.log("***ODD***");
math(function(num){
	if(num % 2 != 0)
		console.log(num);
});
console.log();
largest = -1;
math(function(num){
	if(num > largest)
		largest = num;
});
console.log("Largest: " + largest);





