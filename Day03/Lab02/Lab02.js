var moviesColl = [];
var tableShown = false;

function displayRowsInMovieTable(){
	var movieRows = "";	
	for (var i = 0; i < moviesColl.length; i++) {
		var movie = moviesColl[i];
		movieRows += "<tr>";
		movieRows += "<td>" + movie.name + "</td>";
		movieRows += "<td>" + movie.year + "</td>";
		movieRows += "</tr>";
	}
	document.getElementById("moviestbody").innerHTML = movieRows;
}

function showHideMovieList(){
	if(!tableShown){
		displayRowsInMovieTable();
		document.getElementById("moviestable").style.display = "block";
		document.getElementById("showHideList").innerText = "Hide List";
	}
	else{
		document.getElementById("moviestable").style.display = "none";
		document.getElementById("showHideList").innerText = "Show List";
	}
	tableShown = !tableShown;
}

function addButtonClicked(){
	var name = document.getElementById("moviename").value;
	var year = document.getElementById("yearofrelease").value;
	var added = addMovie(name,year);
	if(added){
		document.getElementById("message").innerText = "Movie added successfully";
		displayRowsInMovieTable();
	}
		
	else
		document.getElementById("message").innerText = "Movie already present";
}

function addMovie(movieName,yearOfRelease){
	var added = false;
	if(!isMovieAvailableInCollection(movieName)){
		moviesColl.push({
			name: movieName,
			year: yearOfRelease
		});
		added = true;
	}
	return added;
}
function isMovieAvailableInCollection(movieName){
	var available = false;
	for (var i = 0; i < moviesColl.length; i++) {
		var movie = moviesColl[i];
		if(movie.name == movieName){
			available = true;
			break;
		}
	}
	return available;
}