//You are given three integer inputs: length, minimum, and maximum.

//Return a string that:
    //Starts at minimum
    //Ascends one at a time until reaching the maximum, then
    //Descends one at a time until reaching the minimum
    //repeat until the string is the appropriate length


//my solution:

function ascendDescend(length, minimum, maximum) {
    let ascendRun = "";
    
    for(let i = minimum; i <= maximum; i++){
        ascendRun += i;
      }
   
    for(let i = maximum-1; i > minimum; i--){
      ascendRun += i; 
    }
  
    return ascendRun.repeat(length).slice(0, length);
  }