// // tslint:disable: tsr-detect-non-literal-regexp

import { Page } from '@playwright/test';
import { ICustomWorld } from '../custom-world';
//import("playwright-core").Page

import * as homePage from './home-page';
import * as loginPage from './login-page';
import * as plpPage from './plp-page';
// // import * as usersListing from './main-app-objects/admin-pages/users-listing';
// // import * as dashboardsListing from './main-app-objects/dashboardsListing';
// // import * as appList from '../../support/page-objects/main-app-objects/app-list-all';
// // import * as sensorEvents from '../../support/page-objects/main-app-objects/do-pages/sensors/sensors-events-interface';

export { homePage, loginPage, plpPage };
//import faker from 'faker/locale/en';

export function getCurrentURL(page: Page) {
  return page.url();
}

// export type UserJSON = {
//   firstName?: string;
//   lastName?: string;
//   username?: string;
//   email?: string;
//   displayName?: string;
//   middleInitial?: string;
//   groups?: string[];
//   password?: string;
//   confirmPassword?: string;
//   roles?: string[];
// };

// export function setLoginState() {
//   cy.visit('');
//   cy.url({ timeout: 60000 })
//     .should('not.eql', Cypress.config('baseUrl') + '/')
//     .then($url => {
//       if (!$url.endsWith('login')) {
//         cy.intercept('POST', '/api/user/logout').as('userLogout');
//         cy.visit('logout');
//         logoutScreen();
//       }
//     });
// }
export const setLoginState = async (page: ICustomWorld['page']) => {
  if (!page) {
    throw new Error('Page is not defined');
  }
  await page.goto('');
  const url = page.url();
  if (!url.endsWith('login')) {
    page.route('/api/user/logout', (route) => {
      route.continue();
      logoutScreen();
    });
    await page.goto('logout');
  }
};

// export function logout() {
//   cy.intercept('POST', '/api/user/logout').as('userLogout');
//   cy.get('main-toolbar header.flex-container')
//     .find('ngx-dropdown')
//     .within(() => {
//       cy.get('ngx-dropdown-toggle').click();
//       cy.get('li a.logout-button').click();
//     });
//   logoutScreen();
// }

function logoutScreen() {
  //   cy.intercept('GET', '/api/user/authorize').as('getAuthorize');
  //   cy.intercept('POST', '/api/user/logout').as('userLogout');
  //   cy.wait('@userLogout').its('response.statusCode').should('eq', 204);
  //   cy.clearLocalStorage('jwt_token');
  //   cy.dataCy('logout__container').within(() => {
  //     cy.dataCy('logout__msg')
  //       .invoke('text')
  //       .should('match', /^\s*You have successfully logged out\s*$/);
  //     cy.dataCy('return__btn')
  //       .contains(new RegExp(`^\\s*Return to ${Cypress.env('productName')}\\s*$`))
  //       .click();
  //   });
  //   cy.url().should('match', /\/login$/);
  //   cy.wait('@getAuthorize').its('response.statusCode').should('eq', 401);
  //   // Wait a second for the logout to finalize, otherwise following login may get kicked out
  //   cy.wait(1500);
}

// export function getCurrentPage() {
//   const ValidPages = ['welcome', 'apps', 'user'];
//   return cy.url().then($url => {
//     const urlArray = $url.split('/').filter(function () {
//       return true;
//     });
//     if (['welcome', 'apps'].includes(urlArray.slice(-1)[0])) {
//       return urlArray.slice(-1)[0];
//     } else if (ValidPages.includes(urlArray.slice(-1)[1])) {
//       return urlArray.slice(-1)[1];
//     } else {
//       return 'What the...';
//     }
//   });
// }

// export function waitForApps() {
//   cy.url().should('match', /\/apps$/);
// }

// export function switchToWorkspace(workspaceName: string) {
//   cy.waitForNetworkIdlePrepare({
//     method: 'GET',
//     pattern: '*',
//     alias: 'calls'
//   });
//   leftNavExpandAndClick('Workspaces', workspaceName);
//   cy.waitForNetworkIdle('@calls', 2000);
//   dashboardPage.verifyWorkspace(workspaceName);
// }

// export function openReport(reportName: string) {
//   cy.intercept('GET', '/api/reports/**').as('getReport');
//   leftNavExpandAndClick('Reports', reportName);

//   cy.wait('@getReport').its('response.statusCode').should('eq', 200);
//   cy.url().should('match', /\/search\/[a-zA-Z0-9_]{15,24}\/[a-zA-Z0-9_]{15,24}(\/stats)?$/);
//   recordListing.verifyElements(reportName);
// }

