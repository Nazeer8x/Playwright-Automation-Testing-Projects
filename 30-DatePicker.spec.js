const { test, expect } = require("@playwright/test");

test('Date Picker - Approach1', async ({page})=>
{
   await page.goto('https://testautomationpractice.blogspot.com/');
 
   // Approach - Filling date value
 
   await page.fill('#datepicker','12/15/2024')  // Date Format:- MM/DD/YYYY
 
   await page.locator('#datepicker').fill('09/12/2025')
 
   await page.waitForTimeout(2000)
   
})

test.only('Date Picker - Approach 2', async ({page})=>
{
   await page.goto('https://testautomationpractice.blogspot.com/');
 
   const year="2026"  //"2022"
   const month="June" //"June"
   const date = "30"   // "25"
 
   await page.click('#datepicker') // It opens the calendar/date picker
 
   while(true)
   {
      const cy=await page.locator('.ui-datepicker-year').textContent()  // Using locator 'class'
      const cm=await page.locator('.ui-datepicker-month').textContent() // Using locator 'class'
 
      if(cy == year && cm == month)
      {
        break;
      }
 
      await page.locator('[title="Next"]').click() // Click on 'Next' button. Capturing title element
      await page.waitForTimeout(3000)

 
      //await page.locator('[title="Prev"]').click() // Click on 'Previous' button
 
   }
 
   await page.click(`//a[@class='ui-state-default'][text()='${date}']`)
 
   await page.waitForTimeout(3000)
 
})

