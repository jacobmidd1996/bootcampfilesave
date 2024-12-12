// Functions are reusable blocks of code that perform a specific task
// This is a function declaration
function declareHello() {
  console.log('Hello, I am a function declaration.');
  console.log('-----------------------------------');

  let i =0;
  for (i = 0; i < 5; i++) {
    if (i === 0) {
      console.log("This is my first time in this loop!");

    } else {
      console.log(`This is my ${i}th time in this loop!`);
    }
  }

  return i;
}

function askUserForFood() {
  // loop around asking a user for food
  // if the user says they are done, then return
  // if the user gives you a food
  //  ask for a recipe that includes the food
  // add it to an array or process it or something
}

// This is a function expression
const expressHello = function () {
  console.log('Hello, I am a function expression.');
  console.log('-----------------------------------');
};

function expressHello() {
  console.log('Hello, I am a function expression.');
  console.log('-----------------------------------');
}

// Functions must be called to execute
// const theReturnFromTheFuction = declareHello();
// // expressHello();
// console.log(theReturnFromTheFuction);

// console.log(`The function returned ${theReturnFromTheFuction}`);

// Functions can be called again to make the block of code execute again

// Functions can take parameters.
// Parameters give a name to the data to be passed into the function
function declareHelloAgain(x, y, z) {
  console.log(`Hello, the values of my parameters are ${x}, ${y}, and ${z}.`);
  console.log('-----------------------------------');
  return;
}

// // Function arguments give parameters their values
// // Here the parameter x is given the value 7 when the function is called
// declareHelloAgain(7, 'Hello', true);

function addTwoValues(a, b) {
  const result = a + b;
  console.log(result);
  return a + b;
}

console.log("Adding!");

const val1 = addTwoValues(2, 4);
// console.log(val1);

// console.log(addTwoValues(100, 35));

// console.log("Another result is " + addTwoValues(-8, 0));
