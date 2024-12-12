console.log("Averageyness");

// need to calculate the average of the numbers in an array
// const myArray =  [1, 2, 3, 10];
const myArray = [8, 8, 11];
// const myArray = [];
// const myArray = [867543];
const kids = [
  {
    name: "Billy",
    age: 6
  },
  {
    name: "Jessi",
    age: 8
  },
  {
    name: "Sally",
    age: 13
  }
];

let sum = 0;
for (let i = 0; i < kids.length; i++) {
  sum = sum + kids[i].age;
  // sum += kids[i].age;
}

console.log(sum/kids.length);

// 1 + 2 = 3
// 3 + 3 = 6 
// 6 + 10 = 16

// 16 / 4 = 4 and that's the answer!

// const sumFirstTry = myArray[0] + myArray[1] + myArray[2] + myArray[3];
// console.log(sumFirstTry /myArray.length);

// let goodSum1 = 0;
// for (let i = 0; i < myArray.length; i++) {
//   goodSum1 = goodSum1 + myArray[i];  // sum will be 8
// }

//   console.log(goodSum1 /myArray.length);
// sum will be 14 when we're done


