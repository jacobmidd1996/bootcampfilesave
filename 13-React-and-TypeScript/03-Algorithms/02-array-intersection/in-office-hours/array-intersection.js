// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

/*
given 
var arr1 = [8, 88, 8, 90, 91, 8];
var arr2 = [90, 8, 8, 15, 3];

create an object that has the frequency of every element in arr1 - iterate over arr1, and build the object as follows:
O(n)
if the current element is not in the frequency object,
  add it as a key with a value of 1
else
  increase the value related to that key by 1

O(m)
do the same with arr2.

O(n)
go through all the keys in the first frequency object

O(1)
look up the associated value in the second frequency object

O(n)
add the minimum number of those keys to the output array

return the result

WHY? This is more efficient than looping through the second array once for every element in the first array
That would be O(m*n)

This solutions is O (m+n)
*/

const arrayIntersection = function(arr1, arr2) {

};


