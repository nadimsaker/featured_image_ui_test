/// <reference types="cypress" />

describe('Users should be able to use upload images for use in articles.', () => {
    it('The user navigates to the library', () => {
        cy.visit("https://app.welcomesoftware.com/")
        cy.get('.form-control').type("nadimsaker@gmail.com")
        cy.get('#submit-btn').click()
        cy.get('.form-control').type('G*mTy5!cWj4C&9')
        cy.get('#submit-btn').click()
        cy.wait(5000)
        cy.get('.nc-library').click()
    })

    it('The user uploads an image from their local machine to the library', () => {
        cy.visit("/")
        cy.login("nadimsaker@gmail.com",'G*mTy5!cWj4C&9')
        cy.navigateToLibrary()
        cy.get('.display-flex > .ndl-Button--primary > .ndl-Button-label').click()
        cy.wait(5000)

       cy.get('#fsp-fileUpload').attachFile({
           fileName: 'sundarban-day.jpg',
           filePath: "\\images\\sundarban-day.jpg",
           subjectType: 'drag-n-drop' 
       });
       cy.wait(5000)
       cy.get('.cl-AssetUpdateForm-inputs > :nth-child(1) > .ndl-Input > .ndl-Input-field-wrapper > .ndl-Input-field > .ndl-Input-input').click().type('Deer')
       cy.get('.cl-AssetUpdateForm-inputs > :nth-child(2) > .ndl-Input > .ndl-Input-field-wrapper > .ndl-Input-field > .ndl-Input-input').click().type('Sundarban')
       cy.get('.ndl-TextArea-field').click().type('A group of deer are walking in the forest.')
     
       cy.get('.ndl-ButtonGroup > .ndl-Button--primary').click()
  
       cy.wait(3000)
       cy.get('.ndl-ButtonGroup > .ndl-Button--primary').click()

    })

    it('The user opens the uploaded image in the image editor and resizes the image and Saves the resized image', () => {
        cy.visit("/")
        cy.login("nadimsaker@gmail.com",'G*mTy5!cWj4C&9')
        cy.navigateToLibrary()
        cy.get('.thumbnail').first().dblclick()
        cy.get(':nth-child(4) > .ndl-Button-label').click()
        cy.wait(2000)
        cy.get('.sc-fzowVh').click()
        cy.get('#photoeditorsdk-transformScaleWidth').click().clear().type(500)
        cy.get('#photoeditorsdk-transformScaleHeight').click().clear().type(200)
        cy.get('.image-editor-action-buttons > .ndl-Button--primary').click()
    })

    
    it.only('The user creates a new task', () => {
        cy.visit("/")
        cy.login("nadimsaker@gmail.com",'G*mTy5!cWj4C&9')
        cy.get('#create-new > .ndl-Dropdown > .ndl-Button').click()
        cy.get(':nth-child(2) > .ndl-Dropdown-option > .ndl-Option-label > a').click()
        
    })


  })