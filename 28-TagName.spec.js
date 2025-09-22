const { test, expect } = require("@playwright/test");

// To execute the test with tag name:-
// npx playwright test 27-tagname.spec.js --headed --grep '@smoketest'
 
test('Mouse Right Click @smoketest', async ({page})=>
{
      await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
   
      const btn = await page.locator("//span[@class='context-menu-one btn btn-neutral']")
   
      await btn.click({button: 'right'})  
         
      await page.waitForTimeout(2000)
})
 
test('Mouse Double Click @regressiontest', async ({page})=>
{
      await page.goto('https://testautomationpractice.blogspot.com/');
   
      const ct = await page.locator("//button[normalize-space()='Copy Text']")
   
      await ct.dblclick()  // Performing double click
   
      const f2 = await page.locator('#field2')  // Capturing Field 2 locator using id.
   
      await expect(f2).toHaveValue('Hello World!')
   
      await page.waitForTimeout(5000)
 })
 
 test('Shif Click @regressiontest', async ({page})=>
 {
      await page.goto('https://the-internet.herokuapp.com/shifting_content');
 
      await page.getByText('Example 1: Menu Element').click({modifiers: ["Shift"] }); // Shift + Click - opens the page in a new window.
     
      await page.waitForTimeout(3000)
 })
   
test('Mouse Hover @smoketest', async ({page})=>
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
 
test('Single File @regressiontest', async ({page})=>
{
   await page.goto("https://the-internet.herokuapp.com/upload")
 
   const x = 'C:\\Users\\Smrrc\\PlaywrightAutomation\\tests\\Playwright_Scripts\\Uploaded_Files\\Test_file_1.xlsx';
 
   await page.setInputFiles('#file-upload', x);
 
   //await page.locator('#file-upload').setInputFiles("Upload\latest-selenium.pdf")
 
   await page.waitForTimeout(2000)
 
   // await page.locator('#file-submit').click()
 
   await page.click('#file-submit')
 
   await page.waitForTimeout(2000)
})
 