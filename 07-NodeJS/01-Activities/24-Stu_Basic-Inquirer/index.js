import inquirer from "inquirer";
import colors from "colors";

const questions = [
  {
    type: "input",
    message: "What text would you like to log?",
    name: "textTheUserWantsToPrint",
  },
  {
    type: "list",
    message: "What color do you want the text to print in?",
    name: "usersColor",
    choices: ["red", "blue", "green", "yellow", "cyan", "magenta"],
  },
];

function handleInquirerResponse(resp) {
  console.log(colors[resp.usersColor](resp.textTheUserWantsToPrint));
}

inquirer.prompt(questions).then(handleInquirerResponse);
