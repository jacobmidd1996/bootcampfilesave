// without rest
// const add = (x, y) => x + y;

// const alsoAdd = function(x, y) {
//   return x + y;
// }



// console.log(add(1, 2, 3, 4, 5)); // => 3

// function addFiveThings(x, y, z, p, d) {
//   return x + y + z + p + d;
// }

// console.log(addFiveThings(1, 2, 3, 4, 5)); // => 3


// // 1. rest
// const addRest = function (...nums) {
//   // console.log(Array.isArray(nums)); // can't just call isArray alone. I have to call Array.isArray

//   let sum = 0;
//   for (const num of nums){
//     sum += num; // same as sum = sum + num;
//     // sum = 0 + 1 (that's 1!)
//     // sum = 1 + 1 (that's 2!)
//     // sum = 2 + 4 (that's 6!)
//     // sum = 6 + 5 (that's 11!)
//   }
//   return sum;
// };

// console.log(addRest());
// console.log(addRest(1,5,32,5,6,4,67,7,8));

// // addRest(1); // => 1
// // addRest(3, 3); // => 6
// console.log(addRest(1, 1, 4, 5)); // => 11

// // 2.
// const howManyArgs = (...args) => {
//   return `You passed ${args.length} arguments.`; // point out the template literal
// };

// console.log(howManyArgs(0, 1)); // You have passed 2 arguments.
// console.log(howManyArgs('argument!', null, ['one', 2, 'three'], 4)); // You have passed 4 arguments.

// 1. spread
const dragons = ['Drogon', 'Viserion', 'Rhaegal'];
const weapons = ['dragonglass', ...dragons, 'wildfire']; // notice the spread operator ...dragons

// console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]

const person = {
  name: "Dan",
  hair: "Still has some"
};

console.log("person", person);

const teacher = {
  class: "Software Development",
  // person : person,
  ...person,
  schools: [ "UNCC", "Toronto" ]
};

console.log(teacher);
