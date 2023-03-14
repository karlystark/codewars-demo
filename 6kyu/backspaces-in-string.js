
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""


//my solution :

function cleanString(str) {

    let result = []; 
    let newArr = str.split(""); 
    
    for(let char of newArr){
      if(char === "#"){
        result.pop(); 
      } else {
        result.push(char); 
      }
    } return result.join(""); 
  }