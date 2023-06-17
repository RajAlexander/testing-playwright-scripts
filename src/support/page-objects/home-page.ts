import { Page } from '@playwright/test';

export function getBaseUrl() {
  return process.env.BASE_URL;
}

export function open(page: Page) {
  return page!.goto(process.env.BASE_URL);
}

export function clickLoginButton(page: Page, button: string) {
  return page!.getByRole('link', { name: `profile ${button}` }).click();
}

export function clickScrollIcon(page: Page) {
  const menuBarRightArrowSelector = 'menuBar-rightArrow';
  page!.waitForSelector(`[data-testId="${menuBarRightArrowSelector}"]`);
  return page!.getByTestId(menuBarRightArrowSelector).getByRole('img').click();
}

export function verifyProductCollections(page: Page) {
  return page!.$$eval(
    'div.slick-list > div > div.slick-slide > div > a > span:last-child',
    (elements: any[]) => elements.map((el) => el.textContent.trim()),
  );
}

export function clickRandomProductType(page: Page, actualproductTypes: string | any[]) {
  // Code to click on any random product type
  const randomIndex = Math.floor(Math.random() * actualproductTypes.length);
  return page!.$(`span:has-text("${actualproductTypes[randomIndex]}")`);
}

