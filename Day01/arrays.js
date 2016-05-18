var arr = [];
var countries = ['India','Spain','France'];
var anything = [12.455,'hello','wth',true,false,null];

for (var i = 0; i < anything.length; i++) {
	console.log(anything[i]);
}
var capitals = [];
capitals["India"] = "New Delhi";
capitals["USA"] = "Washington D.C";
capitals["UK"] = "London";

for(var key in capitals){
	console.log(key);
	console.log(capitals[key]);
}