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

  loadTweets();
});

const loadTweets = function () {
  $.ajax('/tweets', {method: 'GET'})
  .then(function(data) {
    renderTweets(data);
  });
}

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
