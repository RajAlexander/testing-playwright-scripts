import { Page } from '@playwright/test';

export function open(page: Page) {
  return page!.goto(process.env.BASE_URL);
}
export function clickLoginButton(page: Page, button: string) {
  return page!.getByRole('link', { name: `profile ${button}` }).click();
}