// export function openDashboard(dashboardName: string) {
//   cy.intercept('GET', '/api/dashboard/**/**').as('getDashboard');
//   leftNavExpandAndClick('Dashboards', dashboardName);

//   cy.wait('@getDashboard').its('response.statusCode').should('eq', 200);
//   dashboardPage.verifyDashboard(dashboardName);
// }

// export function startNewRecord2ForApp(appName) {
//   let record2URL = '';
//   cy.intercept('GET', '/api/app/**').as('getApp');
//   cy.intercept('GET', '/api/app/**/record').as('getBaseRecord');
//   cy.intercept('GET', '/api/settings/**').as('getSettings');
//   cy.intercept('GET', '/api/workspaces/nav').as('getWorkspacesNav');
//   cy.intercept('GET', '/api/user/authorize').as('getUserAuth');

//   leftNavExpandAndClick('Application Records', appName, 'new-record1__btn');
//   cy.url()
//     .should('match', /\/record\/[a-zA-Z0-9_]{10,17}\/$/)
//     .then(url => {
//       record2URL = url.replace('/record/', '/record2/');
//       cy.visit(record2URL);
//       cy.wait('@getBaseRecord').its('response.statusCode').should('eq', 200);
//       cy.wait('@getUserAuth').its('response.statusCode').should('eq', 200);
//       cy.wait('@getWorkspacesNav').its('response.statusCode').should('eq', 200);
//       return cy.waitForNetworkIdle(1000);
//     });
// }

// export function OpenAppListAll(appName: string) {
//   cy.intercept('GET', '/api/reports/app/**/default').as('getReport');
//   cy.intercept('POST', '/api/search/').as('postSearch');

//   leftNavExpandAndClick('Application Records', appName);
//   cy.wait(['@postSearch', '@getReport']);
//   cy.url().should('match', /\/search\/[a-zA-Z0-9_]{15,24}\/[a-zA-Z0-9_]{15,24}$/);
//   recordListing.verifyElements('Default Report');
// }

// export function openAppAppletsList() {
//   cy.intercept('GET', '/api/app').as('getApps');
//   cy.intercept('GET', '/api/applet').as('getApplets');
//   cy.url().then($url => {
//     cy.log($url);
//     if (!$url.endsWith('apps')) {
//       leftNavExpandAndClick('Applications & Applets');
//       cy.wait(['@getApps', '@getApplets']);
//     }
//     waitForApps();
//   });
// }

// export function makeTurbineAPICall(method: any, apiCall: any, body = {}) {
//   return cy
//     .request({
//       method,
//       url: `${Cypress.env('turbineUrl')}/api/${apiCall}`,
//       headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${localStorage.getItem('token')}`
//       },
//       body
//     })
//     .then($appJSON => {
//       return $appJSON.body;
//     });
// }

// export function openDashboardList() {
//   const alias = 'getWorkspaces' + Math.random();
//   cy.intercept('GET', '/api/workspaces').as(alias);
//   cy.intercept('GET', '/api/dashboard').as('getDashboards');
//   leftNavExpandAndClick('Workspace Management', 'Dashboards');

//   cy.wait([`@${alias}`, '@getDashboards']);
//   cy.url().should('match', /\/dashboards$/);
// }

// export function openOrchestration() {
//   leftNavExpandAndClick('Orchestration');
//   cy.wait('@getTurbineOrch').its('response.statusCode').should('eq', 200);
// }

// export function openPlugins() {
//   // cy.intercept('GET', '/orchestration/api/openapi-json').as('getOpenJSON');
//   leftNavExpandAndClick('Orchestration', 'Plugins');
//   // cy.wait('@getOpenJSON');
// }

// export function openPlaybooks() {
//   // disabling until connectors are turned on in ci/cd
//   // cy.intercept('GET', '/orchestration/api/v1/connector').as('getConnector');
//   cy.intercept('POST', '/orchestration/api/v1/plugin/rql').as('postPlugin');
//   cy.intercept('POST', '/orchestration/api/v1/sensor/rql').as('postSensor');
//   cy.intercept('GET', '/orchestration/api/v1/playbookrun/report/playbook/runsPerHour').as('getPlaybookRun');
//   cy.intercept('GET', '/orchestration/api/v1/playbookrun/report/playbook/avgRunTimePerHour').as(
//     'getPlaybookRunAvgRunTime'
//   );

