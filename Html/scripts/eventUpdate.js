$(document).ready(function() {

'use strict';

$.ajaxSetup({ cache: false });



var base_url = 'http://dj.masaccio.io/web_service/api/';



$.ajax({

	cache: false,

	url:base_url+'dj/read.php',

	type:'GET',

	success:function(res){

	var json = $.parseJSON(res);

		var html = '';

		var selected = '';

		 html +='<option>-- select DJ--</option>';

		$.each(json.data,function(i,v){

			html +='<option value="'+v.id+'">'+v.first_name+' '+v.last_name+'</option>';

		

		});

			$('select[name=dj]').html(html);

	}

})



$('#FindEvent').click(function(e){

	e.preventDefault();

	var id =$('input[name=id]').val();



	$.ajax({

		url:base_url+'event/read_single.php?id='+id,

		type:'GET',

		success:function(res){

			var json = $.parseJSON(res);

		  		console.log(json.data);

		  	$.each(json.data,function(i,v){



		  		$('input[name="code"]').val(v.code);

		  		$('input[name="name"]').val(v.name);

		  		$('input[name="permit"]').val(v.permit);

		  		$('input[name="type"]').val(v.type);

				$('input[name="participants"]').val(v.participants);

				var d = v.event_date.split('/');

			   var dateformat = d[2]+'-'+d[1]+'-'+d[0];

		  		$('input[name="eventdate"]').val(dateformat);

				$('input[name="eventstarttime"]').val(v.event_start);

				$('input[name="eventendtime"]').val(v.event_end);

		  		

		  		

		  	});

		}

	})



})







});