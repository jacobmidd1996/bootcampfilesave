// ! Typed Functions

// The parameters and return value types are defined
const whatCarDoYouDrive = function(model: string): void {
  console.log(`I drive a ${model}.`);
}

const whatBoatDoYouSkipper = (model:string) : void => console.log("I'm the captain now of a " + model);

// ["Dan", "Matt", "River"].forEach(x => console.log(`Call me ${x}`));

whatCarDoYouDrive("Toyota Corolla");


whatCarDoYouDrive('Honda Element');
// whatCarDoYouDrive(100);

// Same applies with multiple parameters
const subtract = function(num1: number, num2: number): number {
    return num1 - num2;
}

const dansGreatFunction = function(x: number, y: string, z: (boolean | number)) : string[] {
  // some function that returns an array of strings
  return ["x", "y", "zed is dead"];
}

const difference = subtract(42, 33);

console.log(difference);

// The function can return a different type than the parameters
const packingForATrip = (
  item1: string,
  item2: string,
  item3: string
): string[] => {
  const suitcase: string[] = [];

  suitcase.push(item1);
  suitcase.push(item2);
  suitcase.push(item3);

  return suitcase;
};

const luggage: string[] = packingForATrip('clothes', 'phone', 'toothbrush');

console.log(luggage);
