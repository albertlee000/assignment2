describe('Login and Logout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081/#/login')
  })

  it('login', () => {
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
      .type('qqq')
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner')
      .type('123456')
    cy.get('.el-button').click()
    cy.get('[data-test=addbtn] > .nav-link > .fa').click()
    cy.visit('http://localhost:8081/#/books')
  })
  it('logout',()=>{
    cy.get('.ml-auto > :nth-child(2) > .nav-link > .fa').click()
    cy.visit('http://localhost:8081/#/books')
    cy.get('.el-message__content').should('contain','You can enter it after login！')
  })
})
