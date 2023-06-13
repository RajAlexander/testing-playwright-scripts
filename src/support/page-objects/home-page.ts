import { Page } from '@playwright/test';

export function open(page: Page) {
  page!.goto(process.env.BASE_URL);
}
