
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

    it('Accesos a formulario', () => {
      cy.get('h5').should('have.text', 'Student Registration Form')      
    })

    it('Nombre', () => {
    //Setear priem er nombre
      cy.get('#firstName').type("Santiago")
    })

    it('Apellido', () => {
      cy.get('#lastName').type("Lopez")
    })
})