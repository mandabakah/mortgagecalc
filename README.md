# hometap

## Overview ###
This is the work for the take home exercise for Hometap

Manual Test Plan can be found here: [Test Plan](https://github.com/mandabakah/hometap/blob/main/Test%20Plan%20for%20Interest%20Rate%20Input%20for%20Mortgage%20Calculator.pdf)
Manual Test Cases can be found here: [Test Cases](https://github.com/mandabakah/hometap/blob/main/Test%20Cases%20for%20'Interest%20Rate'%20input%20for%20Mortgage%20Calculator%20-%20Test%20Cases.pdf)

### Instructions to run automated tests:

In the Cypress UI:
- Open cypress with `npx cypress open`
- Select E2E testing
- Select chrome
- Click green 'Start E2E testing in Chrome' button
- Select 'interestRateField.cy.js' file from menu
- Test runner will begin and show results in left panel

**OR**

Run tests in the command line with `npx cypress run`

### Future Considerations:

- Find a more elegant way to handle the update times once inputs are changed on the calculator. Hard-coded waits are not ideal
- Work with developers to put `data-testid` attributes in place so there are stable and consistent locators for tests
- Consider how and where to store test data
- Continue to build out tests around Mortgage Calculator including:
  - Advanced options
  - Breakdown
  - Schedule
  - Full Report
  - Share
  - 'Get a more accurate estimate' section
  - And all remaining sections and links on the page
- Continue to build out `pageObjects ` for linked pages
- Integrate tests into CI/CD pipeline
