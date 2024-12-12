// Generic functions
const writeToConsole = (value) => {
    console.log(value);
};
writeToConsole(67890);
writeToConsole("Hello Again");
writeToConsole([4, 5, 6]);
const writeToConsoleUpperCase = (value) => {
    // Will not compile
    // console.log(value.toUpperCase());
};
const organization1 = {
    name: 'Sample Organization',
    location: 'Paris, France',
    members: [111, 222, 333]
};
console.log(organization1); // { name: 'Sample Organization', location: 'Paris, France', members: [ 111, 222, 333 ]}
const organization2 = {
    name: 'Another Organization',
    location: 'Brussels, Belgium',
    members: 'Independent'
};
console.log(organization2); // { name: 'Another Organization', location: 'Brussels, Belgium', members: 'Independent' }
// Generic class
class ArrayBuilder {
    constructor() {
        this._array = [];
    }
    add(value) {
        this._array.push(value);
    }
    writeToConsole() {
        console.log(this._array);
    }
}
const example = new ArrayBuilder();
example.add(1);
example.add(2);
example.writeToConsole(); // [1, 2]
const example2 = new ArrayBuilder();
example2.add('larry');
example2.add('mary');
example2.writeToConsole(); // [one, two]
const coordinate1 = { x: 100, y: 50 };
const coordinate2 = { x: 35, y: 88 };
const coordinate3 = { x: 1.4, y: 1000 };
const example3 = new ArrayBuilder();
example3.add(coordinate1);
example3.add(coordinate2);
example3.add(coordinate3);
example3.writeToConsole();
console.log(`coordinate1: ${typeof coordinate1}`);
console.log(`coordinate2: ${typeof coordinate2}`);
console.log(`coordinate3: ${typeof coordinate3}`);
