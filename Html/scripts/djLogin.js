'use strict';

var base_url = 'http://dj.masaccio.io/web_service/api/auth/';

$("#DJLogin").submit(function(e) {

    e.preventDefault();

}).validate({

		rules: {

			id: "required",
			password: "required",
		},
		messages: {

			id: "Please enter DJ Id",
			password: "Please enter dj password.",
		},

		errorElement: 'span',
	    errorPlacement: function (error, element) {

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



			//var formdata = $(form).serializeArray(); 

				var formdata = {

				"id":$('input[name=id]').val(),

				"password":$('input[name=password]').val(),

			};

			
				$.ajax({
							url : base_url+"login.php",
							type:'POST',

							data: JSON.stringify(formdata),

							dataType:'json',

							processData: false,  // Important!

					        contentType: false,

					        cache: false,

							beforeSend:function(){

								$('#login').val('logging...');

							},

							success:function(res){

								if(res.status ==  1){
									
								window.localStorage.setItem('djid', res.id);
							  	 window.localStorage.setItem('name', res.name);
								  window.localStorage.setItem('token', res.token);
								  window.localStorage.setItem('expires', res.expireAt);

								// 
									//alert('Your DJ ID :'+ res.id+' . Please save your DJ ID for the login.');
									window.location.href="/songblendr/";
								}else if(res.status == 0){

									alert(res.message);

								}
							
							

						}

					});

			    return false;

		}

	});







