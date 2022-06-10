module.exports = {
  e2e: {
    supportFile: 'cypress/support/e2e (1).js',
    // this also fails, due to some logic we have to work around windows paths.
    // we think the escape characters are path separators and replace them.
    // supportFile: 'cypress/support/e2e \\(1\\).js',
    setupNodeEvents(on, config) {},
  },
}
