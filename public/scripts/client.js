/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

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

  const $tweet = createTweetElement(tweetData);
  // console.log($tweet);
  $('#tweets').append($tweet);
});

const createTweetElement = function(tweet) {
  const $tweet = $(`<article class="tweet">Hello world</article>`);
  return $tweet;
}