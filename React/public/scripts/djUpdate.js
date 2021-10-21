$(document).ready(function() {

'use strict';

$.ajaxSetup({ cache: false });



var base_url = 'http://dj.masaccio.io/web_service/api/';



var djid = window.localStorage.getItem('djid');

if(djid != null ){
	$.ajax({

		url:base_url+'dj/read_single.php?id='+djid,
		mimeType: "text/html; charset=utf-8",
		type:'GET',
		cache: false,
		  async: true,
	
		success:function(res){
	
			 var data = $.parseJSON(res);
	
			$('input[name=id]').val(data.id);
	
			$('input[name=first_name]').val(data.first_name);
	
			 $('input[name=last_name]').val(data.last_name);
	
			$('input[name=email]').val(data.email);
	
			 $('input[name=phone]').val(data.phone);
	
			 $('input[name=website]').val(data.website);
	
			 $('input[name=facebook]').val(data.facebook);
	
			  $('input[name=location]').val(data.location);
	
			 $('input[name=email]').val(data.email);
	
			 $('textarea[name=about]').val(data.about);
	
			$('input[name=image]').val(data.image);
	
		}
	
		});
	
}else{
	$('#alertmessage').show().text('Please login before update your profile');
}
	







$("#UpdateDJ").submit(function(e) {

    e.preventDefault();

}).validate({

		rules: {

			first_name:"required",

			last_name:"required",

			email:"required",
			pass:"required",

		},

		messages: {

			first_name: "Please select DJ",

			last_name: "Please selecta song to update.",
			email: "Please enter a song name.",
			pass:"Please enter a password"

		},

		errorElement: 'span',

	    errorPlacement: function (error, element) {

	    	console.log(element[0]);

				error.addClass('invalid-feedback'); 

					error.insertAfter(element);	   

	    },

	    highlight: function (element, errorClass, validClass) {

	        $(element).addClass('is-invalid');

	    },

	    unhighlight: function (element, errorClass, validClass) {

	        $(element).removeClass('is-invalid');

	    },

		submitHandler: function(form) {


				var formdata = {

				 "id" : $('input[name=id]').val(),

			    "first_name" : $('input[name=first_name]').val(),

				"last_name" : $('input[name=last_name]').val(),

				"email" : $('input[name=email]').val(),
				
				"password":$('input[name=pass]').val(),

				"phone" : $('input[name=phone]').val(),

				"website" : $('input[name=website]').val(),

				"facebook" : $('input[name=facebook]').val(),

				"location" : $('input[name=location]').val(),

				"about" : $('textarea[name=about]').val(),

				"image":$('input[name=image]').val()

			};

			console.log(formdata);
			
				$.ajax({

							url : base_url+"dj/update.php",

							type:'POST',

							data: JSON.stringify(formdata),
					        cache: false,

							beforeSend:function(xhr){

								xhr.setRequestHeader ("Authorization", "Bearer " +  window.localStorage.getItem('token'));

							},

							success:function(res){

							alert(res.message);

							window.location.reload();

						}

					});

			    return false;



		}

	});





});