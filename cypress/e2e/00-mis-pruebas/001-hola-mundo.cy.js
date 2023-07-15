
//c:\Users\Mauricio Bessón\OneDrive\Documents\Programación\Cypress.io\001-test-cypress
// https://github.com/mauribesson/Cypress-101-Practicas.git

describe('Practica de Cypress Automation 101', () => {
    beforeEach(() => {
        //cy.visit('https://demoqa.com/')
        cy.visit('https://demoqa.com/automation-practice-form')
    })

    /*it('TC001_Acceso', () => {
        let app = cy.get('#app').should()
        console.log('Selector de APP', app)
        cy.get('header > a > img')
    })*/

    it('TC 001 - Accesos a formulario', () => {
      cy.get('h5').should('have.text', 'Student Registration Form')      
    })

    it('TC 002 - Ingresar Nombre', () => {
    //Setear priem er nombre
      cy.get('#firstName').type("Santiago")
    })

    it('TC 003 - Ingresar Apellido', () => {
      cy.get('#lastName').type("López")
    })

    it('TC 004 - Ingresar email', () => {
      cy.get('#userEmail').type("santiago.lopez.test@mail-test.com")     
    })

    it('TC 005 - Seleccionar Sexo Masculino', () => {
      cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
    })
})