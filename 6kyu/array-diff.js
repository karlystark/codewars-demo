
//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//It should remove all values from list a, which are present in list b keeping their order.
//If a value is present in b, all of its occurrences must be removed from the other.

//my solution:

function arrayDiff(a, b) {
    if(b.length){
        return a.filter(el => !b.includes(el));
      } else {
        return a; 
      }
  }