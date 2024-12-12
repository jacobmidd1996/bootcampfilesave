
// 1.

// forEach is a functional way of iterating through an array without a for-loop

// moviePatrons.forEach((patron) => console.log(patron.age));

// moviePatrons.forEach(function(patron) {
//   return console.log(patron.name);
// })

// for (let i = 0; i < moviePatrons.length; i++) {
//   console.log(moviePatrons[i].age);
// }
// 2.




// Filter returns a new array containing only elements whose callback returns a truthy value

// const canWatchRatedR = moviePatrons.filter((patron) => patron.age >= 17);

// console.log(canWatchRatedR);

// // 3.

// // Map returns a brand new array the same length as the first. Each element is passed into the callback.
// // Whatever is returned from the callback at each iteration is what goes into that index of the new array

const moviePatrons = [
  { name: 'Tom', age: 16 },
  { name: 'Ashley', age: 31 },
  { name: 'Sarah', age: 18 },
  { name: 'Alvin', age: 22 },
  { name: 'Cherie', age: 14 },
  { name: 'Malcolm', age: 15 },
];

// const tickets = moviePatrons.map(movieGoer => `${movieGoer.name}'s ticket. :)`);
// console.log(tickets);

const tickets = moviePatrons.map((patron) => {
  const ticket = {
    name: patron.name,
    rating: "R"
  };
  // Do everything else the same
  if (patron.age < 17) {
    ticket.restriction = "MUST BE ACCOMPANIED BY ADULT";
  }
  if (patron.age >=21) {
    ticket.ad = "Enjoy a drink at our fully stocked in-house bar.";
  }
  // Be sure to return the new obj, not the parameter
  return ticket;
});

console.log('Movie Patrons: ');
console.log(moviePatrons);

console.log('\nCarded Movie Patrons: ');
console.log(tickets);
