const { test, expect } = require("@playwright/test");

test('Text Area Methods -1', async ({page})=>
{

await page.goto('https://omayo.blogspot.com/');
 
    // TextArea field visible or not
 
    const vs = await page.isVisible('//*[@id="ta1"]');
    console.log("TextArea field visibility:-", vs)
 
    // TextArea field Editable or not
 
    const en = await page.isEditable('//*[@id="ta1"]');
    console.log("TextArea field editable or not:-", en)
 
    // Filling data in TextArea field
 
    await page.locator('#ta1').type("Learning Playwright Scripts") ;
 
    await page.waitForTimeout(2000);
 
    // Capturing the entered value in TextArea field and printing it in terminal
 
    const z1 = page.locator('//*[@id="ta1"]')
 
    const z2 = await z1.inputValue(); // Get the value of the input field
 
    console.log("TextArea field value is:-",z2)
 
   })

   test.only('TextArea Methods 2', async ({page})=>
    {
        await page.goto('https://omayo.blogspot.com/');
 
        // TextArea two field visible or not
 
        const vs1 = await page.isVisible('#HTML11 > div.widget-content > textarea');
        console.log("TextArea two field visibility:-", vs1)
 
        // TextArea two field Editable or not
 
        const t1 = await page.isEditable('#HTML11 > div.widget-content > textarea');
        console.log("TextArea field editable or not:-", t1)
 
        // Capturing the default value in TextArea two field and printing it in terminal
 
        const x1 = page.locator('#HTML11 > div.widget-content > textarea')
 
        const y1 = await x1.textContent(); // Get the value of the input field
 
        console.log("TextArea field value is:-",y1)
       
    })