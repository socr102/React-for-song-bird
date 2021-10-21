'use strict';



var base_url = 'http://dj.masaccio.io/web_service/api/event/';





$("#DJEventUpdate").submit(function(e) {

    e.preventDefault();

}).validate({

	 ignore: ".upload-file",

		rules: {

			dj: "required",

			code: "required",

			name:"required",

			type:"required",

			permit:"required",

			participants:"required",

			eventdate:"required",

			eventstarttime:"required",

			eventendtime:"required"

		},

		messages: {

			dj: "Please select DJ",

			code: "Please enter your lastname.",

			name: "Please enter a event name.",

			type:"Please enter a type.",

			permit:"Please enter the permit",

			participants:"Please enter participants",

			eventdate:"Please select event date.",

			eventstarttime:"Please select start time",

			eventendtime:"Please select start time",

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



			var date = $('input[name=eventdate]').val();

			var d = date.split('-');

			var dateformat = d[2]+'/'+d[1]+'/'+d[0];



				var formdata = {

				"id" : $('input[name=eventid]').val(),

				"id_dj" : $('input[name=djid]').val(),

				"code" : $('input[name=code]').val(),

				"name" : $('input[name=name]').val(),

				"type" : $('input[name=type]').val(),

				"permit" : $('input[name=permit]').val(),

				"participants" : $('input[name=participants]').val(),

				"event_date" : dateformat,

				"event_start" : $('input[name=eventstarttime]').val(),

				"event_end":$('input[name=eventendtime]').val(),

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

							location.reload();

						}

					});

			    return false;



		}

	});