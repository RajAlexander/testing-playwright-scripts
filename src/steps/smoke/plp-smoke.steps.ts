import { ICustomWorld } from '../../support/custom-world';
import { Then, When } from '@cucumber/cucumber';
import assert from 'assert';
import { config } from '../../support/config';

let actualproductTypes: string | any[];
let productType: any;

When('I scroll at the header of the page using scroll icon', async function (this: ICustomWorld) {
  const page = this.page!;
  const menuBarRightArrowSelector = 'menuBar-rightArrow';
  // ToDO: Code to add auto-waits
  page.getByTestId(menuBarRightArrowSelector).getByRole('img').click();
});

Then('I should see a list of product collections', async function (this: ICustomWorld, dataTable) {
  const page = this.page!;
  const expectedproductTypes = dataTable.rawTable.slice(1).map((row: string[]) => row[0]);

  actualproductTypes = await page.$$eval(
    'div.slick-list > div > div.slick-slide > div > a > span:last-child',
    (elements: any[]) => elements.map((el) => el.textContent.trim()),
  );
  assert.deepStrictEqual(actualproductTypes, expectedproductTypes);
});

When('I randomly click on any product type', async function (this: ICustomWorld) {
  const page = this.page!;
  // Code to click on any random product type
  const randomIndex = Math.floor(Math.random() * actualproductTypes.length);
  productType = await page!.$(`span:has-text("${actualproductTypes[randomIndex]}")`);
  await productType?.click();
});

Then(
  'I should be directed to the corresponding product landing page',
  async function (this: ICustomWorld) {
    // Code to verify that the user is on the Collection's Product landing page
    // For eg: If pork is clicked, then the user should be directed to the following page:
    // https://wfretail-qa.wildfork.ca/en-CA/collections/pork/
    const page = this.page!;
    let productTypeText = await productType.textContent();
    productTypeText = productTypeText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Defect: Product Type 'Specialty Meats' in the URL -> lower case letters are not used.
    // Defect: Product Type 'Sausages & Ground Meat' in the URL -> plural form is used i.e. 'sausagesgroundmeats'
    productTypeText === 'specialtymeats' ? (productTypeText = 'SpecialtyMeats') : productTypeText;
    productTypeText === 'sausagesgroundmeat' ? (productTypeText = 'sausagesgroundmeats') : productTypeText;

    const expectedUrl = config.BASE_URL + '/en-CA/collections/' + productTypeText + '/';
    const currentUrl = page.url();
    if (currentUrl !== expectedUrl) {
      throw new Error(`Expected URL ${expectedUrl}, but got ${currentUrl}`);
    }
  },
);
