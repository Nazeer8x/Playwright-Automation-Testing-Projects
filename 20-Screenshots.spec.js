const { test, expect } = require("@playwright/test");

test('page screenshot', async ({page})=>
{
   await page.goto("https://playwright.dev/")
 
   await page.screenshot({path:'Screenshots/'+'HomePage.png'})
 
   // await page.screenshot({path:'Screenshots/'+Date.now()+'HomePage1.png'})
})

test('Full page screenshot', async ({page})=>
{
   
   await page.goto("https://playwright.dev/")
 
   await page.screenshot({path:'Screenshots/'+'FullPage.png',fullPage:true})
 
})

test('Element screenshot', async ({page})=>
{
   await page.goto('https://the-internet.herokuapp.com/dropdown')
 
   await page.locator("#dropdown").screenshot({path:'Screenshots/'+'Element.png'})
})

test.only('Automatically Capture screenshot when Test Fails ', async ({page}) =>
{
   await page.goto('https://the-internet.herokuapp.com/login')
 
   //await expect(page.locator('#username')).toBeVisible({timeout: 2000})
 
   await page.fill('#username', 'tomsmith1')
 
   await page.fill('#password', 'wrong-password')
 
   await page.click('//*[@id="login"]/button/i');
   await page.waitForTimeout(3000);
})
 