describe('a', () => {
  it('has a passing test', () => {
    cy.wait(5000)
    expect(true).to.eq(true)
  })

  it('has a failing test', () => {
    cy.wait(5000)
    expect(true).to.eq(true)
  })

  it('has a new failing test', () => {
    cy.wait(5000)
    expect(false).to.eq(true)
  })

  it('new failure', () => {
    cy.wait(2000)
    expect(false).to.eq(true)
  })

  it('another new failure', () => {
    cy.wait(2000)
    expect(false).to.eq(true)
  })
})
