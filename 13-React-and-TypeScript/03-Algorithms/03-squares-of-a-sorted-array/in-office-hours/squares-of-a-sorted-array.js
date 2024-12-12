// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

const sortedSquares = function(arr) {
  /* iterate over input array (arr), and generate a new array
    that contains the squares of the items in the original array
    (sounds like a job for map!)
    */
  // const squares = arr.map(x => x * x);

    // Then, sort the result array and return it
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

  const squares = arr.map(x => x * x).sort((a,b) => a - b);

  return squares;
};


const testInput = [-4, -1, 0, 3, 10];
const expectedOutput = [0, 1, 9, 16, 100];

const actualOutput = sortedSquares(testInput);

console.log(`Expected ${expectedOutput}`);
console.log(`Received ${actualOutput}`);
