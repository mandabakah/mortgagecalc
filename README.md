# hometap

## Overview ###
This is the work for the take home exercise for Hometap

### Instructions to run automated tests:

To run in Cypress:
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
