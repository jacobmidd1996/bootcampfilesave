import AdvancedMath from '../advancedmath.js';

describe('Advanced Math', () => {
  describe('Factorial', () => {
    it('should return 1 for input of 0', () => {
      const advancedmath = new AdvancedMath();
      const result = advancedmath.factorial(0);
      expect(result).toEqual(1);
    });

    it('should return 1 for input of 1', () => {
      const advancedmath = new AdvancedMath();
      const result = advancedmath.factorial(1);
      expect(result).toEqual(1);
    });

    it('should return 120 for input of 5', () => {
      const advancedmath = new AdvancedMath();
      const result = advancedmath.factorial(5);
      expect(result).toEqual(120);
    });

    it('should throw exception for input of negative number', () => {
      const advancedmath = new AdvancedMath();
      const result = advancedmath.factorial(-5);
      expect(result).toThrow();
    });

    it('should return 24 for an input of 4', () => {
      // Arrange
      const param = 4;
      const expectedOutput = 24;

      const advancedmath = new AdvancedMath();

      // Act
      const result = advancedmath.factorial(4);

      // Assert
      expect(result).toEqual(expectedOutput);
    });

  });
});
