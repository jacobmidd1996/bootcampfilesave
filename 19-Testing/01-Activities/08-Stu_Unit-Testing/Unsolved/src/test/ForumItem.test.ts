import ForumItem from '../classes/ForumItem.js';

describe('ForumItem', () => {
  // TODO: Check if we can create a ForumItem and it's the right type.

  describe('Instantiate', () => {
    it('should be an instance of ForumItem class', () => {
      const authorName = 'Jack Doe';
      const text = 'This is some random text';
      const createdOn = '07/15/2024';

      const forumItem = new ForumItem(
        authorName,
        text,
        createdOn
      );

      expect(forumItem).toBeInstanceOf(ForumItem);
    });
  });

  // TODO: Make sure the ForumItem saves the right data when created.

describe('Initialize', () => {
  it('should set properties properly', () => {
    const authorName = 'Jack Doe';
  describe('Initialize', () => {
    it('should set properties properly', () => {
      const authorName = 'Jack Doe';
      const text = 'This is some random text';
      const createdOn = '07/15/2024';

      const forumItem = new ForumItem(
        authorName,
        text,
        createdOn
      );

      expect(forumItem.authorName).toBe(authorName);
      expect(forumItem.text).toBe(text);
      expect(forumItem.createdOn).toBe(createdOn);
    });
  });

  // TODO: // TODO: Check if getMetaData() gives back the correct info about the ForumItem.

describe('getMetaData() method', () => {
  it('should return message with data', () => {
    const authorName = 'Jack Doe';
  describe('getMetaData() method', () => {
    it('should return message with data', () => {
      const authorName = 'Jack Doe';
      const text = 'This is some random text';
      const createdOn = '07/15/2024';
      const expectedMetaData = `Created by ${authorName} on ${createdOn}`;

      const forumItem = new ForumItem(
        authorName,
        text,
        createdOn
      );

      expect(forumItem.getMetaData()).toBe(expectedMetaData);
    });
  });
});
