/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times. */

// my solution: 

function findOdd(arr) {
    let count = {}; 
    
    if(arr.length === 1){
      return arr[0];
    } else {
      for(let i = 0; i < arr.length; i++){
        if(count[arr[i]]){
          count[arr[i]]++; 
        } else {
          count[arr[i]] = 1; 
        }
      }
    }
    
    for(let key in count){
      if(count[key] % 2 === 1){
        return +key; 
      }
    }
  }
