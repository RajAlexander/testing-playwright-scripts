import { ICustomWorld } from '../../support/custom-world';
import { Given, When } from '@cucumber/cucumber';
import * as jbsInstance from '../../support/page-objects/jbsInstance';

Given('I am on the homepage', async function () {
  await jbsInstance.homePage.open(this.page!);
});

When('I click the {string} button', async function (this: ICustomWorld, button: string) {
  await jbsInstance.homePage.clickLoginButton(this.page!, button);
});

When('I enter my email and password', async function (this: ICustomWorld) {
  await jbsInstance.loginPage.performLogin(this.page!);
});

When('I click the LOGIN button', async function (this: ICustomWorld) {
  await jbsInstance.loginPage.clickLoginButton(this.page!);
});
