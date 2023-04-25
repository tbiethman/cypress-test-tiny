describe('feature 2', () => {
  it('has a passing test', () => {
    cy.wait(500)
    expect(true).to.eq(true)
  })

  it('has a failing test', () => {
    cy.wait(500)
    expect(true).to.eq(true)
  })
})
