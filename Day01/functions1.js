//Function hoisting

eat("Roti");
sleep();
console.log(work());


function eat(items){
	console.log("Eating " + items);
}

function sleep(){
	console.log("Attend training");
}

function work(){
	return "Working hard";
}
