const { test, expect } = require("@playwright/test");

// npx playwright test 27-Group_Parallel.spec.js --headed --workers=3
 
// If you are using test.describe() to group tests, all tests within a describe block run in the same worker by default.
// Add test.describe.configure({ mode: 'parallel' }) to enable parallel execution inside the describe() block.
 
// To Execute out test repeatedly, use the following:- npx playwright test 9-image.spec.js --repeat-each=3
 
test.describe.configure({ mode: 'parallel' });
 
test.describe('group', () =>
{
    test('Shift Click', async ({page})=>
    {
      await page.goto('https://the-internet.herokuapp.com/shifting_content');
       
      await page.getByText('Example 1: Menu Element').click({modifiers: ["Shift"] }); // Shift + Click - opens the page in a new window.
             
      await page.waitForTimeout(3000)
    })
 
    test('scroll to bottom', async ({ page }) =>
    {
           await page.goto("https://stackoverflow.com/questions/tagged/playwright");
           
           await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
           
           await page.waitForTimeout(5000) ;     
    });
 
 })

 test.describe('Regression Testing', () =>
{
    test('Link Methods', async ({page})=>
    {
       await page.goto('https://the-internet.herokuapp.com/');
       
       const x = await page.locator("#content > ul > li:nth-child(4) > a").textContent();
       console.log("Name of the link:-", x)
       
       await page.locator("#content > ul > li:nth-child(4) > a").click();
       
       await page.waitForTimeout(2000);
       
       const pt = await page.title();
       console.log('Page title is:-',pt);
       
    })
    test('Mouse Hover', async ({page})=>
    {
          await page.goto('https://www.gumtree.com/for-sale?adRemoved=true');
           
          await page.locator('//*[@id="content"]/header/div/div[1]/div/div[1]/div/div/div/ul/li[1]/div/a/span').hover()
           
          await page.waitForTimeout(2000)
           
          await page.locator('//*[@id="content"]/header/div/div[2]/div[2]/div/div[1]/div/div[2]/ul/li[3]/a').click()
           
          await page.waitForTimeout(2000)
           
          const x = await page.title();
          console.log('Page title is:-',x);
           
          const y = await page.url();
          console.log('Page URL is:-',y);
                 
    })
})