// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

const characterCount = function (str) {
  // create a new object
  const returnVal = {};

  // loop through each character in the given string
  // strings sometimes behave like arrays in the following ways:
  //   when you loop over the items in a string using a for...of
  //     loop, the iteration uses the characters in the string
  //   ALSO, strings can be indexed like arrays using []
  //     so if you have a variable that contains the string "zyxwv"
  //        then index 2 of that string (str[2]) would be 'x';
  for (const c of str) {
    //  create a new key for each character in the string.
    //    k in obj evaluates to true if obj has a key called k
    //  if the character is already a key in the object, then
    if (c in returnVal) {
      //    increase its value by 1
      returnVal[c]++;
    } else {
      //  else add the key to the object, with a value of 1
      returnVal[c] = 1;
    }
    //  In this way, we can count the number of times each
    //    character appears in the string
  }
  
  return returnVal;
};

const testString = "Hello World!";
const resultObj = characterCount(testString);
console.log(resultObj);
