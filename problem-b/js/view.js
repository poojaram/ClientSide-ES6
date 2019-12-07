'use strict';

/*

The View is a (visual) presentation of the Model; it is what the user perceives. 
Note that an application can have multiple Views of a single Model (e.g., you can show 
a Model as both a data table and as a chart).

*/
export function printTweets(tweets) {
    if (tweets.length == 0) {
        console.log("No tweets found");
    } else {
        for (let i=0; i < tweets.length; i++) {
            let text = tweets[i].text;
            let date = new Date(tweets[i].timestamp).toLocaleString("en-US");
            console.log("- \"" + text + "\" (" + date + ")");
        }
    }
}