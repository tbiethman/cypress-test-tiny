describe('baseline functionality', () => {
  // it('has a passing test', () => {
  //   cy.wait(500)
  //   expect(true).to.eq(true)
  // })

  it('has a infrequent flaky test', () => {
    cy.wait(500)
    expect(false).to.eq(true)
  })

  it('has a consistent flaky test', { retries: 3 }, () => {
    const attempt = cy.state('runnable')._currentRetry

    expect(attempt).to.eq(3)
  })

  // // TODO: skipping for a reason
  // it.skip('has a skipped test', () => {
  //   cy.wait(500)
  //   expect(true).to.eq(true)
  // })

  // it('has a consistent flaky test', { retries: 3 }, () => {
  //   const attempt = cy.state('runnable')._currentRetry

  //   expect(attempt).to.eq(3)
  // })

  // it('has another passing test', () => {
  //   cy.wait(500)
  //   expect(true).to.eq(true)
  // })
})
