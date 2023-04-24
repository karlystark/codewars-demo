/*
Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.
*/

//my solution:

function spinWords(string){  
    let result = []; 
    let strArr = string.split(" "); 
    
    for(let el of strArr){
      if(el.length >= 5){
        result.push(el.split("").reverse().join("")); 
      } else {
        result.push(el);
      }
    }
    return result.join(" "); 
  }