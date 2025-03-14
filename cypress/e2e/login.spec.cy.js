describe('Orange HRM Tests', () => {

    const selectorList = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButtooon: "[type='submit']",
      sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
      wrongCredentialAlert: "[role='alert']"
}
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Admin')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButtooon).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Test')
    cy.get(selectorList.passwordField).type('Test')
    cy.get(selectorList.loginButtooon).click()
    cy.get(selectorList.wrongCredentialAlert)
})
})