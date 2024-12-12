// fs is a Node standard library package for reading and writing files
import fs from 'fs';

// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
// fs.readFile('data.csv', 'utf8', (a, b) => {
//   console.log("error is " + a);
//   a ? console.log(a) : console.log(b);
// }
// );

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

fs.writeFile('log.txt', "abc\ndef\nhijkl\nhello, boogies",  (err) =>
  err ? console.error(err) : console.log('Success!')
);
