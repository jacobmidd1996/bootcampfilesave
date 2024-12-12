// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

const leftRotation = (arr, positions) => {
  // use a loop that goes positions iterations (if positions is 3, then 3 iterations)
  if(!arr || arr.length === 0) return;
  for (let i = 0; i < positions; i++) {
    // take the first element off of the array
    const firstEl = arr.shift();
    console.log(firstEl);
    arr.push(firstEl);
  }
  // put it on the back of the array
};

function checkTestResult(inputArray, positions, expected) {
  console.log(`Checking ${inputArray}...`)
  let disposition;
  leftRotation(inputArray, positions);
  // inputArray is modified as a result of this function
  if (compareArray(inputArray, expected)) {
    disposition = "success!";
  } else {
    disposition = "fail";
  }
  console.log(`The result is ${inputArray}: ${disposition}`);
  return disposition === "success!";
}

function compareArray(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        // if any element doesn't match
        return false;
      }
    }
    // every element matched!
    return true;
  }
  // if the arrays have different lengths...
  return false;
}

const testCases = [
  {
    inArray: [1, 2, 3],
    positions: 2,
    expected: [3, 1, 2]
  },
  {
    inArray: [4, 5, 6, 7, 8, 9],
    positions: 1,
    expected: [5, 6, 7, 8, 9, 4]
  },
  {
    inArray: [10, 11, 12, 13],
    positions: 0,
    expected: [10, 11, 12, 13],
  },
  {
    inArray: [],
    positions: 4,
    expected: []
  }
]

// for (let i = 0; i < testCases.length; i++) {
//   checkTestResult(testCases[i].arg, testCases[i].expected);
// }
testCases.forEach(tc => checkTestResult(tc.inArray, tc.positions, tc.expected));