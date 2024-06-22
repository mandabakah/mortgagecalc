import { getElement } from '../../support/cypressUtils'

class MortgageCalculator {

    constructor() {
        this.elements = {
        homePriceInput: '[id="homePrice"]',
        downPaymentNumberInput: '[name="downPayment"]',
        downPaymentPercentInput: '[name="downPaymentPercent"]',
        loanProgramDropdown: '[name="term"]',
        interestRateInput: '[id="rate"]',
        interestRateHeader: '[id="label_4"]',
        interestRateTooltip: '[role="dialog"]',
        interestRateTooltipClose: 'span:contains("Close")',
        seeCurrentRatesLink: 'a:contains("See current rates")',
        }
    }

visit() {
    cy.visit('/mortgage-calculator/')
}

getElement(selector) {
    return getElement(selector)
}
    // Assert home price input is visible and contains a numerical value
    assertHomePriceInput() {
        this.getElement(this.elements.homePriceInput).should('be.visible')
            .invoke('val')
            .then(value => {
            const numericValue = parseFloat(value)
            expect(numericValue).to.be.a('number').and.not.NaN
            cy.log('The value of the home price field is: ' + numericValue)
        })
    }

    // Assert down payment input is visible and contains a numerical value
    assertDownpaymentInput() {
        this.getElement(this.elements.downPaymentNumberInput).should('be.visible')
            .invoke('val')
            .then(value => {
            const numericValue = parseFloat(value)
            expect(numericValue).to.be.a('number').and.not.NaN
            cy.log('The value of the down payment field is: ' + numericValue)
        })
    }

    // Assert interest rate field is visible and all associated links and tooltips are present
    verifyInterestRateInputDetails() {
        this.getElement(this.elements.interestRateHeader).should('contain.text', "Interest rate")
        this.getElement(this.elements.interestRateInput).should('be.visible') 
            .invoke('val')
            .then(value => {
            const numericValue = parseFloat(value)
                expect(numericValue).to.be.a('number').and.not.NaN
                cy.log('The value of the interest rate field is: ' + numericValue)
            })
       this.getElement(this.elements.interestRateHeader).next().should('have.attr', 'aria-expanded', 'false')
            .find('title')
            .contains('Help')
            .click({force: true})
        this.getElement(this.elements.interestRateTooltip).should('be.visible')
        this.getElement(this.elements.interestRateHeader).next().should('have.attr', 'aria-expanded', 'true')
        this.getElement(this.elements.interestRateTooltipClose).next().click()
        this.getElement(this.elements.interestRateTooltip).should('not.exist')
        this.getElement(this.elements.seeCurrentRatesLink).contains('See current rates')
            .should('have.attr', 'href', 'https://www.zillow.com/mortgage-rates/?value=300000&down=60000&auto=true&va=false&source=Z_Mortgage_Calc_rates')
    }

    // Change the loan term drop down menu from 30 year fixed to 15 year fixed
    changeLoanTerm30To15() {
        const thirtyYearFixed = "30 year fixed"
        const fifteenYearFixed = "15 year fixed"
        this.getElement(this.elements.loanProgramDropdown).should('be.visible')
            .first().contains(thirtyYearFixed)
        this.getElement(this.elements.loanProgramDropdown).select(fifteenYearFixed)
        this.getElement(this.elements.loanProgramDropdown).should('be.visible')
            .first().contains(fifteenYearFixed)    
        // Unfortunate wait - need to figure out a more elegant way to handle the update time
        cy.wait(2000)
    }
}
export default new MortgageCalculator()
