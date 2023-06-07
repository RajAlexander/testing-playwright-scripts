import { config } from '../../support/config';
import { Given } from '@cucumber/cucumber';

Given('Go to the WF retail website', async function () {
  const page = this.page!;
  await page.goto(config.BASE_URL);

  await page.getByRole('link', { name: 'profile JOIN/LOGIN' }).click();
  await page
    .getByRole('form', { name: 'checkout login form' })
    .getByTestId('form_field-email')
    .fill('test.wildfork@yopmail.com');
  await page
    .getByRole('form', { name: 'checkout login form' })
    .getByTestId('form_field-password')
    .fill('Password@1');
  await page.getByTestId('form_field-button_submit').click();
});
