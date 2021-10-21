'use strict';



var base_url = 'http://dj.masaccio.io/web_service/api/song/';





$("#DJSongForm").submit(function(e) {

    e.preventDefault();

}).validate({

		rules: {

			djid: { required:true,min:1},

			name:"required",

			genre:"required",

			artist:"required",

			website:{required: true,url: true}

		},

		messages: {

			djid: "Please select DJ",

			name: "Please enter a song name.",

			genre:"Please enter a genre.",

			artist:"Please enter the artist name.",

			website:{ required:"Please enter url links.",url:"Please enter valid url link."},

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

				"id_dj" : $('select[name=djid]').val(),

				"name" : $('input[name=name]').val(),

				"genere" : $('input[name=genre]').val(),

				"artist" : $('input[name=artist]').val(),

				"url" : $('input[name=website]').val(),

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