const { test, expect } = require("@playwright/test");

//In Playwright, filter() lets you narrow down a locator when multiple elements match the same selector.

test.only('Filters', async ({page})=>
{
       await page.goto("https://www.saucedemo.com/")
                 
       await page.locator('#user-name').fill("standard_user")
                       
       await page.locator('#password').fill("secret_sauce")
         
       await page.locator('#login-button').click()
 
       await page.waitForTimeout(2000)
 
       await page.locator('//*[@class="inventory_item"]').filter({hasText: 'Sauce Labs Bolt T-Shirt'}).getByRole("button").click()
 
       await page.waitForTimeout(2000)
 
 })