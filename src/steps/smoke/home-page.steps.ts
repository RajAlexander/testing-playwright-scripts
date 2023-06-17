import { ICustomWorld } from '../../support/custom-world';
import { Given, Then, When } from '@cucumber/cucumber';
import * as jbsInstance from '../../support/page-objects/jbsInstance';
import assert from 'assert';

let actualProductTypesList: string | any[];
let productTypeElement: any;

Given('I am on the homepage', async function () {
  await jbsInstance.homePage.open(this.page!);
});

When('I scroll at the header of the page using scroll icon', async function (this: ICustomWorld) {
  await Promise.all([
    this.page!.waitForTimeout(8000),
    await jbsInstance.homePage.clickScrollIcon(this.page!)
  ]);
});

Then('I should see a list of product collections', async function (this: ICustomWorld, dataTable) {
  const expectedProductTypesList = dataTable.rawTable.slice(1).map((row: string[]) => row[0]);
  actualProductTypesList = await jbsInstance.homePage.getListOfAllProductTypes(this.page!);
  assert.deepStrictEqual(actualProductTypesList, expectedProductTypesList);
});

When('I randomly click on any product type', async function (this: ICustomWorld) {
  productTypeElement = await jbsInstance.homePage.getProductType(this.page!, actualProductTypesList);
  await productTypeElement?.click();
});

Then('I should be directed to the product landing page', async function (this: ICustomWorld) {
  // For eg: If pork is clicked, then the user should be directed to the following page:
  let productTypeText: string = await productTypeElement.textContent();

  const expectedUrl = jbsInstance.plpPage.getProductURI(productTypeText);
  const actualUrl = jbsInstance.getCurrentURL(this.page!);
  assert.deepStrictEqual(actualUrl, expectedUrl);
});
