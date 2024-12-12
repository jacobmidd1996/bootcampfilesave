export default class Validate {
  isValidUsername(username: string) {
    // TODO: Write code that checks if the username is less than 8 characters and returns false if so.
    describe("Username Length", () => {
      it("should return false for username less than 8 characters", () => {
        const validate = new Validate();
        const result = validate.isValidUsername("user");
        expect(result).toEqual(false);
      });
    });

    // TODO: Write code the checks if the username contains all lowercase characters.
    // It should return true if it does, and false if not.
    describe("Username all lower case", () => {
      it("should return false for username not containing all lower case characters", () => {
        const validate = new Validate();
        const result = validate.isValidUsername("Username123");
        expect(result).toEqual(false);
      });
    });

    // This regex pattern makes sure that a provided string is all lowercase
    const pattern = /^[a-z]*$/;
  }

  isValidPassword(password: string) {
    // TODO: Write code that checks if the password is less than 8 characters and returns false if so.
    describe("Password Length", () => {
      it("should return false for password less than 8 characters long", () => {
        const validate = new Validate();
        const result = validate.isValidPassword("pass");
        expect(result).toEqual(false);
      });
    });

    // TODO: Write code the checks if the password contains at least 1 uppercase, lowercase, and number.
    // It should return true if it does, and false if not.
    describe("Password Uppercase", () => {
      it("should return false if the password does not contain at least 1 uppercase character", () => {
        const validate = new Validate();
        const result = validate.isValidPassword("password123");
        expect(result).toEqual(false);
      });
    });

    // This regex pattern makes sure that a provided string has at least 1 uppercase, lowercase, and number.
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  }
}
