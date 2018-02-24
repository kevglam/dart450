/**********************************************

DART 450, Winter 2018
Exercise03
Kevin Lam

Description of what the script does...

**********************************************/

$(document).ready(function () {

  var ironCount = 0;
  var posts = 0;
  var followers = 0;
  var following = 1;
  var lucky = 1;
  var imagePicker = 0;


  $('h1').prepend('<img id="header"  src="http://i65.tinypic.com/301n67c.jpg" />')
  $('#stats').text(posts + "     " + "posts" + "     "  +  followers + "     "  + "followers" + "     "  + following + "     "  + "following" );

  $('#warioBase').prepend('<img id="wario1"  src="http://i65.tinypic.com/29d4i8.png" />')


  $('#Workout').on('mousedown',function() {
    $('#warioBase').prepend('<img id="wario2"  src="http://i65.tinypic.com/501et5.png" />')
    $('#wario1').hide();
    $('#stats').text(posts + "     " + "posts" + "     "  +  followers + "     "  + "followers" + "     "  + following + "     "  + "following" );
  });

  $('#Workout').on('mouseup',function() {
    $('#warioBase').prepend('<img id="wario1"  src="http://i65.tinypic.com/29d4i8.png" />')
    $('#wario2').hide();

    ironCount++;
    console.log(ironCount);

    if(ironCount == 7) {
      lucky = ((2 + followers) + posts) + 1;

      followers = followers + lucky;
      console.log("in");
      ironCount = 0;

    }


  });

  $('#Selfie').on('click',function() {

    if(imagePicker == 0){
      $('#posts').prepend('<img id="warioPic"  src="http://i65.tinypic.com/15ez4nt.jpg" />')
      imagePicker++;
    }

    else if(imagePicker == 1){
      $('#posts').prepend('<img id="warioPic"  src="http://i66.tinypic.com/iqzhab.jpg" />')
      imagePicker++;
    }

    else if(imagePicker == 2){
      $('#posts').prepend('<img id="warioPic"  src="http://i65.tinypic.com/6hpypz.gif" />')
      imagePicker++;
    }

    else if(imagePicker == 3){
      $('#posts').prepend('<img id="warioPic"  src="http://i65.tinypic.com/nv6wb4.jpg" />')
      imagePicker++;
    }

    else if(imagePicker == 4){
      $('#posts').prepend('<img id="warioPic"  src="http://i65.tinypic.com/vse79c.jpg" />')
      imagePicker++;
    }

    else if(imagePicker == 5){
      $('#posts').prepend('<img id="warioPic"  src="http://i65.tinypic.com/212e1qv.gif" />')
      imagePicker++;
    }

    else if(imagePicker == 6){
      $('#posts').prepend('<img id="warioPic"  src="http://i65.tinypic.com/2zz49ds.jpg" />')
      imagePicker++;
    }

    else if(imagePicker == 7){
      $('#posts').prepend('<img id="warioPic"  src="http://i65.tinypic.com/3u0rc.jpg" />')
      imagePicker++;
    }

    else if(imagePicker == 8){
      $('#posts').prepend('<img id="warioPic"  src="http://i65.tinypic.com/2w6ts10.jpg" />')
      imagePicker++;
    }

    else if(imagePicker == 9){
      $('#posts').prepend('<img id="warioPic"  src="http://i65.tinypic.com/hwmn21.jpg" />')
      imagePicker++;
    }

    else if(imagePicker == 10){
      $('#posts').prepend('<img id="warioPic"  src="http://i65.tinypic.com/2z4crk9.jpg" />')
      imagePicker++;
    }

    else if(imagePicker == 11){
      $('#posts').prepend('<img id="warioPic"  src="http://i64.tinypic.com/2zdraxk.jpg" />')
      imagePicker = 0;
    }

    posts++;
    $('#stats').text(posts + "     " + "posts" + "     "  +  followers + "     "  + "followers" + "     "  + following + "     "  + "following" );

  });



});
