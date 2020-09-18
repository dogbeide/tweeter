$(document).ready(function() {
  var counter = 0;
  $('#tweet-text').on('keyup', function(event) {
    counter ++;
    console.log(counter, event);
  })
});