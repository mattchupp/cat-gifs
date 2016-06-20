/*
  - Matt Chupp
  - These few lines of code runs the whole show -
  - Meow Meow Meow
*/

// directory for the gifs
var gifsrc = "gifs/";
var col = 1; // for the grid

// HOW MANY GIFS DO YOU HAVE?
var gifCount = 31;

/*
 -- for loop to build the img src links
 -- *var gif = build link
 -- *var imgHTML = builds the tags
*/
for (var i = 1; i <= gifCount; i++ ) {
  var gif = gifsrc + "gif" + i + ".gif";

  if (i % 4 == 0) {
    col = 1;
  }

  var imgHTML = '<div class="grid__col grid__col--'+ col +'-of-4"><img class="gifs" src="'+ gif +'"></div>';
  $("#cats").append(imgHTML);
}
