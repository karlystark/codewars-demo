//Write a function that determines whether the passed in sequences are similar. 
//Similar means they contain the same elements, and the same number of occurrences of elements.

//my solution:

function arraysSimilar(arr1, arr2) {
    let sortedArr1 = arr1.sort((a,b) => a-b);
    let sortedArr2 = arr2.sort((a,b) => a-b);
  
    if(arr1.length !== arr2.length){
      return false;
    } 
    
    for(let i = 0; i < arr1.length; i++){
      if(sortedArr1[i] !== sortedArr2[i]){
          return false; 
      }
  } return true; 
  }