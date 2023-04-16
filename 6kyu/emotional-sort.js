/* 
You'll have a function called "sortEmotions" that will return an array of emotions sorted. 
It has two parameters, the first parameter called "arr" will expect an array of emotions 
where an emotion will be one of the following:

:D -> Super Happy
:) -> Happy
:| -> Normal
:( -> Sad
T_T -> Super Sad

Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

And the second parameter is called "order", if this parameter is true then the order of the 
emotions will be descending (from Super Happy to Super Sad) if it's false then it will be 
ascending (from Super Sad to Super Happy).
*/

//my solution:

function sortEmotions(arr, order){
    const emotions = {
      ":D": 5,
      ":)" : 4,
      ":|" : 3,
      ":(" : 2,
      "T_T" : 1,
    };
     
     let result = []; 
     let vals = [];
     
     
     if(!arr.length){
       return result; 
     }
     
     if(order){
       vals = arr.map(el => emotions[el]).sort((a,b) => b-a); 
       } else {
       vals = arr.map(el => emotions[el]).sort((a,b) => a-b);
     }
   
     
     for(let el of vals){
           result.push(Object.keys(emotions).filter(key => emotions[key] === el));
         }
    
    return result.flat(); 
   }