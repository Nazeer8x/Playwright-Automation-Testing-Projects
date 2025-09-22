const { test, expect } = require("@playwright/test");

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Nazeer');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('mohdnazeer@gmail.com');
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('9676730052');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('checkbox', { name: 'Sunday' }).check();
  await page.getByRole('checkbox', { name: 'Monday' }).check();
  await page.getByText('Tuesday').click();
  await page.getByLabel('Country:').selectOption('canada');
  /*await page.getByLabel('Sorted List:').selectOption('red');
  //await page.locator('#datepicker').selectOption('cat');
  await page.getByRole('link', { name: '15' }).click();
  await page.locator('#txtDate').click();
  await page.getByRole('link', { name: '16' }).click();
  await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();*/
});