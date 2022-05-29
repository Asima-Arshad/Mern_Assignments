// Q#1 Write code to sum an array containing numbers.

//sum of array elements using reduce.
const arr = [12 , 34 , 56 , 76 , 87 , 23 , 66];
 const sum = arr.reduce((total,value) => total + value , 0);
 console.log("The sum of the given numbers is " + sum);

//Q#2 Write code to find maximum value from an array of numbers (first using for loop and then using reduce)

// using for loop
 function findMax(arr) {
    let max = 0;

// Traverse array elements from second and compare every element with current max. 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
     
  return max;
}
console.log("Using for loop, largest number in given array is " + findMax(arr));





 