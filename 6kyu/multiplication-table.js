multiplicationTable = function(size) {
    // create matrix given size that is n x n multiplication table
    // need to get into matrix (need two loops), multiplying in the j loop
    
    //size 1 -- 1,2,3
    //size 2 -- 2,4,6
    //size 3 -- 3,6,9
    
    // my solution:
    
    let matrix = []; 
    
    for(let i = 1; i <= size; i ++){
      let temp = [];
      for(let j = 1; j <= size; j++){
        temp.push(i * j); 
      }
      matrix.push(temp);
    }
    return matrix; 
  }