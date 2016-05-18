var numbers = [6,12,54,2,65,7,99,45,89,29];
compute(5) //Print the first five numbers in the array
compute() //Print all the numbers
compute("even")//Print all the even numbers in the array
compute("odd")//Print all the odd numbers in the array
compute("jkfdkdsfkj")//Print an error message
compute(1,2,3,34,4)//Print an error message
compute(2,"even")//Print two even numbers
compute(3,"odd")//Print three odd numbers

function compute(){
	if(arguments.length == 0)
		printAllNumbers();
	else if(arguments.length == 1){
		var arg = arguments[0];
		if(isNaN(arg)){
			if(arg == "even")
				printEvenNumbers();
			else if(arg == "odd")
				printOddNumbers();
			else
				console.log("****Invalid argument: " + arg + "****");
		}
		else{
			printNumbersTill(arg);
		}
	}
	else if(arguments.length == 2){
		var arg1 = arguments[0];
		var arg2 = arguments[1];
		if(!isNaN(arg1)){
			if(arg2 == "even")
				printEvenNumbers(arg1);
			else if(arg2 == "odd")
				printOddNumbers(arg1);
		}
	}
	else if(arguments.length > 2)
		console.log("****Invalid arguments: " + arguments + "****");
}
function printOddNumbers(limit){
	
	var count = 0;
	if(limit == undefined){
		console.log("****Print All Odd Numbers***");
		limit = numbers.length;
	}
	else
		console.log("****Print " + limit + " Odd Numbers***");
		
	for (var i = 0; i < numbers.length && count < limit; i++) {
		if(numbers[i] % 2 != 0){
			console.log(numbers[i]);
			count++;
		}
	}
}
function printEvenNumbers(limit){
	var count = 0;
	if(limit == undefined){
		console.log("****Print All Even Numbers***");
		limit = numbers.length;
	}
	else
		console.log("****Print " + limit + " Even Numbers***");
	
	for (var i = 0; i < numbers.length && count < limit; i++) {
		if(numbers[i] % 2 == 0){
			console.log(numbers[i]);
			count++;
		}
			
	}
}
function printNumbersTill(count){
	console.log("****Print " + count + " numbers ****");
	for (var i = 0; i < count; i++) {
		console.log(numbers[i]);
	}
}
function printAllNumbers(){
	console.log("***Print All numbers***");
	for (var i = 0; i < numbers.length; i++) {
		console.log(numbers[i]);
	}
}