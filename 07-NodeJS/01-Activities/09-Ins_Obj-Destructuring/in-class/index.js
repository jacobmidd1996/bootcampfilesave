const char1 = {
  name: 'Arya Stark',
  parents: ['Eddard Stark', 'Catelyn Stark'],
};

// // In the past, if we wanted to pull off an object's property we'd have to do something like this:

// const aryaName = char1.name;
// const aryaParents = char1.parents;

// console.log(aryaName); // logs `"Arya Stark"`
// console.log(aryaParents); // logs `["Eddard Stark", "Catelyn Stark"]`

// Now with ES6 object destructuring syntax, we can do this:


// const { kids, attitude } = char2;

// // console.log(name); // logs `"Jaime Lannister"`
// // console.log(parents); // logs `["Tywin Lannister", "Joanna Lannister"]`
// console.log(kids);
// console.log(attitude);

// // // We can also rename our destructured properties like so:
// const { name: char2Name } = char2;
// console.log(char2Name); // logs `"Jaime Lannister"`

// // We can also destructure parameters using the same feature. e.g. previously we might have done something like this:

// const logCharacter = (character) =>
//   console.log(
//     `${character.name}'s parents are: ${character.parents[0]} and ${character.parents[1]}.`
//   );

// logCharacter(char1);

// // But now we can do this:

const char2 = {
  name: 'Jaime Lannister',
  ancestors: ['Tywin Lannister', 'Joanna Lannister'],
  attitude: 'rich guy with no cares',
  home: {
    style: 'castle',
    roomCount: 42,
    smell: 'dank'
  },
  kids: 0
};

const {smell} = char2.home;

console.log("It smells of " + smell);

const betterLogCharacter = ({ name, ancestors }) =>
  console.log(`${name}'s parents are: ${ancestors[0]} and ${ancestors[1]}.`);

betterLogCharacter(char2);

// We can also use array destructuring to pull off an array's elements
const locations = ['Winterfell', 'Casterly Rock', 'Kings Landing', 'The Wall', 'That bad guys dog dungeon'];
const [a, b, c] = locations;

console.log(a); // logs `"Winterfell"`
console.log(b); // logs `"Casterly Rock"`
console.log(c); // logs `"Kings Landing"`
