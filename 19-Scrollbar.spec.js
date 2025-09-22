const { test, expect } = require("@playwright/test");

/* The await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
function is called to scroll the page.

The window.scrollTo() function takes two parameters:
x (horizontal) and y (vertical) coordinates, both specified in pixels.
In this case, the x coordinate is set to 0 because only vertical scrolling is needed.
The y coordinate is dynamically fetched using the JavaScript function
document.body.scrollHeight, which returns the full height of the content
within the document’s body,enabling the page to scroll all the way to the bottom. */

test.skip('scroll by pixels', async ({ page }) =>
{
    await page.goto("https://commitquality.com/");
 
    await page.evaluate( () =>
    {
        window.scrollBy(0,100);  //window.scrollBy(0,1000);
 
    })
    await page.waitForTimeout(4000);

})
 
test.skip('scroll to specific element', async ({ page }) =>
{  
    await page.goto("https://commitquality.com/");
 
    await page.waitForTimeout(4000);
 
    const t1 = await page.locator('#root > div > div > div > p.show-more-link > button');
 
    await t1.scrollIntoViewIfNeeded();
 
    await page.waitForTimeout(2000);
   
    //await t.click();
});

test('scroll to bottom', async ({ page }) =>
{
    await page.goto("https://stackoverflow.com/questions/tagged/playwright");
 
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
 
    await page.waitForTimeout(5000)
});