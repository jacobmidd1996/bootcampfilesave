describe('API Requests', () => {

  // ! Uncomment during demo of incorrect intercept() usage to force all API responses to not be cached
  beforeEach(() => {
    cy.intercept(
      '/api/thought',
      { middleware: true },
      (req) => {
        req.on('before:response', (res) => {
          // force all API responses to not be cached
          res.headers['cache-control'] = 'no-store'
        })
      }
    )
  })

  describe('API Requests', () => {
    it('should GET all thoughts on page load (but this is broken)', () => {
      // go to the homepage
      cy.visit('/')
      // "Spy" on this request. We know the page makes this request, so just check the result
      // ... but we need to actually wait for the result to come back. More code is necessary
      cy.intercept('GET', '/api/thought').its('body[0]').should('have.property', 'thoughtText');
    });
  })

  it('should ACTUALLY GET all thoughts on page load', () => {
    // Do the spy thing
    cy.intercept('GET', '/api/thought').as('getThoughts');
    // go to the page
    cy.visit('/');
    // Be sure to WAIT until we get our thoughts (getThoughts is the alias from the .as(...) above)
    cy.wait('@getThoughts')
    // select the response
      .its('response.body[0].thoughtAuthor')
      // and compare
      .should('equal', 'Max Kanat-Alexander');
  });


  const mockThoughts = [
    {
      _id: '1',
      thoughtText: 'This is a test thought',
      thoughtAuthor: 'testAuthor',
      createdAt: 'January 1, 2024',
    },
  ];

  // BUT! We don't even care about the API for this test. We just want to be sure
  // that the page makes the call... so we mock the response
  it('should GET all thoughts on page load', () => {
    // mocking here! That's a fake response!
    cy.intercept('GET', '/api/thought', mockThoughts).as('myMockedFakeThoughts');
    cy.visit('/');
    cy.wait('@myMockedFakeThoughts')
      .its('response.body')
      // check that we got the mocked response. We're ONLY TESTING THAT OUR PAGE
      // MAKES THE REQUEST WE THINK IT DOES (GET /api/thoughts)
      .should('deep.equal', mockThoughts);
  });
});
