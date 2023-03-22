/* Create a function that takes a string as a parameter and does the following, in this order:

- Replaces every letter with the letter following it in the alphabet (see note below)
- Makes any vowels capital
- Makes any consonants lower case

Note:

- the alphabet should wrap around, so Z becomes A
- in this kata, y isn't considered as a vowel.

So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)
*/

// my solution: 

function changer(str) { 
 
    let alphabet = "abcdefghijklmnopqrstuvwxyza"; 
    let vowels = "aeiou"; 
    let strLower = str.toLowerCase(); 
    let result = ""; 
    
    
    for(let i = 0; i < strLower.length; i++){
      if(alphabet.includes(strLower[i])){
        let ind = alphabet.indexOf(strLower[i]); 
        result += alphabet[ind + 1]; 
    } else {
      result += strLower[i]; 
    }
  }
    
  
  let resultArr = result.split("");
    
    for(let i = 0; i < resultArr.length; i++){
      if(vowels.includes(resultArr[i])){
        resultArr.splice(i,1,resultArr[i].toUpperCase()); 
      }
    }
    return resultArr.join(""); 
  }