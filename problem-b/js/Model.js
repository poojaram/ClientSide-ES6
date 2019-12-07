'use strict';

/*

 The Model in an MVC program represents the "data" or "information" in the program. 
 It handles access to the underlying data structure (e.g., the array or object).

*/
import allTweets from "./uw_ischool_tweets.js";

let tweets = allTweets.map( (tweet) => ({
    'text' : tweet.text, 
    'timestamp' : Date.parse(tweet.created_at)
}) );

function sort() {
    return tweets.sort((time1, time2) => time2.timestamp - time1.timestamp);
}
export function getRecentTweets() {
    let recentTweets = sort();
    return recentTweets.slice(0,5);
}

export function searchTweets(searchItem) {
    let search = tweets.filter( (tweet) => tweet.text.toLowerCase().includes(searchItem.toLowerCase()) );
    return search;

}
