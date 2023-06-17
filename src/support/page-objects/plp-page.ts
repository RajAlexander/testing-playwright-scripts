import * as jbsInstance from './jbsInstance';
export function getProductURI(productTypeText: string) {
  productTypeText = productTypeText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Defect: Product Type 'Specialty Meats' in the URL -> lower case letters are not used.
  // Defect: Product Type 'Sausages & Ground Meat' in the URL -> plural form is used i.e. 'sausagesgroundmeats'
  productTypeText === 'specialtymeats' ? (productTypeText = 'SpecialtyMeats') : productTypeText;
  productTypeText === 'sausagesgroundmeat' ? (productTypeText = 'sausagesgroundmeats') : productTypeText;
  productTypeText === 'bakerydairydesserts' ? (productTypeText = 'BakeryDairyDesserts') : productTypeText;
  productTypeText === 'spicessauces' ? (productTypeText = 'complements') : productTypeText;

  return jbsInstance.homePage.getBaseUrl() + '/en-CA/collections/' + productTypeText + '/';
}

