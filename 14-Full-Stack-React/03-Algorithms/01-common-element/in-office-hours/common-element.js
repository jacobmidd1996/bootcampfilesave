// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

const commonElement = function(arrA, arrB) {
  /* instead, we can just make an object that contains
  keys for all elements in arrA (only go through)
  arrA one time.
  then, we can go through arrB, and see if the element
  in arrB is in the object created for arrA
  so for inputs
   [11, 222, -3, 4], [5, 6, 7, 8, 9, 4], the answer is 4.
  with the above algorithm
  make this object
  {
     "11": true,
     "222": true,
      "-3": true,
      "4": true
  }
   then check if any of the elements in arrB exist
   in this object ( O(1), aka 'constant time' )
  */
 const transformedObject = {};
 for (let i = 0; i < arrA.length; i++) {
   transformedObject[arrA[i]] = true;
 }

 console.log("==================");
 console.log(arrA);
 console.log(transformedObject);

 for (let i = 0; i < arrB.length; i++) {
  if (transformedObject[arrB[i]] === true) {
    return arrB[i];
  }
 }

  // go through all elements in arrA (for loop)
  // for each element in A, 
  //  go through all elements in arraB (another for loop)
  //    as soon as the element from A (outer loop) equals
  //    one from B (inner loop), return it
  // this is an inefficient algorithm.
  // in the worst case, I have to perform some number
  // of operations arrA.length * arrB.length times.
  // so, if arrA has 20 elements and arrB has 7 elements
  // the worst case is the last elements in each match
  // and we have to run 140 inner for loop cycles
};

// The number 1 is present in both arrays
const arrA = [1, 9, 8, 7];
const arrB = [10, 12, 1, 6, 5];

console.log(commonElement(arrA, arrB));

const arrC = [11, 222, -3, 4];
const arrD = [5, 6, 7, 8, 9, 4];
console.log(commonElement(arrC, arrD));//), the answer is 4.

