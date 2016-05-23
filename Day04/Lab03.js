$().ready(function(){
	$('#addbutton').on("click",addPerson);
	$('#removebutton').on("click",removePersons);
});
function addPerson(){
	var name = $('#name').val();
	var age = $('#age').val();
	var row = "<tr>";
	row += "<td>" + name + "</td>";
	row += "<td>" + age + "</td>";
	row += "<td><input type='checkbox'></td>";
	row += "</tr>";
	$('tbody').append(row);
	$("#resultsdiv").show();
	$("#name").select();
}
function removePersons(){
	$(':checked').each(function(){
		$(this).parents("tr").remove();
	});
	if($('tbody tr').length == 0){
		$('#resultsdiv').hide();
	}
}