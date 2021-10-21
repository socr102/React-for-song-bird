$(document).ready(function() {

'use strict';

$.ajaxSetup({ cache: false });
var base_url = 'http://dj.masaccio.io/web_service/api/';

$.ajax({
	cache: false,
	url:base_url+'dj/read.php',
	mimeType: "text/html; charset=utf-8",
	type:'POST',
	  async: true,

	success:function(res){

	var json = $.parseJSON(res);
		var html = '';
		var selected = '';
		var t = 0;
			html +='<option>-- select DJ--</option>';

		$.each(json.data,function(i,v){

			html +='<option value="'+v.id+'" '+selected+'>'+v.first_name+' '+v.last_name+'</option>';

		});

			$('select[name=dj]').html(html);

	}

})

$('select[name=dj]').on('change', function () {

	var djid = $(this).find("option:selected").val();

	getevents(djid);
	console.log(djid);

});

});





function getevents(djid){

	var base_url = 'http://dj.masaccio.io/web_service/api/';

	$.ajax({
	url:base_url+'event/read.php?dj='+djid,
	type:'GET',
	cache: false,
	success:function(res){

			var json = $.parseJSON(res);
		var html = '';
		var a = 1;
			$('.pagination').remove();

			if(json.hasOwnProperty('data')){
			$.each(json.data,function(i,v){
				
				html +='<tr><td>'+v.id+'</td><td>'+v.id_dj+'</td><td>'+v.dj_fname+'</td><td>'+v.dj_lname+'</td><td>'+v.code+'</td><td>'+v.name+'</td><td>'+v.permit+'</td><td>'+v.type+'</td><td>'+v.participants+'</td><td>'+v.event_date+'</td><td>'+v.event_start+'</td><td>'+v.event_end+'</td></tr>';

				a++;

			});
			}else{
				html +='<tr><td cols="5>'+json.message+'</td></tr>';

			}
			$('#events').html(html);

				$('#EventTable').paginate({
			    limit: 3,

			     previous:true,

				  previousText:'<',

				  next:true,

				  nextText:'>',

				  first:true,

				  firstText:'<<',

				  last:true,

				  lastText:'>>',

				  navigationWrapper:$('.eventpagination'),

				  navigationClass:'pagination',

			  });

	}

	});

}