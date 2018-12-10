describe('Login and Book operations', () => {
  //need to login first and get the authority to enter books list
  it('should login first ', function () {
    cy.visit('http://localhost:8081/#/login')
    cy.wait(10000)
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
      .type('qqq')
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner')
      .type('123456')
    cy.get('.el-button').click()
    cy.get('[data-test=addbtn] > .nav-link > .fa').click()
  });
  //add a new book for deleting
  it('should add a book for deleting ', function () {
    cy.get(':nth-child(1) > .form__input').type('sun&beach')
    cy.get(':nth-child(2) > .form__input').type('asdad')
    cy.get(':nth-child(3) > .form__input').type('qwdhiasdihasd')
    cy.get(':nth-child(4) > .btn').click()
    cy.wait(3000)
  });
  //delete the new book
  it('delete a book', () => {
    cy.visit('http://localhost:8081/#/books')
    cy.wait(10000)
    cy.get(':nth-child(10) > :nth-child(2)').should('contain','sun&beach')
    cy.get(':nth-child(10) > :nth-child(3)').should('contain','asdad')
    cy.get(':nth-child(10) > :nth-child(4)').should('contain','qwdhiasdihasd')
    cy.get(':nth-child(10) > :nth-child(6) > .fa').click()
    cy.wait(1500)
    cy.get('.swal2-confirm').click()
    cy.wait(1500)
    cy.get('.swal2-confirm').click()
  });

})
