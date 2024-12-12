// const debateFactChecks = [ true, true, true ];

// console.log(debateFactChecks);

// debateFactChecks.push(true);

// console.log(debateFactChecks);

// debateFactChecks.push(false);

// console.log(debateFactChecks);

const states = [ "Illinois", "North Carolina", "Florida", "Texas" ];
console.log(states);

let nextState = prompt("What other state have you visited? (or Cancel to quit)");

while (nextState !== null) { // some condition is true
  states.push(nextState);
  console.log(`The states array now has ${states.length} values in it.`);

  nextState = prompt("What other state have you visited? (or Cancel to quit)");
}

console.log("All done!");
console.log(states);


// // using a for loop
// for (let i = 0; i < 50; i++) {
//   const newState = prompt("What other state have you visited? (or Cancel to quit)");
//   console.log(newState);

//   if (newState === null) {// the user doesn't enter a state (newState is null)}
//     console.log("User didn't enter a state! Let's break out of this loop!!!!!");
//     break;
//     // break out of this for loop
//   }
//   states.push(newState);
// }

// console.log("All done!");
// console.log(states);
