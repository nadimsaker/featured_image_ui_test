// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

Cypress.Commands.add('login', (email, password) => {
    cy.get('.form-control').type(email)
    cy.get('#submit-btn').click()
    cy.get('.form-control').type(password)
    cy.get('#submit-btn').click()
    cy.wait(5000)
})



Cypress.Commands.add('navigateToLibrary', (email, password) => {
    cy.get('.nc-library').click()
})


Cypress.Commands.add('createNewTask', (title, startDate, dueDate) => {
    cy.get('#create-new > .ndl-Dropdown > .ndl-Button').click()
    cy.get(':nth-child(2) > .ndl-Dropdown-option > .ndl-Option-label > a').click()
    cy.get('.tsk-TaskForm > :nth-child(1) > :nth-child(1) > .ndl-FormControl > .ndl-Input > .ndl-Input-field-wrapper > .ndl-Input-field > .ndl-Input-input').clear().type(title)
    cy.get(':nth-child(2) > .ndl-FormControl > .ndl-Select > .ndl-Select__control > .ndl-Select__indicators > .ndl-Select__indicator > .nc-icon > .nc-icon-wrapper > svg').click()
    cy.get('.ndl-Select__menu-list > :nth-child(2)').click()
    cy.get(':nth-child(1) > .ndl-FormControl > .ndl-DatePicker > .ndl-DayPickerInput > .ndl-DatePicker-wrapper > .ndl-DatePicker-input').click()
    cy.get(':nth-child(1) > .ndl-FormControl > .ndl-DatePicker > .ndl-DayPickerInput > .ndl-DatePicker-wrapper > .ndl-DatePicker-input').clear().type(startDate)
    cy.get(':nth-child(2) > .ndl-FormControl > .ndl-DatePicker > .ndl-DayPickerInput > .ndl-DatePicker-wrapper > .ndl-DatePicker-input').click()
    cy.get(':nth-child(2) > .ndl-FormControl > .ndl-DatePicker > .ndl-DayPickerInput > .ndl-DatePicker-wrapper > .ndl-DatePicker-input').clear().type(dueDate)
    cy.get(':nth-child(3) > .ndl-Grid > .ndl-Grid-container > [data-size="full"] > .ndl-FormControl > .ndl-Select > .ndl-Select__control > .ndl-Select__value-container').click()
    cy.get('.ndl-Select__menu-list > :nth-child(2)').click()
    cy.get('.tsk-CreatePageActions > .ndl-Button--primary').click()
})
/**
 *  cy.get('#create-new > .ndl-Dropdown > .ndl-Button').click()
        cy.get(':nth-child(2) > .ndl-Dropdown-option > .ndl-Option-label > a').click()
        cy.get('.tsk-TaskForm > :nth-child(1) > :nth-child(1) > .ndl-FormControl > .ndl-Input > .ndl-Input-field-wrapper > .ndl-Input-field > .ndl-Input-input').clear().type('Resize the attached image')
        cy.get(':nth-child(2) > .ndl-FormControl > .ndl-Select > .ndl-Select__control > .ndl-Select__indicators > .ndl-Select__indicator > .nc-icon > .nc-icon-wrapper > svg').click()
        cy.get('.ndl-Select__menu-list > :nth-child(2)').click()
        cy.get(':nth-child(1) > .ndl-FormControl > .ndl-DatePicker > .ndl-DayPickerInput > .ndl-DatePicker-wrapper > .ndl-DatePicker-input').click()
        cy.get(':nth-child(1) > .ndl-FormControl > .ndl-DatePicker > .ndl-DayPickerInput > .ndl-DatePicker-wrapper > .ndl-DatePicker-input').clear().type('Mar 23, 2022')
        cy.get(':nth-child(2) > .ndl-FormControl > .ndl-DatePicker > .ndl-DayPickerInput > .ndl-DatePicker-wrapper > .ndl-DatePicker-input').click()
        cy.get(':nth-child(2) > .ndl-FormControl > .ndl-DatePicker > .ndl-DayPickerInput > .ndl-DatePicker-wrapper > .ndl-DatePicker-input').clear().type('Mar 31, 2022')
        cy.get(':nth-child(3) > .ndl-Grid > .ndl-Grid-container > [data-size="full"] > .ndl-FormControl > .ndl-Select > .ndl-Select__control > .ndl-Select__value-container').click()
        cy.get('.ndl-Select__menu-list > :nth-child(2)').click()
        cy.get('.tsk-CreatePageActions > .ndl-Button--primary').click()
 * 
 * 
 * 
 * 
 * 
 * 
 */