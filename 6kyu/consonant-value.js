/*
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

ex. "zodiacs" => "z", "d", "cs" => 26
*/

//my solution: 

function solve(s) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const vowels = "aeiou";
    
    let largestSum = 0; 
    let currSum = 0; 
    
   for(let el of s){
     if(!vowels.includes(el)){
       currSum += (alphabet.indexOf(el) + 1);
        if(currSum > largestSum){
            largestSum = currSum; 
        }
   } else {
     currSum = 0; 
   }
    }
      return largestSum; 
  }