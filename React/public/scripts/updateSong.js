'use strict';



var base_url = 'http://dj.masaccio.io/web_service/api/song/';





$("#UpdateSong").submit(function(e) {

    e.preventDefault();

}).validate({

		rules: {

			dj: { required:true},

			song:"required",

			name:"required",

			genere:"required",

			artist:"required",

			url:{required: true}

		},

		messages: {

			dj: "Please select DJ",

			song: "Please selecta song to update.",

			name: "Please enter a song name.",

			genere:"Please enter a genere.",

			artist:"Please enter the artist name.",

			url:{ required:"Please enter url links."},

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

				"id_dj" : $('select[name=dj]').val(),

				"id" : $('select[name=song]').val(),

				"name" : $('input[name=name]').val(),

				"genere" : $('input[name=genere]').val(),

				"artist" : $('input[name=artist]').val(),

				"url" : $('input[name=url]').val(),

			};

			

				$.ajax({

							url : base_url+"update.php",

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