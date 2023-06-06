describe('spec_2', () => {
  before(() => {
    console.log('beforeAll 1')
  })

  after(() => {
    console.log('afterAll 1')
  })
  
  context('context 1', () => {
    after(() => {
      console.log('afterAll 2')
    })  

    beforeEach(() => {
      console.log('beforeEach 1')
    })

    beforeEach(() => {
      console.log('beforeEach 2')
    })

    beforeEach(() => {
      console.log('beforeEach 3')
    })

    afterEach(() => {
      console.log('afterEach 1')
    })

    it('has a passing test', () => {
      expect(true).to.eq(true)
    })  

    it('has a failing test', () => {
      expect(true).to.eq(false)
    })  
  })
})
