/// <reference types="cypress" />
///<reference types="cypress-iframe" />

import 'cypress-iframe';

describe('Users should be able to use upload images for use in articles.', () => {
    beforeEach(() => {

        cy.visit("/")
        cy.login("nadimsaker@gmail.com",'G*mTy5!cWj4C&9')
      
      })
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

    
    it('The user creates a new task', () => {
        cy.visit("/")
        cy.login("nadimsaker@gmail.com",'G*mTy5!cWj4C&9')
        cy.get('#create-new > .ndl-Dropdown > .ndl-Button').click()
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
    })

    
    it.only('The user adds a new article to the newly created task', () => {

        cy.get('.nc-plan > .nav-icon-wrapper > svg').click()
        cy.get('.ndl-SearchBar-collapsed > .ndl-FormControl > .ndl-Input > .ndl-Input-field-wrapper > .ndl-Input-field > .ndl-Input-input').click().type('Resize the attached image')
        cy.wait(3000)
        cy.get('.ag-row-odd > .ag-cell > .ag-react-container > .ndl-GroupCellWrapper > .ndl-GroupCellWrapper-inner-container > .uni-TitleCell > .uni-TitleCell-titleWrapper > .uni-TitleCell-titleContainer > a > .uni-TitleCell-title').click()
        cy.get('.left-pane > .ndl-Tabs > :nth-child(2) > .ndl-Tabs-option > .ndl-Option-label').click()
        cy.get('.content-tab-header-top > :nth-child(1) > .ndl-Dropdown > .ndl-Button > .ndl-Button-label').click()
        cy.get(':nth-child(1) > .ndl-Dropdown-option > .ndl-Option-label > .ndl-Option-truncatedLabel').click()
        cy.get('.ndl-InlineEditDisplayMode-iconWrapper').click()
        cy.get('.ndl-InlineEditEditMode-input').type("This is an article about image.")
        cy.iframe('.tox-edit-area__iframe').click().type('This is a test description.')
        cy.get('.art-Header--rightActions > .ndl-Button--primary').click()
    })


  })