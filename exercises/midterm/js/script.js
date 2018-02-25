/**********************************************

DART 450, Winter 2018
Exercise03
Kevin Lam

The main mechanic behind the game is... To gain more followers, you must become more fit by "Pumping Iron".
The more you work out, the more followers you get. If you post pictures, then the rate at which your
"popularity" rises will also increase. 

**********************************************/

$(document).ready(function () {
  //Initializing all variables
  //To count the number of workout repititions to regulate score
  var ironCount = 0;
  //To keep track of how many pictures Wario posted
  var posts = 0;
  //To keep track of how many followers Wario has/gains
  var followers = 0;
  //He only follows 1 other person. That is Waluigi
  var following = 1;
  //A variable that help keeps the score incrementing in a "random" looking manner
  var lucky = 1;
  //Variable to cycle through various pictures of Wario
  var imagePicker = 0;

  // Top header
  $('h1').prepend('<img id="header"  src="http://i65.tinypic.com/301n67c.jpg" />')
  //Print initial account stats
  $('#stats').text(posts + "     " + "posts" + "     "  +  followers + "     "  + "followers" + "     "  + following + "     "  + "following" );
  //Wario base animation picture
  $('#warioBase').prepend('<img id="wario1"  src="http://i65.tinypic.com/29d4i8.png" />')

  //What happens when you "Pump Iron"
  $('#Workout').on('mousedown',function() {
    $('#warioBase').prepend('<img id="wario2"  src="http://i65.tinypic.com/501et5.png" />')
    $('#wario1').hide();
    $('#stats').text(posts + "     " + "posts" + "     "  +  followers + "     "  + "followers" + "     "  + following + "     "  + "following" );
  });

  $('#Workout').on('mouseup',function() {
    $('#warioBase').prepend('<img id="wario1"  src="http://i65.tinypic.com/29d4i8.png" />')
    $('#wario2').hide();
    //Incrementing followers count
    ironCount++;
    console.log(ironCount);

    if(ironCount == 7) {
      lucky = ((2 + followers) + posts) + 1;

      followers = followers + lucky;
      console.log("in");
      ironCount = 0;

    }


  });
  //Cycle of pictures for Wario's posts
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
    //To keep track of how many posts
    posts++;
    //Update stats
    $('#stats').text(posts + "     " + "posts" + "     "  +  followers + "     "  + "followers" + "     "  + following + "     "  + "following" );

  });



});
