//arr1 = [1,4,5,6,7,8];
//arr2 = [2,4,5,8,9,22];
//return = [1, 2, 4, 4, 5, 5, 6, 7, 8, 8, 9, 22];

//Given two already-sorted lists, return new list of all elements, sorted.

//input: two arrays of sorted nums OR words
//output: one array sorting these two input arrays

// create a variable called sortedArr and assign to it the value of an empty array
// create a variable called alphabet and assign to it the value of a string containing alphabetic chars a-z

//start a while loop so that our loop will only run while both arr1 and arr2 have values in them
//first, check if the input arrays contain numbers or words:

//if we are working with words => 
//create two variables and split each element of the array into nested arrays of characters (and convert to lowerCase to be able to check against alphabet variable)
//compare the first element of the first nested array within arr1 and arr2, comparing their index values in the alphabet variable
//if the nested arr1's index within alphabet is smaller than nested arr2's index within alphabet, push arr1[0] to the result array (and remove that value from arr1)
//if it's the opposite, push arr2[0] to the result array and remove that value from arr2.

//if we are working with nums => 
//check if the value of arr1[0] is smaller than the value of arr2[0], if so push arr1[0] to result array and remove that value from arr1
// if arr2[0] is smaller, push arr2[0] to the result array and remove that value from arr2

//after this loop is broken (either arr1 or arr2 are empty), check which array still has values and add that array to the end of the result array
//return the result array


function sortSorted(arr1, arr2){

let sortedArr = []; 
let alphabet = "abcdefghijklmnopqrstuvwxyz";

while(arr1.length && arr2.length){
    if(isNaN(arr1[0]) && isNaN(arr2[0])){
        let nestedArr1 = arr1.map(str => str.toLowerCase().split(""));
        let nestedArr2 = arr2.map(str => str.toLowerCase().split(""));
            if(alphabet.indexOf(nestedArr1[0][0]) <= alphabet.indexOf(nestedArr2[0][0])){
                    sortedArr.push(arr1.shift());
                } else {
                    sortedArr.push(arr2.shift());
                }
            } else {
        if(arr1[0] <= arr2[0]){
        sortedArr.push(arr1.shift());
    } else {
        sortedArr.push(arr2.shift());
    }
}
}


if(arr1.length){
    sortedArr = sortedArr.concat(arr1);
} else if (arr2.length){
    sortedArr = sortedArr.concat(arr2);
}

return sortedArr; 
}



sortSorted([1,3,4], [2,4,5]);
sortSorted(["apple", "banana", "cowabunga", "tucan"], ["blasphemy", "dreamy", "finally", "starlight"]);


