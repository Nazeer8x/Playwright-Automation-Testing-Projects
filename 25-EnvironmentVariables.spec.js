const { test, expect } = require("@playwright/test");

// We need to use the dotenv package to automatically load environment variables from a .env file
 
// npm install dotenv

require('dotenv').config();
  
test('Environment Variables', async ({page})=>
{
       //await page.goto(process.env.URL);

       await page.goto(process.env.URL);
                 
       await page.locator('#user-name').fill(process.env.USER_NAME)
                       
       await page.locator('#password').fill(process.env.PASSWORD)
         
       await page.locator('#login-button').click()
 
       await page.waitForTimeout(5000)
 
       console.log("Message:-", process.env.PASS)
})