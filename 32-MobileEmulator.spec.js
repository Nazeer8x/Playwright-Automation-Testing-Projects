const { test, expect } = require("@playwright/test");

// Emulation details -  
 
// Devices List:- https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescrip…

test('Built-in Locators', async ({page})=>
{
    await page.goto('https://playwright.dev/')
 
    await page.waitForTimeout(10000);
 
})

test.only('check device info', async ({ page }) => {

  await page.goto('https://www.whatismybrowser.com/detect/what-is-my-user-agent');

  await page.screenshot({ path:'Screenshots/'+ 'ua.png' });

  console.log(await page.viewportSize());

  await page.waitForTimeout(10000);


});

 

 