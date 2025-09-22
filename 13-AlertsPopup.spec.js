// Pop up windows will suddenly appear in the foreground.
// These will be javascript dialog boxes, modal popups, advertisements, or browser window popups.
// By defult, dialogs are auto-dismissed by Playwright.
// So we don't have to handle them.
// However, we can register a dialog handler before the action that triggers
// the dialog to either Dialog accept or Dialog dismiss it.

const { test, expect } = require("@playwright/test");

test.only('Alert with Ok', async ({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com');
 
    //await page.locator('#alertBtn').click();
 
    // Enabling Dialog window handler
 
    page.on('dialog',async x=>
    {
        console.log(await x.message());
        //expect(x.type()).toContain('alert')   //Checking alert box.
        //expect(x.message()).toContain('I am an alert box!')  //Checking the alert message.
        await page.waitForTimeout(5000);
        await x.accept();  // clicking on OK button in alert message.
    })
       
        //await page.click('//*[@id="HTML9"]/div[1]/button[1]');

        await page.locator('#alertBtn').click();

        await page.waitForTimeout(3000);
})

test('Confirmation Dialog-Alert with Ok and Cancel', async ({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com');
 
    // await page.locator('#confirmBtn').click();
 
    // Enabling Dialog window handler
 
    page.on('dialog',async x=>
    {
        console.log(await x.message());
 
        expect(x.type()).toContain('confirm')   //Checking alert box.
 
        expect(x.message()).toContain('Press a button')  //Checking the alert message.
 
        await page.waitForTimeout(5000);
 
        await x.accept();  // clicking on OK button in alert message. it will close.
     
        //await dialog.dismiss(); // Close by using cancel button
    })
        await page.click('//*[@id="HTML9"]/div[1]/button[2]');
 
        //const y = await page.locator('//*[@id="demo"]').textContent()
        //console.log("Confirmation message:-", y)
 
        //await expect(page.locator('//*[@id="demo"]')).toHaveText('You pressed OK!')
 
})

test('Prompt Dialog', async ({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com');
 
    // Enabling Dialog window handler
 
    page.on('dialog',async x=>
    {
        expect(x.type()).toContain('prompt')   //Checking alert box.
 
        console.log(await x.message());
 
        expect(x.message()).toContain('Please enter your name')  //Checking the alert message.
 
        expect(x.defaultValue()).toContain('Harry Potter')  // Checking the default value
 
        await page.waitForTimeout(5000);
 
        await x.accept('John');  // Giving a new value and close using OK button.  
 
        // await dialog.dismiss(), // Close by using cancel button
    })
       
        await page.locator('//*[@id="HTML9"]/div[1]/button[3]').click();
 
        const y = await page.locator('//*[@id="demo"]').textContent()
        console.log("Confirmation message:-", y)
 
        await expect(page.locator('//*[@id="demo"]')).toHaveText('Hello John! How are you today?')
       
        await page.waitForTimeout(3000);
})