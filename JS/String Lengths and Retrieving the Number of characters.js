let tweet = prompt('Compose your tweet:');
let tweetCount = tweet.length;
alert('You have written' + tweetCount + 'characters,you have ' + (140 - tweetCount) + ' characters remaining.')