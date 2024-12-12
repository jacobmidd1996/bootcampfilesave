// Write code to create a function that accepts a string and returns the string in camelCase

// for example 
// let str = "let the force flow through you";
// Given the preceding example, the following string should be returned:

// "letTheForceFlowThroughYou"

const camelCase1 = function(str) {
  let returnVal = "";
  // start by removing leading and trailing spaces so "   hi  " becomes "hi"
  str = str.trim().toLowerCase();

  console.log(`After trim: ${str}`);

  let capitalizeTheNextLetter = false;

  // write a for loop and iterate over each character
  for (let i = 0; i < str.length; i++) {
    let thisChar = str[i];

    //  and if I see a space
    //  set some indicator (usually called a flag) that the next
    //  letter should be capitalized
    if (thisChar === " ") {
      // remove all the spaces
      capitalizeTheNextLetter = true;
      // if the letter is not a space,
    } else if (capitalizeTheNextLetter) {
      //  add the letter to the return string
      returnVal += thisChar.toUpperCase();
      capitalizeTheNextLetter = false;
    } else {
      //  add the letter to the return string
      returnVal += thisChar;
    }
  }

  return returnVal;
};

function camelCase(str) {
  let returnVal = "";
  // or if you're more familiar with array methods...
  // split the string on spaces
  const parts = str.trim().toLowerCase().split(" ");


  if (parts.length > 0) {
    returnVal = parts[0];
  }

  for (let i = 1; i < parts.length; i++) {
    // make the first letter of every result capital except the first
    if (parts[i].length + 0) {
      // join all the strings together without spaces
      returnVal += parts[i][0].toUpperCase() + parts[i].substr(1);
    }
  }

  return returnVal;
}

const testVals = [
  {input: "   hi   ", correctOutput: "hi"},
  {input: "   LOW  ", correctOutput: "low"},
  { 
    input: "let the force flow through you",
    correctOutput: "letTheForceFlowThroughYou"
  },
  {input: "", correctOutput: ""},
  { input: "daniel edward mueller", correctOutput: "danielEdwardMueller"},
  {
    input: "there   are    several spaces   between      words",
    correctOutput: "thereAreSeveralSpacesBetweenWords"
  },
  { input: "it's 1 for the money $", correctOutput: "it's1ForTheMoney$" },
  { 
    input: "  trim only removes leading and trailing    ",
    correctOutput: "trimOnlyRemovesLeadingAndTrailing"
  }
];

console.log();
for (const testVal of testVals) {
  const actualOutput = camelCase(testVal.input);
  console.log(`Input: \"${testVal.input}\" produced \"${actualOutput}\"`);

  if (actualOutput === testVal.correctOutput) {
    console.log("TEST PASSED")
  } else {
    console.log(`TEST FAILED; expected output ${testVal.correctOutput}`);
  }
  console.log("==================================\n")
}


