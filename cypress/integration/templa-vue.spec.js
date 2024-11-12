/// <reference types="Cypress" />


describe('Teste form Fale Conosco', function() {

  it('visita pagina e testa title', function() {  
    cy.visit('../src/index.html')
   


    cy.title().should('be.equal', "Central de Atendimento ao Cliente TAT")

  })

})