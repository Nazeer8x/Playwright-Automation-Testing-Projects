const { test, expect } = require("@playwright/test");

test('Textbox methods', async ({page})=>
{
    await page.goto('https://www.saucedemo.com/');

    //1. page.locator() - 1st way to fill text box
    await page.locator('#user-name').fill("standard_user"); 

    await page.waitForTimeout(3000);

   //2.page.fill() - 2nd way to fill text box

   await page.fill("#user-name","Nazeer");

   await page.waitForTimeout(3000);

  //3.getByPlaceholder() - 3rd way to fill text box

  await page.getByPlaceholder("Username").fill("Testing123");

  await page.waitForTimeout(3000);

  //checking textbox is visibility

  const x = await page.isVisible("#user-name");

  console.log("Username field visibility:", x);

  //Textbox editable or not - isEditable method used on textboxes & text area fields.

  const y = await page.isEditable("#user-name");

  console.log("Username is editable:", y);

  await page.locator('#password').fill("secret_sauce"); 

  await page.waitForTimeout(3000);

  // Getting the entered value of the textbox field.

  const a = page.locator("#user-name");

  const b = await a.inputValue(); //get the value of input field

  console.log("Username field value is:", b);

  const c = page.locator("#password");

  const d = await c.inputValue(); //get the value of input field

  console.log("Password field value is:", d);
 
  if (d === 'secret_sauce')
  {
      console.log("Password value matches:", true);
  }
  else
  {
      console.log("Password value matches:", false);
  }


})
 