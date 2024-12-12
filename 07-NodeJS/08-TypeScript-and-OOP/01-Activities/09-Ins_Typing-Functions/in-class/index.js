// ! Regular Functions

// Function Declaration
function declareHello() {
  console.log('Hello, I am a function declaration.');
  console.log('-----------------------------------');
}

// Function Expression
const expressHello = function () {
  console.log('Hello, I am a function expression.');
  console.log('-----------------------------------');
};

// Function must be called to execute
declareHello();
expressHello();

// ES6 Arrow Functions
const deliverMessage = (message) => {
  console.log(message);
};

deliverMessage('Safe Travels!');
