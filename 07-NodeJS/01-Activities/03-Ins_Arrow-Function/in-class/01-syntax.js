// All of the `createGreeting` functions are equivalent
function sayHeyo() {
  console.log("Heyo.");
  console.log("Ahoy!");
}

sayHeyo();

// Function Expression
const createGreeting = function (message, name) {
  return `${message}, ${name}!`;
};

console.log(createGreeting("Ciao", "Bella"));
console.log(createGreeting("Bonjour", "Ma petit croissant"));

// We can safely swap out function expressions with arrow functions most of the time
const createGreeting2 = (message, name) => {
  return `${message}, ${name}!`;
};

console.log(createGreeting2("Sup", "Dog"));

// // If the arrow function body contains only one expression, we can omit the curly braces and auto return it
const createGreeting3 = (message, name) => `${message}, ${name}!`;

console.log(createGreeting3("Bom dia", "Ceres"));

const greetx = function(greeting) {
  return greeting + "!!!!!!!!";
}
// If an arrow function only has one parameter, we can omit the parens () around the single parameter
const greet = greeting => greeting + "!!!!!!!!!";

const myString = greet("This is an arrow function. I hope you like it. Also, Hi.");
console.log(myString);

// // We call arrow functions the same way as we call regular functions
// const greeting = createGreeting('Hello', 'Angie');

// // Logs "Hello, Angie!";
// greet(greeting);
