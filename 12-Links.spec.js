const { test, expect } = require("@playwright/test");

test('Link Methods', async ({page})=>
{
    await page.goto('https://the-internet.herokuapp.com/');
 
    const x = await page.locator("#content > ul > li:nth-child(4) > a").textContent();
    console.log("Name of the link:-", x)

    await page.waitForTimeout(2000);

 
    await page.locator("#content > ul > li:nth-child(4) > a").click();
 
    await page.waitForTimeout(2000);
 
    const pt = await page.title();
    console.log('Page title is:-',pt);
})

test.only('Multiple links', async ({page})=>
{
    await page.goto('https://the-internet.herokuapp.com/');
   
   const col = await page.$$('a');

   console.log("Number of links in the page:-", col.length);
})