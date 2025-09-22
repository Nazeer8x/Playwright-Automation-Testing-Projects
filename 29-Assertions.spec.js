const { test, expect } = require("@playwright/test");

/*Playwright supports both hard and soft assertions. The key difference lies in their behavior when an assertion fails during test execution.
 
Hard Assertions:
 
Behavior: When a hard assertion fails, the test execution immediately stops at that point, and the test is marked as failed. Subsequent lines of code within the current test block will not be executed.
Usage: Hard assertions are the default in Playwright. You use them with the standard expect() function.
 
Soft Assertions:
 
Behavior: When a soft assertion fails, the test execution continues to the next line of code. The test is still marked as failed, but the entire test block will run, allowing you to gather information about multiple failures in a single run.
Usage: Soft assertions are explicitly invoked using expect.soft()*/


test('Assertions in playwright', async({page}) =>
{
    console.log('Assertions in playwright')
 
    // Go to URL
    await page.goto('https://www.bing.com/search?q=playwright+automation&qs=LS&pq=playwright&sk=LS1&sc=12-10&cvid=1EC8241034BE4137AD6A5941ED0E5A1D&FORM=QBLH&sp=2&ghc=1&lq=0')
 
    // assert url
    await expect(page).toHaveURL('https://www.bing.com/search?q=playwright+automation&qs=LS&pq=playwright&sk=LS1&sc=12-10&cvid=1EC8241034BE4137AD6A5941ED0E5A1D&FORM=QBLH&sp=2&ghc=1&lq=0')
 
    // assert title
    await expect(page).toHaveTitle('playwright automation - Search')
 
    // assert text
    //await expect(page.locator("#sb_form_q").first()).toHaveText('playwright automation')
 
    //assert editable enabled visible
    await expect(page.locator("#sb_form_q").first()).toBeEditable();
    await expect(page.locator("#sb_form_q").first()).toBeVisible();
    await expect(page.locator("#sb_form_q").first()).toBeEnabled();
 
    //assert disabled empty count
    //await expect(page.locator("[aria-label='Search']").first()).toBeDisabled();
 
    await expect(page.locator("#sb_form_q").first()).not.toBeEmpty();
 
    await expect(page.locator("#sb_form_q")).toHaveCount(1)
 
})
 
 test('Soft Assertions in playwright', async({page}) =>
{
    console.log('Soft Assertions in playwright')
 
    // Go to URL
    await page.goto('https://www.bing.com/search?q=playwright+automation&qs=LS&pq=playwright&sk=LS1&sc=12-10&cvid=1EC8241034BE4137AD6A5941ED0E5A1D&FORM=QBLH&sp=2&ghc=1&lq=0')
 
    // assert url
    await expect.soft(page).toHaveURL('https://www.bing.com/search?q=playwright+automation&qs=LS&pq=playwright&sk=LS1&sc=12-10&cvid=1EC8241034BE4137AD6A5941ED0E5A1D&FORM=QBLH&sp=2&ghc=1&lq=0')
 
    // assert title
    await expect.soft(page).toHaveTitle('playwright Automation - Search')
 
    // assert text
    //await expect(page.locator("#sb_form_q").first()).toHaveText('playwright automation')
 
    //assert editable enabled visible
    await expect.soft(page.locator("#sb_form_q").first()).toBeEditable();
    await expect.soft(page.locator("#sb_form_q").first()).toBeVisible();
    await expect.soft(page.locator("#sb_form_q").first()).toBeEnabled();
 
    //assert disabled empty count
    //await expect(page.locator("[aria-label='Search']").first()).toBeDisabled();
 
    await expect.soft(page.locator("#sb_form_q").first()).not.toBeEmpty();
 
    await expect.soft(page.locator("#sb_form_q")).toHaveCount(1)
    console.log("Soft Assertions - Last")
 
})

// Check page URL.
test('Hard Assertions in playwright', async({page}) =>
{
  await page.goto('https://practice.expandtesting.com/login');
  const pageURL = await page.url();
  console.log("Page URL is : "+ pageURL)
  await expect(page).toHaveURL('https://practice.expandtesting.com/login');

  // Check Page Title.
  const pageTitle = await page.title();
  console.log("Page Title is : "+ pageTitle)
  await expect(page).toHaveTitle('Test Login Page for Automation Testing Practice1');

  const logo = page.locator('.navbar-brand')
  await expect(logo).toBeVisible()
  console.log('Hard Assertion Passed')
 
})

test('Soft Assertions in playwright 2', async({page}) =>
{
  await page.goto('https://practice.expandtesting.com/login');

   // Check Page Title.
  const pageTitle = await page.title();
  console.log("Page Title is : "+ pageTitle)
  await expect.soft(page).toHaveTitle('Test Login Page for Automation Testing Practice2');

  const pageURL = await page.url();
  console.log("Page URL is : "+ pageURL)
  await expect.soft(page).toHaveURL('https://practice.expandtesting.com/login');

 

  const logo = page.locator('.navbar-brand')
  await expect.soft(logo).toBeVisible()
  console.log('Soft Assertion Passed')
 
})

test.only('Soft Assertions in Playwright 3', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');

  // Check Page Title (intentionally wrong to trigger soft failure)
  const pageTitle = await page.title();
  console.log("Page Title is: " + pageTitle);
  expect.soft(page).toHaveTitle('Test Login Page for Automation Testing Practice2');

  // Check URL
  const pageURL = await page.url();
  console.log("Page URL is: " + pageURL);
  expect.soft(page).toHaveURL('https://practice.expandtesting.com/login');

  // Check logo visibility
  const logo = page.locator('.navbar-brand');
  expect.soft(logo).toBeVisible();
  console.log('Reached End of Test ✅');
});