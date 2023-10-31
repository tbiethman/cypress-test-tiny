describe('baseline functionality', () => {
  beforeEach(() => {
    cy.wait(100)
    console.log('before each')
  })

  it('simple visit', () => {
    cy.visit('https://docs.cypress.io')
    cy.contains('Why Cypress?').should('be.visible')
    cy.contains('Key Differences').eq(0).click()
    cy.wait(2000)
  })

  it('has a passing test', () => {
    cy.wait(500)
    expect(true).to.eq(true)
  })

  it('has a failing test', () => {
    cy.wait(500)
    expect(true).to.eq(false)
  })

  // TODO: skipping for a reason
  it.skip('has a skipped test', () => {
    cy.wait(500)
    expect(true).to.eq(true)
  })

  it('has a flaky test', { retries: 3 }, () => {
    const attempt = cy.state('runnable')._currentRetry

    expect(attempt).to.eq(3)
  })

  it('has another passing test', () => {
    cy.wait(500)
    expect(true).to.eq(true)
  })

  it('new failure', () => {
    cy.wait(2000)
    expect(false).to.eq(true)
  })

  it('another new failure', () => {
    cy.wait(2000)
    expect(true).to.eq(true)
    expect(false).to.eq(true)
  })
})
