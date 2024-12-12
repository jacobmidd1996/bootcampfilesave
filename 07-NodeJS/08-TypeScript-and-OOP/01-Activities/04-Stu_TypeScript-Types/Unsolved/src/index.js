let one = 64.55;
let two = "Howdy!";
const three = "656302";
const four = 64;
const five = false;
const six = null;
let seven;

/*

TypeScript attempts to infer the type of a variable based on the value assigned to it.

JavaScript also has a `typeof` operator that can be used to determine the type of a variable.

Insert comments below to explain what the TypeScript type of each variable would be, as well as what each type would be logged to the console by JavaScript.

For example:

let hello = 'world';

console.log(typeof hello); // Logs string, and the TypeScript type would also be string.

*/

// TODO JS/TS number
console.log(typeof one);

// TODO JS/TS string
console.log(typeof two);

// TODO JS/TS string
console.log(typeof three);

// TODO  JS/TS number
console.log(typeof four);

// TODO Boolean
console.log(typeof five);

// TODO  JS object/ TS null
console.log(typeof six);

// TODO any JS undefined/ TS any
console.log(typeof seven);

// Reassigns variables
one = "Hello!";
two = false;
seven = 23;

// TODO JS/TS string
console.log(typeof one);

// TODO Boolean
console.log(typeof two);

// TODO JS/TS number
console.log(typeof seven);
