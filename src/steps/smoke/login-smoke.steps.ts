import { config } from '../../support/config';
import { ICustomWorld } from '../../support/custom-world';
import { Given, When } from '@cucumber/cucumber';

Given('I am on the homepage', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL);
});

When('I click the {string} button', async function (this: ICustomWorld, button: string) {
  const page = this.page!;
  await page.getByRole('link', { name: `profile ${button}` }).click();
});

When('I enter my email and password', async function (this: ICustomWorld) {
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
});
