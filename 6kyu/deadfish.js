/* Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.
*/


//my solution:

function parse(data){
    let counter = 0; 
    let result = []; 
    let dataArr = data.split("");
    
    for(let char of dataArr){
      if(char === "i"){
        counter++; 
      } else if (char === "d"){
        counter--;
      } else if (char === "s"){
        counter **= 2; 
      } else if (char === "o"){
        result.push(counter);
      }
    }  
    return result; 
  }