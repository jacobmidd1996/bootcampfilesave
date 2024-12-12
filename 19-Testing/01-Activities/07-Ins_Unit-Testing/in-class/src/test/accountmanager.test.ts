import AccountManager from '../AccountManager.js';

describe('Account Manager', () => {

  describe('Add New Account', () => {
    it('should return true for new account added', () => {
      const accountManager = new AccountManager();
      const username = 'username1';

      const result = accountManager.addAccount(username);
      expect(result).toEqual(true);
    });

    it('should add the username to the userList when adding an account', () => {
      // Arrange
      const accountManager = new AccountManager();
      const username = 'username1';

      // Act
      const result = accountManager.addAccount(username);

      // Assert
      expect(accountManager.userList[0]).toEqual(username);
    });
  });

  describe('Add Duplicate Account', () => {
    it('should return false for duplicate account added', () => {
      const accountManager = new AccountManager();
      const username = 'username1';

      let result = accountManager.addAccount(username);
      expect(result).toEqual(true);

      result = accountManager.addAccount(username);
      expect(result).toEqual(false);
    });
  });

  describe('Remove Account', () => {
    it('should return true for account removal', () => {
      const accountManager = new AccountManager();
      const username = 'username1';

      let result = accountManager.addAccount(username);
      expect(result).toEqual(true);

      result = accountManager.removeAccount(username);
      expect(result).toEqual(true);
    });
  });
});
