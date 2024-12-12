export default class AdvancedMath {

  factorial(value: number) {
    if (value < 0 || (value - Math.floor(value) !== 0)) {
      throw new Error("Number must be a positive integer");
      // THE END!
    }

    let result = 1;

    for (let i = 1; i <= value; i++) {
      result = result * i;
    }

    return result;
  }
}
