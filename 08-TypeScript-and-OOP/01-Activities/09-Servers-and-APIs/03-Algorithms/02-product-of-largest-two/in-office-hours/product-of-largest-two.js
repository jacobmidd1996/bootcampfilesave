// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
  // find the largest two elements in the array!
  let largest = arr[0] > arr[1] ? arr[0] : arr[1];
  let secondLargest = arr[0] > arr[1] ? arr[1] : arr[0];

  for (let i = 2; i < arr.length; i++) { // for (x in arr) {...}
    // compare each element to the largest one.
    if (arr[i] > largest) {
    // if it's bigger than the largest one, 
    //   make that element the largest
      largest = arr[i];
      //   and make the secondLargest equal to the old largest
      secondLargest = largest;
    // else if it's bigger than the second largest
    } else {
      if (arr[i] > secondLargest) {
        //   make that element the second largest
        secondLargest = arr[i];
      }
    }
  }
  // or
  // just sort the array and take the first two elements
  
  // arr.sort((a,b) => a - b);
  // console.log(arr);
  // let largest = arr[arr.length - 1];
  // let secondLargest = arr[arr.length - 2] ;


  // return their product
  return largest * secondLargest;
};

let testInput = [10, 20, 9, 6, 3];
console.log(productOfLargestTwo(testInput)); // 10*20 is 200

testInput = [ 5, 5, -10, -20, -100, 1, 2, 3 ]; // 5*5 is 25
console.log(productOfLargestTwo(testInput));

testInput = [-10, -20, -100, 1, 2, 3, 4, 4 ];
console.log(productOfLargestTwo(testInput)); // 4*4 is 16

testInput = [-10, -20, -100, 0];
console.log(productOfLargestTwo(testInput)); //0 * -10 = 0

