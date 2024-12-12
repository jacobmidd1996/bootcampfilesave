import fs from ('fs');
// returns an array of command line arguments
console.log(process.argv);

// console.log(process);

const amount = process.argv[2];
const description = process.argv[3];

console.log(`Adding a transaction of $${amount} with a description of ${description} to my budget file.`);

fs.writeFile("dans_bud")
// console.log(`Selecting ${numberOfNamesToSelect} names.`);
// console.log(`Excluding names that begin with ${exclusions}.`)

// for (let i = 0; i < num)
// console.log('abc');

// arguments passed from the command line are accessed by index
// console.log(process.argv[2]);
