$(document).ready(function() {
  $('#tweet-text').on('keydown keyup', function(event) {
    const count = $('#tweet-text').val().length;
    const remaining = 140 - count;
    const counter = $(this).closest('form').find('.counter');
    counter.val(remaining);

    if (remaining < 0) {
      counter.addClass('counter-red');
    } else {
      counter.removeClass('counter-red')
    }
  })
});