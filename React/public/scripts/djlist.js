$(document).ready(function() {

  'use strict';

  $.ajaxSetup({ cache: false });

  var base_url = 'http://dj.masaccio.io/web_service/api/';



  $.ajax({

  	url:base_url+'dj/read.php',

  	type:'GET',

  	success:function(res){

  		var json = $.parseJSON(res);

  		var html = '';



      var tmpl = '';

      $.each(json.data,function(i,val){

            var d = new Date(val.created_date);

          tmpl += '<div class="card box-shadow"><div class="position-ab"><p >'+val.first_name+' '+val.last_name+'</p><span>'+moment(val.created_date).toNow(true)+'</span></div>';

          //  if(val.image != ''){

             //   tmpl +='<div class="bg-img"><img src="'+val.image+'" class="img-responsive"></div>';

         //  }else{

                 tmpl +='<div class="bg-img"><img src="img/dj-list1.png" class="img-responsive"></div>';

   //      }

            tmpl +='<div class="detail"><span class=" opacity-70 bottom-0 font-12"><i class="fa fa-map-marker text-primary"></i> '+val.location+' &nbsp; &nbsp;</span><span class=" opacity-70 bottom-0 font-12"><i class="fa fa-globe text-primary"></i> '+val.website+'</span></div>';

            tmpl +='<p class="ptb-10 text-primary">Click to view detail <i class="fa  fa-angle-right color-dark"></i></p>';

            tmpl +='<div class="button-cover"><div class="button r toggle-btn" id="buttontoggle" data-field="btn-'+val.id+'"><input type="checkbox" class="checkbox"><div class="knobs"></div><div class="layer"></div></div>';

            tmpl +='<div class="all-detail"><div class="drop btn-1" id="btn-'+val.id+'">';

            tmpl +='<h5 class="text-primary">Enter your dj name</h5><strong>About us</strong><p> '+val.about+' </p><hr/><strong>Location</strong><p> <i class="fa fa-map-marker text-primary"></i> '+val.location+'</p><hr/>';

            tmpl +=' <strong>Phone</strong> <p> <i class="fa fa-phone text-primary"></i> '+val.phone+'</p><hr/><strong>Email</strong><p> <i class="fa fa-envelope text-primary"></i> '+val.email+'</p><hr/>';

            tmpl +='<strong>Social</strong><p><i class="fab fa-facebook text-primary"></i> '+val.facebook+'</p> <hr/><strong>Website</strong> <p><i class="fa fa-globe text-primary"></i> '+val.website+'</p></div></div></div></div>';

          });

  		

        $('#DJlist').html(tmpl);

        $('.pagination').pagination({

          itemsToPaginate:".box-shadow",

          activeClass:'active',

          itemsPerPage:10

      });

  	}

  });



  $(document).on('click',"div[id^='buttontoggle']", function(){

      var btn = $(this).data('field');

      $('#'+btn).slideToggle();

    });





});



function time2TimeAgo(ts) {

    // This function computes the delta between the

    // provided timestamp and the current time, then test

    // the delta for predefined ranges.



    var d=new Date();  // Gets the current time

    var nowTs = Math.floor(d.getTime()/1000); // getTime() returns milliseconds, and we need seconds, hence the Math.floor and division by 1000

    var seconds = nowTs-ts;



    // more that two days

    if (seconds > 2*24*3600) {

       return "a few days ago";

    }

    // a day

    if (seconds > 24*3600) {

       return "yesterday";

    }



    if (seconds > 3600) {

       return "a few hours ago";

    }

    if (seconds > 1800) {

       return "Half an hour ago";

    }

    if (seconds > 60) {

       return Math.floor(seconds/60) + " minutes ago";

    }

}



// function time_elapsed_string($datetime, $full = false) {

//     $now = new DateTime;

//     $ago = new DateTime($datetime);

//     $diff = $now->diff($ago);



//     $diff->w = floor($diff->d / 7);

//     $diff->d -= $diff->w * 7;



//     $string = array(

//         'y' => 'year',

//         'm' => 'month',

//         'w' => 'week',

//         'd' => 'day',

//         'h' => 'hour',

//         'i' => 'minute',

//         's' => 'second',

//     );

//     foreach ($string as $k => &$v) {

//         if ($diff->$k) {

//             $v = $diff->$k . ' ' . $v . ($diff->$k > 1 ? 's' : '');

//         } else {

//             unset($string[$k]);

//         }

//     }



//     if (!$full) $string = array_slice($string, 0, 1);

//     return $string ? implode(', ', $string) . ' ago' : 'just now';

// }



