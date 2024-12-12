// Objects are a collection of properties
const planet = {
  // Properties are made up of key-value pairs
  name: 'Earth',
  age: '4.543 billion years',
  moons: 1,
  isPopulated: true,
  population: '7.594 billion',
  destroy: function() {
    console.log("Oh no it exploded!!!!!!");
  }
};

// To access a property's value that is a string, number or boolean, use the object's name and the associated key
// Uses dot notation and logs 'Earth'
console.log(planet.name);

// Uses bracket notation and logs 'Earth'
console.log(planet['name'], planet['age']);

// console.log(planet.destroy)
planet.destroy();


