/* 
The goal of this exercise is to convert a string to a new string 
where each character in the new string is "(" if that character appears 
only once in the original string, or ")" if that character appears more 
than once in the original string. Ignore capitalization when determining if a character is a duplicate.
*/

// my solution: 

function duplicateEncode(str){
    let strLowerArr = str.toLowerCase().split("")
    let result = []; 
    
    for(let el of strLowerArr){
      if(strLowerArr.indexOf(el) !== strLowerArr.lastIndexOf(el)){
        result.push(")"); 
      } else {
        result.push("("); 
      }
    } return result.join(""); 
  }
