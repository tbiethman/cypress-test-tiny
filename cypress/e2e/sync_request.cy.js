describe('Repro sync request', () => {
  beforeEach(() => {
    cy.visit('cypress/fixtures/dom.html')
  })

  it('does not hang with sync intercept with response stub', () => {
    cy.get('#sync-request-button').click()
  })

  it.only('does not hang with sync intercept with response stub', () => {
    cy.intercept('https://httpbin.org/post', '{ "foo": "bar" }').as('SyncRequest')

    cy.get('#sync-request-button').click()

    cy.wait('@SyncRequest').then(() => {
      cy.log('request done')
    })
  })

  it('intercepts synchronous request (but hangs)', () => {
    cy.intercept('https://httpbin.org/post', (request) => {
      debugger
      req.headers['TEST_HEADER'] = 'foobar'
    }).as('SyncRequest')

    cy.get('#sync-request-button').click()

    cy.wait('@SyncRequest').then(() => {
      cy.log('request done')
    })
  })
})
