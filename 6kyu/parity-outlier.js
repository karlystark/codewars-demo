/* You are given an array 
(which will have a length of at least 3, but could be very large) 
containing integers. The array is either entirely comprised of odd integers 
or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.
*/

//my solution:

function findOutlier(integers){
  
    let evenInts = integers.filter(int => int % 2 === 0);
    let oddInts = integers.filter(int => int % 2);
    
    return evenInts.length === 1? evenInts[0] : oddInts[0];
  }