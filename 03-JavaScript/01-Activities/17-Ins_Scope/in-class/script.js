// // A variable declared in global scope is available to all functions
let hello = 'Hello';

// function sayHello() {
//   console.log(hello);
// }

// const sayHelloAgain = function () {
//   console.log(hello);
// };

// sayHello();
// sayHelloAgain();

// A variable declared in local scope is only available to that function
function sayGoodbye() {
  const goodbye = 'Goodbye';
  console.log(goodbye);
  hello = "HELLLLLLLLLOOOOOOOO";
}

sayGoodbye();
console.log(hello);

//This will throw an error
// const sayGoodbyeAgain = function () {
//   console.log(goodbye);
// };



// // Shadowing happens when the same variable is used in the local and global scope
// const shadow = 'Hello';
// console.log(shadow);

// // Logs 'Hello'
// function sayWhat() {
//   console.log(shadow);
// }

// //Logs 'Goodbye'
// const sayWhatAgain = function () {
//   const shadow = 'Goodbye';
//   console.log(shadow);
// };

// sayGoodbye();
// sayWhat();
// sayWhatAgain();
