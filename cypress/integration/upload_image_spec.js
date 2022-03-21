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

    it.only('The user uploads an image from their local machine to the library', () => {
        cy.visit("https://app.welcomesoftware.com/")
        cy.get('.form-control').type("nadimsaker@gmail.com")
        cy.get('#submit-btn').click()
        cy.get('.form-control').type('G*mTy5!cWj4C&9')
        cy.get('#submit-btn').click()
        cy.wait(5000)
        cy.get('.nc-library').click()
        cy.get('.display-flex > .ndl-Button--primary > .ndl-Button-label').click()
        cy.wait(2000)
        cy.get('.fsp-source-list__item--active').click()

        cy.contains('Select Files to Upload').selectFile('//cypress//integration//test_data//images//sundarban-day.jpg')
    })
  })