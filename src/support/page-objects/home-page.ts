import { Page } from '@playwright/test';
export function open(page: Page) {
  if (!page) {
    throw new Error('Page is not defined');
  }
  page.goto(process.env.BASE_URL);
}
