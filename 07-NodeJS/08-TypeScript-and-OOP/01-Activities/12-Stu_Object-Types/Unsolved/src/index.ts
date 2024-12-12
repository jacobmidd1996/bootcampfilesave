// TODO: create a cat object called 'cat' with the following properties: name: string, age: number, pattern: string, isSleepy (optional) : boolean, and siblings (optional) : string[]
const cat: {
  name: string;
  age: number;
  Pattern: string;
  isSleepy?: boolean;
  siblings?: string[];
} = {
  name: "garfield",
  age: 42,
  Pattern: "striped",
  isSleepy: true,
  siblings: ["oddy", "john"],
};
// TODO: console.log the cat object
console.log(cat);
// TODO: console.log the cat's siblings if they exist
if (cat.siblings) {
  console.log(cat.siblings);
} else {
  console.log("no siblings");
}
