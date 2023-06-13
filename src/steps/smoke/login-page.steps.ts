import { ICustomWorld } from '../../support/custom-world';
import { Given, When } from '@cucumber/cucumber';

Given('I am on the homepage', async function (this: ICustomWorld) {
  // jbsInstance.homePage.verifyURL();
  const page = this.page!;
  await page.goto(process.env.BASE_URL);
});

When('I click the {string} button', async function (this: ICustomWorld, button: string) {
  // jbsInstance.homePage.clickLoginButton();
  const page = this.page!;
  await page.getByRole('link', { name: `profile ${button}` }).click();
});

When('I enter my email and password', async function (this: ICustomWorld) {
  // jbsInstance.loginPage.performLogin(email: string, password: string, loginCode = 200, message = '')
  const page = this.page!;
  await page
    .getByRole('form', { name: 'checkout login form' })
    .getByTestId('form_field-email')
    .fill('test.wildfork@yopmail.com');
  await page
    .getByRole('form', { name: 'checkout login form' })
    .getByTestId('form_field-password')
    .fill('Password@1');
});

When('I click the LOGIN button', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.getByTestId('form_field-button_submit').click();
  await page.waitForTimeout(2000);
});
