/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

// my solution: 

function high(str){
    let strArr = str.split(" ");
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let count = 0; 
    let highWord = "";
    let highScore = -Infinity; 
    
    for(let i = 0; i < strArr.length; i++){
      for(let j = 0; j < strArr[i].length; j++){
        count += alphabet.indexOf(strArr[i][j]) + 1; 
      }  if(count > highScore){
            highScore = count;
            highWord = strArr[i];
      } 
      count = 0; 
    }
    
    return highWord; 
  }