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

  renderTweets(data);
});

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

const createTweetElement = function(datum) {
  // TODO: time ago calculation
  const $tweet = $(
    `<article class="tweet">
      <header>
        <div>
          <img src="${datum.user.avatars}" alt="[icon]">
          <span>${datum.user.name}</span>
        </div>
        <span>${datum.user.handle}</span>
      </header>
      <main>
        ${datum.content.text}
      </main>
      <footer>
        <span>3 days ago</span>
        <span>
          <span>f</span>
          <span>r</span>
          <span>h</span>
        </span>
      </footer>
    </article>`
  );
  return $tweet;
}

const renderTweets = function(tweets) {
  const $container = $('#tweets');
  for (tweet of tweets) {
    const $elem = createTweetElement(tweet);
    $container.prepend($elem);
  }
}
