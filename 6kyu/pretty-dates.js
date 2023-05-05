/* Write a helper function that takes in a Time object and converts it to a more human-readable format. You need only go up to '_ weeks ago'.

toPretty(0) => "just now"

toPretty(40000) => "11 hours ago"

##Specifics

The output will be an amount of time, t, included in one of the following phrases: "just now", "[t] seconds ago", "[t] minutes ago", "[t] hours ago", "[t] days ago", "[t] weeks ago".
You will have to handle the singular cases. That is, when t = 1, the phrasing will be one of "a second ago", "a minute ago", "an hour ago", "a day ago", "a week ago".
The amount of time is always rounded down to the nearest integer. For example, if the amount of time is actually 11.73 hours ago, the return value will be "11 hours ago".
Only times in the past will be given, with the range "just now" to "52 weeks ago"
*/

//my solution: 

function toPretty(seconds){
    
    // < 60 seconds => seconds ago
    // < 3600 => minutes ago
    // < 86400 => hour ago
    // < 604800 => day ago
    // < 2,628,288 => weeks ago
    
    
    if(seconds === 0){
      return "just now";
    } else if (seconds < 60){
      return seconds === 1? "a second ago": `${Math.floor(seconds)} seconds ago`;
    } else if (seconds < 3600){
      return Math.floor(seconds/60) === 1? "a minute ago" : `${Math.floor(seconds/60)} minutes ago`; 
    } else if (seconds < 86400){
      return Math.floor(seconds/3600) === 1? "an hour ago" : `${Math.floor(seconds/3600)} hours ago`;
    } else if (seconds < 604800){
      return Math.floor(seconds/86400) === 1? "a day ago" : `${Math.floor(seconds/86400)} days ago`; 
    } else if (seconds < 31557600){
      return Math.floor(seconds/604800) === 1? "a week ago" : `${Math.floor(seconds/604800)} weeks ago`; 
    }
  }