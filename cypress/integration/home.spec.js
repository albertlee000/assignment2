describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081/')
  })

  it('Shows a header', () => {
    cy.get('.vue-title').should('contain', 'World of Book')
  })
  it('Shows a td',()=>{
    cy.get('.lead').should('contain', 'Welcome to the Book Community')
    cy.get('td > :nth-child(2)').should('contain', 'Here are ALL of YOUR book friends')
    cy.get('td > :nth-child(3)').should('contain', 'Enjoy books with us')
  })
  describe('Navi bar', () => {
    it('Shows the required links', () => {
      cy.get('.navbar').find('[data-test=addbtn]')
      cy.get('.navbar-brand').should('contain', 'Book Community')
      cy.get('.navbar-nav:nth-child(1)').within(() => {
        cy.get('.nav-item:first').should('contain', 'Home')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Manage Books')
        cy.get('.nav-item:nth-child(3)').should('contain', 'Add Book')
      })
      cy.get('.navbar-nav:nth-child(2)').within(() => {
        cy.get('.nav-item:first').should('contain', 'Login')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Logout')
      })
    })
  })
  it('Redirects when links are clicked', () => {
    cy.get('[data-test=addbtn] > .nav-link > .fa').click()
    cy.url().should('include', 'http://localhost:8081/#/login')
    cy.get('.navbar').contains('Manage Books').click()
    cy.url().should('include', 'http://localhost:8081/#/login')

  })
})
