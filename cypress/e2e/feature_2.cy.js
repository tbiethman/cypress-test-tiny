describe('feature 2', () => {
  it('has a passing test', () => {
    expect(true).to.eq(true)
  })

  it('has a failing test', () => {
    expect(true).to.eq(true)
  })

  it('has a new failing test', () => {
    expect(false).to.eq(true)
  })
})
