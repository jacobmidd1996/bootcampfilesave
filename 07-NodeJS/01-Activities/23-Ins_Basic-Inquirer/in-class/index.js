import inquirer from 'inquirer';
import colors from 'colors';

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What is your favorite color?',
      name: 'color',
      choices: ['red', 'blue', 'green', 'yellow', 'cyan', 'magenta'],
    },
  ])
  .then((answers) =>
    console.log(
      colors[answers.color](`Your favorite color is ${answers.color}!`)
    )
  );


  // colors.red("Hello")
  // colors["red"]("Hello")

const x = 100;
const y = "dogs";
console.log("Oh no! " + x + " " + y + "!");
