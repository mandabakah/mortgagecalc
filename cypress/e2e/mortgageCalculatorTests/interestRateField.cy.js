/// <reference types="cypress" />
import mortgageCalculator from "../pageObjects/mortgageCalculator";

describe('Interest Rate Field Tests', () => {
  beforeEach(() => {
    mortgageCalculator.visit();
  });

  it('the input and associated tooltip and links are appearing on the mortgage calculator page', () => {
    mortgageCalculator.verifyInterestRateInputDetails();
  });

  it('interest rate changes based on loan term selected', () => {
    let interestRate1, interestRate2;
    
    cy.getAndStoreInterestRate().then(() => {
      interestRate1 = Cypress.env('interestRate');
    });
    mortgageCalculator.changeLoanTerm30To15();
    cy.getAndStoreInterestRate().then(() => {
        interestRate2 = Cypress.env('interestRate');
        expect(interestRate1).not.to.equal(interestRate2);
        cy.log('Interest rates have updated.');
    });
  });
});

