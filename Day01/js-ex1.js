var arr = [];
arr['name'] = 'Sam';
arr['age'] = 12;
arr['country'] = 'India';
arr['city'] = 'Pune';

var queryString = "?";
for(var key in arr){
	queryString += key + "=" + arr[key] + "&";
}
queryString = queryString.substring(0,queryString.length-1);
console.log(queryString);