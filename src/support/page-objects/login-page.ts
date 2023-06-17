import { Page } from '@playwright/test';

// const mainElement = '[data-cy=login]';
// const loginFailedMessage =
//   'You have entered invalid login credentials. Please double-check your credentials or contact support for assistance.';

export function click1(element: string, page: Page) {
  const joinloginLinkElement = page!.getByRole('link', { name: `profile ${element}` });
  joinloginLinkElement.click();
}

export async function click(loginButton: any, page: Page) {
  console.log(loginButton);
  //const page = this.page!;
  await page.getByTestId('form_field-button_submit').click();
  await page.waitForTimeout(2000);
  //const loginButtonElement = page.getByRole('button', { name: loginButton });
  //await page.waitForTimeout(2000);
  //await loginButtonElement.getByTestId('form_field-button_submit').click();
  //page!.getByRole('link', { name: `profile ${element}` }).click();

  // const page = this.page!;
  // await page.getByTestId('form_field-button_submit').click();
  // await page.waitForTimeout(2000);
}
export function verifyURL() {
  console.log('verifyURL');
}
// export function verifyElements() {
//   cy.get(mainElement).within(() => {
//     cy.dataCy('welcome__message')
//       .should('be.visible')
//       .contains(`Welcome to ${Cypress.env('productName')}`);
//   });
// }

export function performLogin(page: Page) {
  // await page.route('/api/user/login', route => {
  //   route.continue();
  // }).as('loginRequest');

  // await page.route('/api/workspaces/nav', route => {
  //   route.continue();
  // }).as('getNav');

  // await page.waitForSelector(mainElement);
  // const mainElementHandle = await page.$(mainElement);

  // const page = this.page!;
  page!
    .getByRole('form', { name: 'checkout login form' })
    .getByTestId('form_field-email')
    .fill('test.wildfork@yopmail.com');
  return page!
    .getByRole('form', { name: 'checkout login form' })
    .getByTestId('form_field-password')
    .fill('Password@1');

  // await page.getByTestId('form_field-button_submit').click();
  // await page.waitForTimeout(2000);

  // cy.wait('@loginRequest')
  //   .its('response')
  //   .then(response => {
  //     expect(response.statusCode).to.equal(loginCode);
  //     if (loginCode === 200) {
  //       expect(response.body.token).to.not.be.null;
  //       localStorage.setItem('jwt_token', response.body.token);
  //       cy.get(mainElement, { timeout: 10000 }).should('not.exist');
  //       cy.url({ timeout: 100000 }).should('not.include', '/login');
  //       cy.wait('@getNav').its('response.statusCode').should('eq', 200);
  //     } else if (loginCode === 401 && message === 'failed') {
  //       cy.get('.tip-content--template').should('be.visible').contains(loginFailedMessage);
  //     } else if (loginCode === 401 && message === 'warning') {
  //       cy.get('.tip-content--template').should('be.visible').contains(loginFailedMessage);
  //     } else if (loginCode === 401 && message === 'lock') {
  //       cy.get('.tip-content--template').should('be.visible').contains(loginFailedMessage);
  //     } else {
  //       localStorage.setItem('jwt_token', null);
  //     }
  //   });
}

export function clickLoginButton(page: Page) {
  //const page = this.page!;
  return page!.getByTestId('form_field-button_submit').click();
}

// export function performDisabledLogin(username: string, password: string) {
//   cy.get(mainElement).within(() => {
//     cy.dataCy('username__input').ngxFill(username);
//     cy.dataCy('password__input').ngxFill(password);
//     cy.dataCy('submit__btn').should('have.attr', 'disabled');
//   });
// }
