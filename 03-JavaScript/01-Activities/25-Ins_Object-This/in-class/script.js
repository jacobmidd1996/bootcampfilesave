// The default keyword 'this' refers to the global object
// In a browser, the global object is the Window

// Logs Window
// console.log(this);

// When the keyword 'this' is used inside of an object like planet, 'this' belongs to that object
let planet = {
  name: 'Earth',
  age: '4.543 billion years',
  isPopulated: true,
  population: '7.594 billion',
  logFacts: function () {
    //Logs 'This planet's name is Earth.'
    console.log(`This planet's name is ${planet.name}.`);
    //Logs 'This planet's age is 4.543 billion years.'
    console.log(`This planet's age is ${planet.age}.`);
  },
  logPopulation: function () {
    if (planet.isPopulated) {
      // Logs 'This planet's population is 7.594 billion.'
      console.log(`This planet's population is ${planet.population}.`);
  	} else {
	    console.log('The planet is unpopulated.');
	  }
    console.log(`this.isPopulated is ${planet.isPopulated}.`); //, but isPopulated is ${isPopulated}`)
  },
  changeName: function(newName) {
    planet.name = newName;
    console.log("You have renamed the planet!");
  }
};

let nextPlanet = planet;

planet = {
  name: "Dan's planet", 
  population: "1",
  isPopulated: true
}

nextPlanet.logFacts();
// console.log(planet);

// planet.population = '8+ billion';

// console.log(planet);

// // Calls object methods
// planet.logFacts();
// planet.logPopulation();

// planet.changeName('Alberta');
// planet.logFacts();
