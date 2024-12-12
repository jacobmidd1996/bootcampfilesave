// TODO: What are we importing? bult in fs module in node
import fs from "fs";

// TODO: Add comments to explain each of the three arguments of appendFile()
// 1.file-path 2. data to append 3.
fs.appendFile("log.txt", `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // If err is truthy (i.e., it has a value that is not null, undefined, 0, false, or an empty string), it executes the first expression after the ?, which is console.error(err). This means it will log the error to the console.
  // If err is falsy (i.e., it has no value), it executes the second expression after the :, which is console.log('Commit logged!'). This means it will log the message "Commit logged!" to the console.
  err ? console.error(err) : console.log("Commit logged!")
);
