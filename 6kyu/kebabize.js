//my solution: 

function kebabize(str) {
    // input: string
    // output: string 
    
    //Use a for loop to iterate through input string:
        // if string element is not an upperCase char or a num (is lowerCase char, basically), add char to currentWord variable
        // else if string element is an upperCase char:
           // check that currentWord isn't an empty string (would happen if the first valid char(s) are upperCase, and don't want to push empty strings to resultArr)
                // if not empty => push whatever is in currentWord variable to the resultArr variable && assign current char to the value of currentWord variable
                // if empty => assign current char to the value of currentWord 

    //Need to push whatever is left in currentWord to the resultArr after loop completes
    
    //Return resultArr as a properly formatted string using join ("-") and also toLowerCase() method
   
    
    let currentWord = ""; 
    let resultArr = []; 
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nums = "1234567890"
    
    for(let i = 0; i < str.length; i++){ 
      if(!upperCase.includes(str[i]) && !nums.includes(str[i])){ 
        currentWord += str[i]; 
      } else if(upperCase.includes(str[i])) { 
        if(currentWord.length){ 
        resultArr.push(currentWord); 
        currentWord = str[i];  
        } else { 
          currentWord = str[i]; 
        }    
      }
      } 
    resultArr.push(currentWord); 
    return resultArr.join("-").toLowerCase(); 
  }