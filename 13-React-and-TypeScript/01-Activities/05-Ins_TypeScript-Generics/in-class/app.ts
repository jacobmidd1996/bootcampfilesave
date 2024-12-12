// Generic functions

const writeToConsole = <T>(value: T) => {
  console.log(value);
} 

writeToConsole(67890);
writeToConsole("Hello Again");
writeToConsole([4, 5, 6]);

const writeToConsoleUpperCase = <T>(value: T) => {
  // Will not compile
  // console.log(value.toUpperCase());
} 


// Generic types

type Organization<T> = {
	name: string;
	location: string;
	members: T;
}

const organization1: Organization<(number)[]> = {
	name: 'Sample Organization',
	location: 'Paris, France',
	members: [111, 222, 333]
}

console.log(organization1); // { name: 'Sample Organization', location: 'Paris, France', members: [ 111, 222, 333 ]}

const organization2: Organization<(string)> = {
  name: 'Another Organization',
  location: 'Brussels, Belgium',
  members: 'Independent'
}

console.log(organization2); // { name: 'Another Organization', location: 'Brussels, Belgium', members: 'Independent' }


// Generic class

class ArrayBuilder<X> {
	private _array: X[] = [];

	add(value: X): void {
		this._array.push(value);
	}

	writeToConsole(): void {
		console.log(this._array);
	}
}

const example = new ArrayBuilder<number>();
example.add(1);
example.add(2);
example.writeToConsole(); // [1, 2]

const example2 = new ArrayBuilder<string>();
example2.add('larry');
example2.add('mary');
example2.writeToConsole(); // [one, two]

type Coordinate = {
	x: number,
	y: number
};

const coordinate1: Coordinate = { x: 100, y: 50 };
const coordinate2: Coordinate = { x: 35, y: 88 };
const coordinate3 = { x: 1.4, y:1000};

const example3 = new ArrayBuilder<Coordinate>();
example3.add(coordinate1);
example3.add(coordinate2);
example3.add(coordinate3);
example3.writeToConsole();

console.log(`coordinate1: ${typeof coordinate1}`);
console.log(`coordinate2: ${typeof coordinate2}`);
console.log(`coordinate3: ${typeof coordinate3}`);

