/* 
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. Ignore numbers and punctuation.
*/

//my solution:

function isPangram(string){ 
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    string = string.toLowerCase(); 
    
    for(let i = 0; i < string.length; i++){
      if(alphabet.includes(string[i])){
        alphabet.splice((alphabet.indexOf(string[i])), 1);
      }
    }
    
    if(alphabet.length){
      return false;
    } else {
      return true; 
    }
  }