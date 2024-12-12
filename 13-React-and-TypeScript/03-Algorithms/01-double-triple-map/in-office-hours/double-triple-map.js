// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If an element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element

const doubleTripleMap = function (arr) {
  return arr.map(x => x%2 === 0? x*2: x*3);
};

// function doubleEvenTripleOddTernary(num) {
//   return num % 2 === 0 ? num*2 : num*3;
// }

// const doubleTripleMap = function (arr) {
//   return arr.map(doubleEvenTripleOddTernary);
// };

// function doubleEvenTripleOddIfStatement(num) {
//   if (num % 2 === 0) {
//     return num * 2;
//   } else {
//     return num * 3;
//   }
// }

// const doubleTripleMapWithLongerFunction = function (arr) {
//   return arr.map(doubleEvenTripleOddIfStatement);
// };

// const doubleTripleMapFunctionInline = function (arr) {
//   return arr.map(function (val) {
//     if (val % 2 === 0) {
//       return val * 2;
//     } else {
//       return val * 3;
//     }
//   });
// };

// const doubleTripleMapWithForOfLoop = function (arr) {
//   const resultArr = [];
//   for (const val of arr) {
//     if (val % 2 === 0) { // this is the same as saying if arr[i] is even
//       resultArr.push(2 * val);
//     } else { // we know that arr[i] must be odd
//       resultArr.push(3 * val);
//     }
//   }
//   return resultArr;
// };

// const doubleTripleMapWithRegularForLoop = function(arr) {
//   const resultArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) { // this is the same as saying if arr[i] is even
//       resultArr.push(2*arr[i]);
//     } else { // we know that arr[i] must be odd
//       resultArr.push(3*arr[i]);
//     }
//   }
//   return resultArr;
// };

const tests = [
  {
    in: [1, 2, 3, 4],
    expected: [3, 4, 9, 8]  //1*3, 2*2, 3*3, 4*2
  }, {
    in: [],
    expected: []
  }, {
    in: [34],
    expected: [68]
  }, {
    in: [0, 10, -1, -4],
    expected: [0, 20, -3, -8]
  }, {
    in: [33, 22],
    expected: [99, 44]
  }, {
    in: [1, 2, 3, 4, 34, 0, 10, -1, -4, 33, 22],
    expected: [3, 4, 9, 8, 68, 0, 20, -3, -8, 99, 44]
  }, {
    in: [-2, -1, 0, 1, 2],
    expected: [-4, -3, 0, 3, 4]
  }, {
    in: [1, 9, 15],
    expected: [3, 27, 45]
  }, {
    in: [0, 9, -9],
    expected: [0, 27, -27]
  }
];

for (const testCase of tests) {
  let result = doubleTripleMap(testCase.in);
  let resultString = `FAIL - expected ${testCase.expected}`;
  if (arraysEqual(result, testCase.expected)) {
    resultString = "pass";
  }
  console.log(`doubleTripleMap on ${testCase.in} returned ${result} : ${resultString}`);
}

function arraysEqual(a, b) {
  if (a === b) {
    return true;
  } else if (a.length !== b.length) {
    return false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
}
