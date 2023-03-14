//Winter is coming, you must prepare your ski holidays. 
//The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.
//Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

//my solution:

function numberOfPairs(arr){
    let gloveCount = {}; 
    let pairCount = 0; 

    for(let glove of arr){
        if(glove in gloveCount){
            gloveCount[glove]++;
        } else {
            gloveCount[glove] = 1; 
        }
    }

    for(let key in gloveCount){
        if(gloveCount[key] > 1){
            pairCount += (Math.floor(gloveCount[key]/2));
        }
    }
    return pairCount; 
}