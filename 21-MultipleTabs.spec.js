const { test, expect, chromium } = require("@playwright/test");

test.only('Multiple tabs/windows independent', async ()=>
{
    const browser = await chromium.launch()  
    // This will creae a new browser
 
    const context = await browser.newContext()  
    // This will create a new context.
    // In new context, we can create multiple pages.
 
    const page1 = await context.newPage()  
    // This will create a new page in new context.
 
    const page2 = await context.newPage()  
    // This will create a new page in new context.
 
    const x = await context.pages()
    console.log("No. of pages created in a context:-", x.length)
    await page1.waitForTimeout(3000);
 
    // Both Pages are independent.
 
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 
    const t = await page1.title();
    console.log('Page1 title is:-',t);
    await page1.waitForTimeout(3000);
 
    await expect (page1).toHaveTitle("OrangeHRM")
 
    await page2.goto("https://playwright.dev/")
 
    const t1 = await page2.title();
    console.log('Page2 title is:-',t1);
})

test('Multiple tabs/windows linked', async ()=>
{
    const browser = await chromium.launch()  
    // This will creae a new browser
 
    const context = await browser.newContext()  
    // This will create a new context.
    // In new context, we can create multiple pages.
 
    const page1 = await context.newPage()  
    // This will create a new page in new context.
 
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 
    const t2 = await page1.title();
    console.log('Page1 title is:-',t2);
 
    await expect (page1).toHaveTitle("OrangeHRM")
 
    await page1.waitForTimeout(3000)
 
    const p1 = context.waitForEvent('page')  
    // This line is used to wait for a new page to be created in the given browser context.
 
    await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click()  
    // Performing click operation
 
    const page2 = await p1;  // Assigning new page to page2 variable
 
    const t3 = await page2.title();
    console.log('Page1 title is:-',t3);
 
    await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM")
 
    await page1.waitForTimeout(3000)
 
    await browser.close()
})
 