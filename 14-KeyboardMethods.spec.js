//Keyboard action - Enter

const { test, expect } = require("@playwright/test");

test('Keyboard Action - Enter key', async ({page})=>
{
      await page.goto("https://www.google.com/")
   
      await page.locator('[name="q"]').fill("Welcome to Playwright Automation")
 
      await page.waitForTimeout(2000);
 
      await page.keyboard.press("Enter")
 
      await page.waitForTimeout(3000)
})

//Keyboard Action – Control+A & Backspace

test('Keyboard Action - Control+A & Backspace', async ({page})=>
{
      await page.goto("https://www.google.com/")
         
      await page.locator('[name="q"]').fill("Welcome to Playwright Automation")
     
      await page.keyboard.press("Control+A")
 
      await page.waitForTimeout(2000)
     
      await page.keyboard.press("Backspace")
 
      await page.waitForTimeout(3000)
})

//Keyboard Action – Copy & Paste

test('Keyboard Action - Copy & Paste', async ({page})=>
{
      await page.goto("https://www.google.com/")
               
      await page.locator('[name="q"]').fill("Welcome to Playwright Automation")
           
      await page.keyboard.press("Control+A")
     
      await page.waitForTimeout(3000)
 
      await page.keyboard.press("Control+C")
 
      await page.waitForTimeout(3000)
           
      await page.keyboard.press("Backspace")
     
      await page.waitForTimeout(3000)
 
      await page.keyboard.press("Control+V")
 
      await page.waitForTimeout(3000)
 
      await page.keyboard.press("Enter")
 
      await page.waitForTimeout(3000)
})

//Keyboard Action – tab

test('Keyboard Action - tab', async ({page})=>
{
   await page.goto("https://www.saucedemo.com/")
             
   await page.locator('#user-name').fill("standard_user")
 
   await page.waitForTimeout(2000)
           
   await page.keyboard.press("Tab")
 
   await page.locator('#password').fill("secret_sauce")
     
   await page.waitForTimeout(2000)
 
   await page.keyboard.press("Tab")
 
   await page.keyboard.press("Enter")  // Click on Login button
           
   await page.waitForTimeout(3000)
})

//Keyboard Actions - using all methods

test.only('Keyboard Action - All', async ({page})=>
{
   await page.goto("https://gotranscript.com/text-compare")
 
   await page.locator('[name="text1"]').fill("Welcome to Playwright Automation")
 
   // await page.type('name="text1"','Welcome to Playwright Automation')
 
   // Ctrl+A - For Selecting the text
 
   await page.keyboard.press('Control+A')  // await page.keyboard.press('Meta+A')
 
   await page.waitForTimeout(4000)
 
   // Ctrl+C - For Copying the text
 
   await page.keyboard.press('Control+C')  // await page.keyboard.press('Meta+C')
 
   // Tab
 
   await page.keyboard.press('Tab')  // Pressing Tab

   await page.waitForTimeout(4000)
  
   // Ctrl + V - Paste the text
   
   await page.keyboard.press('Control+V')  // await page.keyboard.press('Meta+V')
 
   await page.waitForTimeout(4000)
 
})
 