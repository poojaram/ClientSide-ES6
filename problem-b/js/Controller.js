'use strict';

/*

The Controller facilitates communication between the Model and the View and traditionally 
handles user interaction. The Controller tells the Model to change the data in response to user
input, and then tells the View to "update" itself to reflect the changed Model. 

*/
import readline from 'readline-sync';
import * as model from './Model.js';
import { printTweets as print} from './View.js';

export function runSearch() {
    console.log("Here are some tweets by @UW_iSchool");
    print(model.getRecentTweets());

    let item = readline.question("Search tweets, or EXIT to quit: ");
    if(item === "EXIT") {
        return;
    } else {
       print(model.searchTweets(item));
    }
}
