// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


//my solution:

function count (string) {  
    let charCount = {}; 
    
    for(let char of string){
      if(!(char in charCount)){
        charCount[char] = 1; 
      }
      else{
        charCount[char] ++; 
      }
    }
    return charCount; 
  }