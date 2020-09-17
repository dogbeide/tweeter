/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {
  $('#tweet-submit').on('click', function() {
    const form = $("#tweet-form");

    form.submit(function(event){
      event.preventDefault();
      const url = '/tweets';
      const method = 'POST';
      const data = form.serialize();

      $.ajax({
        url,
        type: method,
        data
      }).done(function(response) {
        console.log("response", response);
        form.trigger('reset');
      }).fail(function(error, status) {
        console.log(error, status);
      });
    });
  });
});