//   leftNavExpandAndClick('Orchestration', 'Playbooks');
//   // disabling until connectors are turned on in ci/cd
//   // cy.wait('@getConnector').its('response.statusCode').should('eq', 200);
//   cy.wait('@postPlugin').its('response.statusCode').should('eq', 201);
//   cy.wait('@postSensor').its('response.statusCode').should('eq', 201);
//   cy.wait('@getPlaybookRun').its('response.statusCode').should('eq', 200);
//   cy.wait('@getPlaybookRunAvgRunTime').its('response.statusCode').should('eq', 200);
// }

// export function openEmailSettings() {
//   leftNavExpandAndClick('Settings', 'Email and PDF Settings');
//   cy.url().should('match', /\/settings\/email$/);
// }

// export function openUsersListing() {
//   cy.intercept('GET', '/api/user**').as('getUsers');
//   leftNavExpandAndClick('Users, Groups & Roles', 'Users');
//   cy.wait('@getUsers').its('response.statusCode').should('eq', 200);
//   cy.url().should('match', /\/users$/);
// }

// export function createUserJSON(userJSON: UserJSON = {}) {
//   const newUser: UserJSON = {
//     firstName: userJSON.firstName || faker.name.firstName(),
//     lastName: userJSON.lastName || faker.name.lastName(),
//     middleInitial: userJSON.middleInitial || String.fromCharCode(Math.floor(Math.random() * 26) + 97),
//     groups: userJSON.groups || [],
//     password: userJSON.password || faker.internet.password(),
//     roles: userJSON.roles || []
//   };

//   newUser.username = userJSON.username || faker.internet.userName(newUser.firstName, newUser.lastName);
//   newUser.email = userJSON.email || faker.internet.email(newUser.firstName, newUser.lastName, 'api.swimlane.com');
//   newUser.displayName = userJSON.displayName || 'QA-E2E-' + newUser.lastName + ', ' + newUser.firstName;
//   newUser.confirmPassword = userJSON.confirmPassword || newUser.password;

//   return newUser;
// }

// export function leftNavExpandAndClick(sectionName: string, itemName = null, itemButton = null): void {
//   cy.dataCy('navigation_menu')
//     .should('be.visible')
//     .find('li')
//     .contains(new RegExp(`^\\s*${sectionName}\\s*$`))
//     .closest('li.nav-item-container')
//     .then(sectionItem => {
//       if (itemName === null) {
//         cy.wrap(sectionItem).click();
//       } else {
//         cy.wrap(sectionItem)
//           .children()
//           .then(childrenList => {
//             if (childrenList.length === 1) {
//               cy.wrap(sectionItem).click();
//             }
//             if (itemButton == null) {
//               cy.wrap(sectionItem)
//                 .find('li')
//                 .contains(new RegExp(`^\\s*${itemName}\\s*$`))
//                 .click();
//             } else {
//               cy.wrap(sectionItem)
//                 .find('li')
//                 .contains(new RegExp(`^\\s*${itemName}\\s*$`))
//                 .closest('li')
//                 .find(`[data-cy=${itemButton}]`)
//                 .click();
//             }
//           });
//       }
//     });
// }

// function reportSchedulingIcons(reportName: any, verificationCode: any) {
//   cy.dataCy('navigation_menu')
//     .find('li')
//     .contains(new RegExp(`^\\s*Reports\\s*$`))
//     .closest('li.nav-item-container')
//     .then(sectionItem => {
//       cy.wrap(sectionItem)
//         .children()
//         .then(childrenList => {
//           if (childrenList.length === 1) {
//             cy.wrap(sectionItem).click();
//           }
//           cy.wrap(sectionItem)
//             .find('li')
//             .contains(new RegExp(`^\\s*${reportName}\\s*$`))
//             .closest('li')
//             .within(() => {
//               verificationCode();
//             });
//         });
//     });
// }

// export function openLogging() {
//   leftNavExpandAndClick('Settings', 'Logging');
//   cy.url().should('match', /\/settings\/logging$/);
// }
// export function openSensorEvents() {
//   cy.intercept('GET', '/orchestration/api/v1/event/report/*').as('getNewOrchestrationItem');
//   cy.intercept('GET', '/orchestration/api/v1/event/rql').as('getNewOrchestrationRql');
//   leftNavExpandAndClick('Orchestration', 'Events');
//   cy.url().should('match', /\/orchestration\/events$/);
//   cy.wait(['@getNewOrchestrationItem', '@getNewOrchestrationRql']);
//   // added wait due to failing in ci/cd environment
//   cy.wait(1500);
// }
