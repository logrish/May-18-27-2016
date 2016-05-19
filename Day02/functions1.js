//Higher order functions
function confuse(){
	return function(){
		console.log("What the hell is going on??");
	};
}
confuse()();

var vote = function(){
	console.log("Voting");
}
vote();

work(vote);
function scratchHead(){
	console.log("Scratching my head");
}
work(scratchHead);
work(function(){
	console.log("Confused now");
});
function work(arg){
	arg();
}