import colors from "colors";

const person = process.argv[2];
const amount = process.argv[3];

if (amount > 0) {
  console.log(colors.bgGreen(`user entered ${person} and ${amount}.`));
} else {
  console.log(colors.bgRed(`we lost money. :(`));
}
