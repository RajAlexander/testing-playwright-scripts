import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

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

When('Change theme to {string} mode', async function (this: ICustomWorld, mode: string) {
  const page = this.page!;
  const html = page.locator('html');
  const current = await html.getAttribute('data-theme');
  if (current !== mode) {
    await page.locator('nav >> button[title*="dark and light mode"]').click();
  }
  await page.waitForSelector(`html[data-theme=${mode}]`);
});

Then('We see {string} mode', async function (this: ICustomWorld, mode: string) {
  const page = this.page!;
  const theme = await page.locator('html').getAttribute('data-theme');
  expect(theme).toEqual(mode);
});
