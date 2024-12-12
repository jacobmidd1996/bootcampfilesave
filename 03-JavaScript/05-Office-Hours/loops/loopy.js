console.log("looooooop");

// for loop
//    run a certain predefined number of times
// initialize the loop (let i = 0)
for (let i = 0; i < 10; i++) {
  // only run if condition is true (i < 10)
  console.log(`${i}. Dan is cool.`);

  // run the incrementer at the end (i++)
}

const beverages = ["Diet Pepsi", "Water", "Diet Coke", "Iced Tea", "Beer, OK?"];
for (let i = 0; i < beverages.length; i++) {
  console.log("I'm thirsty! I could go for a " + beverages[i] + "!");
  console.log("Dan just drank " + beverages);
}

for (const thisBeverage of beverages) {
  // thisBeverage = "Mountain Dew";  ERROR!
  console.log("Dan just drank " + thisBeverage);
}

let userWantsToAddAnotherEmployee = true;
while (userWantsToAddAnotherEmployee) {
  // ask the user for employee details
  // make an object
  // add the object to the array
  userWantsToAddAnotherEmployee = confirm("Do you want to add another employee?");
}




// while
//    run until some condition is false
let i = 0;
while (i < 10) {
  console.log(`${i}. Dan is sooo cool.`);
  i++;
}


