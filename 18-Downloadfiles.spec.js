const { test, expect } = require("@playwright/test");

test('Download File', async ({page})=>
{
   await page.goto('https://demo.automationtesting.in/FileDownload.html');
  
  // Start waiting for download before clicking
  //const x = page.waitForEvent('download');
  const [download] = await Promise.all([page.waitForEvent('download'),  page.locator('[type="button"]').click()]);
  
  // Trigger the download
  //await page.locator('[type="button"]').click();
  
  // Wait for the download to complete
  //const y = await x;
  
  // Optional: Save the download to a specific path
  // await download.saveAs('/path/to/save/file.txt');
  
  // Optional: Get the suggested filename
  //const Filename = download.suggestedFilename();
  //console.log('Downloaded file:', Filename);
})

test('Download File 2', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/FileDownload.html');
  
  // Wait for page to load
  await page.waitForLoadState('networkidle');
  
  // Option 1: Target the specific download link (recommended)
  const [download] = await Promise.all([page.waitForEvent('download'),page.locator('a.btn.btn-primary:has-text("Download")').click()]);
  await page.waitForTimeout(7000);

  // Save the file to a specific location (optional)
  const downloadPath = await download.path();
  console.log(`File downloaded to: ${downloadPath}`);
  
  // Verify it's a PDF file
  expect(download.suggestedFilename()).toContain('.pdf');
  console.log(`Downloaded file: ${download.suggestedFilename()}`);
})


test.only('Download File 3', async ({page})=>
{
   await page.goto("https://the-internet.herokuapp.com/download");
 
   const x1 = page.waitForEvent("download"); // Start waiting for the download
 
    // Perform the action that initiates download
    page.locator('#content > div > a:nth-child(18)').click();
 
    const y1 = await x1;
 
    await y1.saveAs("./" + "prince.txt");
 
    await y1.saveAs("./" + y1.suggestedFilename())
})
