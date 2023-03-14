/*You will be given an array of numbers. 
You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
*/

//my solution:

function sortArray(array) {

    let ascOdds = array.filter(el => el % 2).sort((a,b) => a-b); 
    
    for(let i = 0; i < array.length; i++){
      if(array[i] % 2 !== 0){
        array[i] = ascOdds.shift();
      } 
    } return array; 
  }