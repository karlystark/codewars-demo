/* Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

*/

//my solution:

function encode(str) {
    let vowelCode = {
      "a": 1, 
      "e": 2,
      "i": 3, 
      "o": 4,
      "u": 5,
    };
    
    let outputStr = ""; 
    let strArr = str.split(""); 
    
    for(let i = 0; i < strArr.length; i++){
      if(strArr[i] in vowelCode){
        outputStr += vowelCode[strArr[i]]; 
      } else {
        outputStr += strArr[i]; 
      }
    } return outputStr; 
  }
  
  function decode(str) {
     let vowelCode = {
      1: "a", 
      2: "e",
      3: "i", 
      4: "o",
      5: "u",
    };
    
    let outputStr = ""; 
    let strArr = str.split(""); 
    
    for(let i = 0; i < strArr.length; i++){
      if(strArr[i] in vowelCode){
        outputStr += vowelCode[strArr[i]]; 
      } else {
        outputStr += strArr[i]; 
      }
    } return outputStr; 
  }