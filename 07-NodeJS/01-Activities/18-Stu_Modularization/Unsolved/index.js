// TODO: Import `basicmath.js`
import mathFunction from "./basicmath.js";
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2];
const num1 = parseInt(process.argv[3]);
const num2 = +process.argv[4];
console.log(operation, num1, num2);
let result;
// if (operation === "difference") {
//   result = mathFunction.difference(numOne, numTwo);
//   console.log(result);
// } else if (operation === "sum") {
//   result = mathFunction.sum(numOne, numTwo);
//   console.log(result);
// } else if (operation === "quotient") {
//   result = mathFunction.quotient(numOne, numTwo);
//   console.log(result);
// } else if (operation === "product") {
//   result = mathFunction.product(numOne, numTwo);
//   console.log(result);
// } else {
//   console.log("Unsupported operation.")
// }
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
// if (operation === "sum") {
//   console.log()
// } else if (operation === "difference")
switch (operation) {
  case "sum":
    result = mathFunction.sum(numOne, numTwo);
    break;
  case "difference":
    result = mathFunction.difference(numOne, numTwo);
    break;
  case "product":
    result = mathFunction.product(numOne, numTwo);
    break;
  case "quotient":
    result = mathFunction.quotient(numOne, numTwo);
    break;
  default:
    console.log("Unsupported operation.");
    break;
  // case...
}
console.log(result);
