/* Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits. */

// my solution: 

function duplicateCount(str){
    let counter = 0; 
    let alreadyDone = "";
    let strLowerArr = str.toLowerCase().split(""); 
    
    for(let i = 0; i < strLowerArr.length; i++){
      if(strLowerArr.indexOf(strLowerArr[i]) !== strLowerArr.lastIndexOf(strLowerArr[i]) && !alreadyDone.includes(strLowerArr[i])){
        counter++;
        alreadyDone += strLowerArr[i]; 
        
      }
    }
    return counter; 
    }