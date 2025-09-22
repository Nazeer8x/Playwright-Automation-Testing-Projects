const { test, expect } = require("@playwright/test");

// 1. page.getByAltText()- To locate an element, usually image, by its text alternative.
 
test('getByAltText', async ({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 
    const logo = await page.getByAltText('company-branding')
    
    await expect(logo).toBeVisible();

    const x = await logo.innerText();
 
    console.log("Text in the Logo:-", x)
 
})

// 2. page.getByPlaceholder() - To locate an input by placeholder
 
test('getByPlaceholder', async ({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   
    await page.getByPlaceholder('Username').fill("Admin")
 
    await page.getByPlaceholder('Password').fill("admin123")
 
    await page.waitForTimeout(2000);
})

// 3. page.getByRole() - To locate by explicit and implicit accessibility attributes.
 
test('getByRole', async ({page})=>
{
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 
  await page.getByPlaceholder('Username').fill("Admin")
 
  await page.getByPlaceholder('Password').fill("admin123")
 
  await page.waitForTimeout(2000);
 
  await page.getByRole('button',{type: 'submit'}).click()
 
  await page.waitForTimeout(2000);
})

// 4. page.getByText() - To locate by text content.
 
test('getByText', async ({page})=>
{
   await page.goto('https://commitquality.com/')
 
   await expect(page.getByText('Reset')).toBeVisible()
 
   const x = await page.getByText('Reset').textContent()
 
   console.log("The name of the button:-",x)
})

// 5. page.getByLabel() - To locate a form control by associated label's text.
 
test('getByLabel', async ({page})=>
{
    await page.goto('https://login.salesforce.com/')
 
    await page.getByLabel('Username').fill("Admin")
 
    await page.getByLabel('Password').fill("Admin123")
 
    await page.getByLabel('Remember me').click();
 
    await page.waitForTimeout(2000);
});

// 6. page.getByTitle() - To locate an element by its title attribute.
 
test("getByTitle", async ({page}) =>
{
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
   
    await page.getByTitle('ParaBank').click();
 
    const pt = await page.title();
 
    console.log('Page title is:-',pt);
});

// 7. page.getByTestId() - To locate an element by its testid attribute.
 
test.only('Add product to cart using testId locator', async ({ page }) => {
  // Go to the e-commerce site
  await page.goto('https://myshop.com');
 
  // Locate the iPhone product card by testid
  const iphone = page.getByTestId('product-item').filter({ hasText: 'iPhone 15 Pro' });
 
  // Click the "Add to Cart" button inside that product card
  await iphone.getByTestId('    -to-cart').click();
 
  // Verify cart count updated
  await expect(page.getByTestId('cart-count')).toHaveText('1');
});