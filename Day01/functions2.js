function work(){
	console.log("Working");
	for (var i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
	console.log();
}
work();
work(24,7);
work("all the time");
work(false);
work(365,"days",24,7);
work("like","a","zombie");
