'use strict';



var base_url = 'http://dj.masaccio.io/web_service/api/music/';

$("#AddSong").submit(function(e) {

    e.preventDefault();

}).validate({

	 ignore: ".upload-file",

		rules: {

			dj: "required",

			event: "required",

			song:"required",

		},

		messages: {

			dj: "Please select Dj Name.",

			event: "Please select event name.",

			song:"Please select a song.",

		},

		errorElement: 'span',

	    errorPlacement: function (error, element) {

	   			if(element[0].type === 'checkbox'){

				     	error.addClass('invalid-feedback');

						error.insertAfter(element.parent());	     

				}else{

					error.addClass('invalid-feedback'); 

					error.insertAfter(element);	   

				}



	    },

	    highlight: function (element, errorClass, validClass) {

	        $(element).addClass('is-invalid');

	    },

	    unhighlight: function (element, errorClass, validClass) {

	        $(element).removeClass('is-invalid');

	    },

		submitHandler: function(form) {



			//var formdata = $(form).serializeArray(); 

				var formdata = {

				"id_event" : $('select[name=event]').val(),

				"id_song" : $('select[name=song]').val(),

				"rating" : $('input[name=rating]').val(),



			};

			

				$.ajax({

							url : base_url+"create.php",

							type:'POST',

							data: JSON.stringify(formdata),

							dataType:'json',

							processData: false,  // Important!

					        contentType: false,

					        cache: false,

							beforeSend:function(){

								$('#add-submit').val('adding...');

							},

							success:function(res){

							alert(res.message);

							window.location.reload();

						}

					});

			    return false;

		}

	});







