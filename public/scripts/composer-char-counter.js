$(document).ready(function() {
  $('#tweet-text').on('keydown keyup', function(event) {
    const count = $('#tweet-text').val().length;
    const remaining = 140 - count;
    $(this).closest('form').find('.counter').val(remaining);
  })
});