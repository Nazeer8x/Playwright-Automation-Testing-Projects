const { test, expect } = require("@playwright/test");

test('Single File', async ({page})=>
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

//Uploading multiple files

test.only('Multiple Files', async ({page})=>
{
   await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
 
   const x1 = 'C:\\Users\\Smrrc\\PlaywrightAutomation\\tests\\Playwright_Scripts\\Uploaded_Files\\Test_file_1.xlsx';
 
   const x2 = 'C:\\Users\\Smrrc\\PlaywrightAutomation\\tests\\Playwright_Scripts\\Uploaded_Files\\Test_file_2.csv';

   const x3 = 'C:\\Users\\Smrrc\\PlaywrightAutomation\\tests\\Playwright_Scripts\\Uploaded_Files\\Test_file_3.png';

   const x4 = 'C:\\Users\\Smrrc\\PlaywrightAutomation\\tests\\Playwright_Scripts\\Uploaded_Files\\Test_file_4.docx';

   const x5 = 'C:\\Users\\Smrrc\\PlaywrightAutomation\\tests\\Playwright_Scripts\\Uploaded_Files\\Test_file_5.csv';
 
   await page.locator('#filesToUpload').setInputFiles([x1,x2,x3,x4,x5]);
   
   await page.waitForTimeout(3000);
 
   await expect(page.locator('//*[@id="fileList"]/li[1]')).toContainText('Test_file_1.xlsx')
   
   await expect(page.locator('//*[@id="fileList"]/li[2]')).toContainText('Test_file_2.csv')
})