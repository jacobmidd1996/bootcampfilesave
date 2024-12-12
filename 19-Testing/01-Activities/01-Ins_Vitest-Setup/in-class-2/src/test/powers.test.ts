import Powers from '../powers.js';

describe('Powers', () => {
  describe('square', () => {
    it('should return the square of a number', () => {
      // Arrange
      const input = 5;
      const expectedResult = 25;

      const myPowers = new Powers();

      // Act
      const actualResult = myPowers.square(input);
      
      // Assert
      expect(actualResult).toEqual(expectedResult);
    });
  });
});


describe('Powers', () => {
  describe('cube', () => {
    it('should return the cube of a number', () => {
      // Arrange
      const input = 2;
      const expectedResult = 8;

      const myPowers = new Powers();

      // Act
      const actualResult = myPowers.cube(input);

      // Assert
      expect(actualResult).toEqual(expectedResult);
    });
  });
});