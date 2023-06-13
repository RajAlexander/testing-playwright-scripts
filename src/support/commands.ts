import { Locator } from '@playwright/test';

declare global {
  interface PlaywrightTest {
    login(): Promise<void>;
    dataTestId(value: string, options?: Parameters<Locator['locator']>[1]): Locator;
  }
}

// const dataTestId = (value: string, options: Parameters<Locator['locator']>[1] = {}): Locator => {
//   return page.locator(`[data-testId=${value}]`, options);
// };

// const login = async (): Promise<void> => {
//   // await page.route('**/signalr/*', (route) => {
//   //   route.continue();
//   // });

//   const response = await page.waitForResponse((response) => {
//     return response.url().includes('/api/user/login') && response.request().method() === 'POST';
//   });

//   const result = await response.json();
//   localStorage.setItem('jwt_token', result.token);
// };

//test.extend({ dataTestId, login, visitSwimlane, dragAndDrop, makeAPICall, uploadJson });

// Usage:
// const element = await page.dataTestId('my-test-id');

// export { };

// Cypress.Commands.add('dataTestId', (value, options = {}) => {
//   return cy.get(`[data-testId=${value}]`, options);
// });

// Cypress.Commands.add('dragAndDrop', (fromElement: string, toElement: string, location = 'bottomRight') => {
//   return cy
//     .get(fromElement)
//     .should('be.visible')
//     .first()
//     .trigger('mousedown', { which: 1 })
//     .get(toElement)
//     .should('be.visible')
//     .trigger('mousemove', location as any)
//     .trigger('mouseup');
// });

// Cypress.Commands.add('login', () => {
//   cy.intercept('GET', 'signalr/*', {});

//   return cy
//     .request('POST', '/api/user/login', {
//       username: Cypress.env('USERNAME'),
//       password: Cypress.env('PASSWORD')
//     })
//     .then(result => {
//       localStorage.setItem('jwt_token', result.body.token);
//     });
// });

// Cypress.Commands.add('makeAPICall', (method, apiCall, body) => {
//   return cy
//     .request({
//       method,
//       url: `${Cypress.config('baseUrl')}/api/${apiCall}`,
//       headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
//       },
//       body
//     })
//     .then($appJSON => {
//       return $appJSON.body;
//     });
// });

// Cypress.Commands.add('visitWildFork', (url: string, options?: Partial<Cypress.VisitOptions>) => {
//   cy.intercept('GET', 'api/user/authorize').as('GET:user/authorize');
//   cy.intercept('GET', 'api/workspaces/nav').as('GET:workspaces/nav');
//   cy.intercept('GET', 'api/swagger').as('GET:swagger');

//   cy.visit(url, options);

//   cy.wait('@GET:user/authorize', { timeout: 60000 });
//   cy.wait('@GET:swagger', { timeout: 60000 });
//   cy.wait('@GET:workspaces/nav', { timeout: 60000 });
//   cy.waitForNetworkIdle(1000);
// });

// Cypress.Commands.add('uploadJson', options => {
//   options.method = options.method.toUpperCase();
//   // @ts-ignore
//   options.url = Cypress.Location.normalize(options.url);

//   return new Cypress.Promise(function (resolve, reject) {
//     const xhr = new XMLHttpRequest();
//     xhr.open(options.method, options.url);

//     if (options.headers) {
//       Cypress._.each(options.headers, function (value, header) {
//         xhr.setRequestHeader(header, value);
//       });
//     }

//     xhr.onload = function () {
//       if (this.status >= 200 && this.status < 300) {
//         let data = this.response;
//         if (this.getResponseHeader('Content-Type').indexOf('application/json;') === 0) {
//           data = JSON.parse(data);
//         }
//         resolve(data);
//       } else {
//         reject(this);
//       }
//     };
//     xhr.onerror = function () {
//       reject(this);
//     };
//     xhr.send(options.body);
//   });
// });
