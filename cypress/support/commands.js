// gets the current interest rate value from the interest rate input and stores it for comparison
Cypress.Commands.add('getAndStoreInterestRate', () => {
    cy.get('[id="rate"]')
      .should('be.visible')
      .invoke('val')
      .then(value => {
        const interestRate = parseFloat(value)
        expect(interestRate).to.be.a('number').and.not.NaN
        cy.log('Stored interest rate: ' + interestRate)
  
        // Store the interest rate in Cypress.env to access it later
        Cypress.env('interestRate', interestRate)
      })
  })