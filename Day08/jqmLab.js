$().ready(function(){
	$('#stock_page_back_button').on("click",goBackToListPage);
	$( "#symbol_list_page" ).pagecontainer({
	  	create: fetchSymbols
	});
});
function goBackToListPage(){
	$('body').pagecontainer("change","#symbol_list_page");
}
function fetchSymbols(){
	var symbols = ["HP","IBM","INTC","MS","AAPL","ACN","GOOG","FB"];
	for (var i = 0; i < symbols.length; i++) {
		var symbol = symbols[i];
		var li = "<li><a href='#' id='" + symbol + "'>" + symbol + "</a></li>";
		$('#symbolslist').append(li);
		$('#'+symbol).on("click",fetchStockPrice);
	}
	$('#symbolslist').listview("refresh");
}
function fetchStockPrice(){
	var symbol = $(this).attr("id");
	var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22ACTUALSYMBOL%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json".replace("ACTUALSYMBOL",symbol);
	$.ajax({
		url : url,
		dataType: "json",
		type : "GET",
		beforeSend: function(){
			$.mobile.loading( "show", {
			  text: "Getting the current price of " + symbol,
			  textVisible: true,
			  theme: "a",
			  html: ""
			});
		},
		complete: function(){
			$.mobile.loading( "hide", {});
		},
		error: function(){
			alert("Error fetching values from server");
		},				
		success: function(response){
			$('#stock_page_header').text(symbol);
			var price = response.query.results.quote.LastTradePriceOnly;
			var change = response.query.results.quote.Change;
			$('#trade_price_cell').text(price);
			$('#change_cell').text(change);	
			$('body').pagecontainer('change','#stock_page');
		}
	});
	
}