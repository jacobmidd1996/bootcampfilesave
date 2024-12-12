// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {
  let returnVal = "";
  // you can get a character at a position (index) in a string the same
  // way you can get an element from an array: using []

  // keep putting each next letter at the start of the string
  // for the string ABMNYZ
  // after the first iteration, return val is
  // "A" + "" =====> "A"
  // after the second iteration, it is
  // "B" + "A" =====> "BA"
  // after the third iteration...
  // "M" + "BA" ======> "MBA"
  // "N" + "MBA" =====> "NMBA"
  // etc
  for (let i = 0; i < str.length; i++) {
    returnVal = str[i] + returnVal;
    // console.log(`The element at position ${i} is ${str[i]}`);
  }

  return returnVal;
};


// takes input and expected output, returns true if test passed
function checkTestResult(input, expected) {
  let disposition;
  let result = reverse(input);
  if (result === expected) {
    disposition = "success!";
  } else {
    disposition = "fail";
  }
  console.log(`The result of reversing ${input} is ${result}: ${disposition}`);
  return disposition === "success!";
}

const testCases = [
  {
    arg: "just keep swimming",
    expected: "gnimmiws peek tsuj"
  },
  {
    arg: "",
    expected: ""
  },
  {
    arg: "123",
    expected: "321"
  },
  {
    arg: "Able was I ere I saw elbA",
    expected: "Able was I ere I saw elbA"
  },
  {
    arg: "cheeseBorger",
    expected: "regroBeseehc"
  }
]

// for (let i = 0; i < testCases.length; i++) {
//   checkTestResult(testCases[i].arg, testCases[i].expected);
// }
testCases.forEach(tc => checkTestResult(tc.arg, tc.expected));