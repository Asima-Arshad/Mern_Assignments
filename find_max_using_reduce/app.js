
//find max using reduce method

const arr = [12 , 34 , 56 , 76 , 87 , 23 , 66];
const output= arr.reduce(function(max, current){
    if (current > max) {
        max = current;        
    }
    return max;
}, 0);

console.log("Using reduce, max number in given array is " + output);