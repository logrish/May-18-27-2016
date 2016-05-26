var Global = {
	baseUrl : "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22ACTUALSYMBOL%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json",
	symbols : [],
	symbolsUrl : "/stock"
};

$().ready(function(){
	fetchSymbols();
	window.setInterval(fetchSymbols,10000);
});

function fetchSymbols(){
	if(localStorage.getItem("symbols")){
		Global.symbols = JSON.parse(localStorage.getItem("symbols"));
		getStockQuotes();
	}
	else{
		$.ajax({
			url : Global.symbolsUrl,
			type: "GET",
			dataType : "json",
			success : function(response){
				Global.symbols = response.symbols;
				localStorage.setItem("symbols",JSON.stringify(Global.symbols));
				getStockQuotes();
			}
		});	
	}
	
}
function getStockQuotes(){
	for (var i = 0; i < Global.symbols.length; i++) {
		var symbol = Global.symbols[i];
		var url = Global.baseUrl.replace("ACTUALSYMBOL",symbol);
		talkToYahoo(symbol,url);
	}
}
function talkToYahoo(symbol,url){
	$.ajax({
		url : url,
		type: "GET",
		dataType: "json",
		beforeSend : function(){
			$('#main_img_' + symbol).show();
		},
		complete: function(){
			$('#main_img_' + symbol).hide();
		},
		success : processResponseFromYahoo
	});
}
function processResponseFromYahoo(response){
	var symbol = response.query.results.quote.symbol;
	var price = response.query.results.quote.LastTradePriceOnly;
	var change = response.query.results.quote.Change;
	if($("#"+symbol).length == 0){
		var newRow = createRow(symbol,price,change);
		$('tbody').append(newRow);
	}
	else{
		$('#' + symbol).text(price);
	}	
}
function createRow(symbol,price,change){
	var row = "<tr>";
	row += "<td id='main_" + symbol + "'>" + symbol + " <img id='main_img_" + symbol  + "' src='loading.gif' style='height:10px;width:20px;display:none'></td>";
	if(change > 0)
		row += "<td id='" + symbol +"' style='background-color:green'>" + price + "</td>";
	else
		row += "<td id='" + symbol +"' style='background-color:red'>" + price + "</td>";
	row += "</tr>";
	return row;
}

