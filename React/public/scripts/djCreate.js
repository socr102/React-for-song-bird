'use strict';



var base_url = 'http://dj.masaccio.io/web_service/api/dj/';


$("#DJCreateForm").submit(function(e) {

    e.preventDefault();

}).validate({

	 ignore: ".upload-file",

		rules: {

			first_name: "required",

			last_name: "required",

			email: {

				required: true,

				email: true

			},
			password:{required:true },

			term:"required",

		},

		messages: {

			first_name: "Please enter your firstname.",

			last_name: "Please enter your lastname.",

			email: "Please enter a valid email address.",
			password:"Please enter the password",

			term:"Please accepts the term and policys."

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

				"first_name" : $('input[name=first_name]').val(),
				"last_name" : $('input[name=last_name]').val(),
				"email" : $('input[name=email]').val(),
				"phone" : $('input[name=phone]').val(),
				"website" : $('input[name=website]').val(),
				"facebook" : $('input[name=facebook]').val(),
				"location" : $('input[name=location]').val(),
				"about" : $('textarea[name=about]').val(),

				"image":$('input[name=image]').val(),
				"password":$('input[name=pass]').val(),

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
							
								alert('Your DJ ID : '+ res.djid+' . Please save your DJ ID for the login. ' + res.message);

							   location.reload();

						}

					});

			    return false;

		}

	});







