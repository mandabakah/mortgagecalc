import { getElement } from '../../support/cypressUtils';

class MortgageCalculator {

    constructor() {
        // Define element selectors for the mortgage calculator page
        this.elements = {
        homePriceInput: '[id="homePrice"]',
        downPaymentNumberInput: '[id="form-1_downPayment"]',
        downPaymentPercentInput: '[id="form-1_downPaymentPercent"]',
        loanProgramDropdown: '[name="term"]',
        interestRateInput: '[id="rate"]',
        interestRateHeader: '[id="label_4"]',
        interestRateTooltip: '[role="dialog"]',
        interestRateTooltipClose: 'span:contains("Close")',
        seeCurrentRatesLink: 'a:contains("See current rates")',
        }
    };

visit() {
    cy.visit('/mortgage-calculator/');
}

getElement(selector) {
    return getElement(selector);
}

    verifyInterestRateInputDetails() {

        // Verify the interest rate input header is present
        this.getElement(this.elements.interestRateHeader).should('contain.text', "Interest rate");
        // Find and verify the interest rate input is visible, store the current value, then ensure is is a number and is not NaN
        this.getElement(this.elements.interestRateInput).should('be.visible') 
            .invoke('val')
            .then(value => {
            const numericValue = parseFloat(value);
                expect(numericValue).to.be.a('number').and.not.NaN;
                cy.log('The value of the interest rate field is: ' + numericValue);
            });
        // Find and verify the presence of the tooltip and interact with it
       this.getElement(this.elements.interestRateHeader).next().should('have.attr', 'aria-expanded', 'false')
            .find('title')
            .contains('Help')
            .click({force: true});
        this.getElement(this.elements.interestRateTooltip).should('be.visible')
        this.getElement(this.elements.interestRateHeader).next().should('have.attr', 'aria-expanded', 'true');
        this.getElement(this.elements.interestRateTooltipClose).next().click();
        this.getElement(this.elements.interestRateTooltip).should('not.exist');
        // Verify the presence of the See current rates link and that it directs to the correct URL
        this.getElement(this.elements.seeCurrentRatesLink).contains('See current rates')
            .should('have.attr', 'href', 'https://www.zillow.com/mortgage-rates/?value=300000&down=60000&auto=true&va=false&source=Z_Mortgage_Calc_rates');
    }
    
    changeLoanTerm30To15() {

        const fifteenYearFixed = "15 year fixed";
        // Find and verify the loan program dropdown has the correct text
        this.getElement(this.elements.loanProgramDropdown).should('be.visible')
            .invoke('text');
        cy.log('The value of the interest rate field is: ' + 'text');
        // Select the Fixed 15 year option from the drop down menu
        this.getElement(this.elements.loanProgramDropdown).select(fifteenYearFixed);
        // Verify that the input field was updated
        this.getElement(this.elements.loanProgramDropdown).should('be.visible')
            .invoke('text')
            cy.log('The new value of the interest rate field is: ' + 'text');
        cy.wait(2000);
    }
}
export default new MortgageCalculator();
