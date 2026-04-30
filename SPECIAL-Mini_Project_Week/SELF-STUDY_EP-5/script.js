const tweetInput = document.getElementById("tweetInput")
const postTweet = document.getElementById("postTweet")
const tweetsContainer = document.getElementById("tweetsContainer")

postTweet.addEventListener("click", addTweet)
tweetsContainer.addEventListener("click", handleTweetActions)

function addTweet() {
  const content = tweetInput.value.trim()
  if (content === "") {
    return
  }

  const tweet = {
    id: Date.now(),
    content: content,
    likes: 0,
  }

  saveTweet(tweet)
  displayTweet(tweet)
  tweetInput.value = ""
}

function displayTweet(tweet) {
  const tweetElement = `
    <div class="tweet" data-id="${tweet.id}">
      <p>${tweet.content}</p>
      <div class="tweet-actions">
        <span class="like">Like (${tweet.likes})</span>
        <span class="delete">Delete</span>
      </div>
    </div>
    `
  tweetsContainer.insertAdjacentHTML("afterbegin", tweetElement)
}

function saveTweet(tweet) {
  const tweets = getStoredTweets()
  tweets.push(tweet)
  localStorage.setItem("tweets", JSON.stringify(tweets))
}

function getStoredTweets() {
  const tweets = localStorage.getItem("tweets")
  return tweets ? JSON.parse(tweets) : []
}

function handleTweetActions(event) {
  const target = event.target
  const tweetElement = target.closest(".tweet")
  const id = parseInt(tweetElement.dataset.id)

  if (target.classList.contains("like")) {
    updateTweetLikes(id)
  } else if (target.classList.contains("delete")) {
    deleteTweet(id)
    tweetElement.remove()
  }
}

function updateTweetLikes(id) {
  const tweets = getStoredTweets()
  const tweetIndex = tweets.findIndex((tweet) => tweet.id === id)
  tweets[tweetIndex].likes += 1

  const likeElement = document.querySelector(`[data-id="${id}"] .like`)
  likeElement.textContenet = `Like (${tweets[tweetIndex].likes}`

  localStorage.setItem("tweets", JSON.stringify(tweets))
}

function deleteTweet(id) {
  let tweets = getStoredTweets()
  tweets = tweets.filter((tweet) => tweet.id !== id)
  localStorage.setItem("tweets", JSON.stringify(tweets))
}

function loadTweets() {
  const tweets = getStoredTweets()
  for (const tweet of tweets) {
    displayTweet(tweet)
  }
}

// Initialize
loadTweets()
