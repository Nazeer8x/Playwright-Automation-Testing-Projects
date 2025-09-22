const { test, expect } = require("@playwright/test");

test.only('Checkbox Methods-1', async ({page})=>
{
       
    await page.goto('https://omayo.blogspot.com/');
 
    // Checkbox visible or not
    const x = await page.isVisible('#checkbox2');
    console.log("Checkbox visibility:-", x)
 
    // Checkbox selected or not
 
    const y1 = await page.locator('#checkbox2');
    const y2 = await y1.isChecked();
    console.log("Check box selected:-",y2)
 
    // For selecting the checkbox using click() method.
 
    await page.click('#checkbox2')
 
    // Checkbox selected or not
 
    const z1 = await page.locator('#checkbox2');
    const z2 = await z1.isChecked();
    console.log("Check box selected:-",z2)
 
    await page.waitForTimeout(2000);
})

test.fail('Checkbox Methods-2', async ({page})=>
{
       
    await page.goto('https://omayo.blogspot.com/');
 
    // Checkbox visible or not
    const x = await page.isVisible('#checkbox1');
    console.log("Checkbox visibility:-", x)
 
    // Checkbox selected or not
 
    const y1 = await page.locator('#checkbox1');
    const y2 = await y1.isChecked();
    console.log("Check box selected:-",y2)
 
    // For selecting the checkbox using click() method.
 
    await page.click('#checkbox1')
 
    // Checkbox selected or not
 
    const z1 = await page.locator('#checkbox1');
    const z2 = await z1.isChecked();
    console.log("Check box selected:-",z2)
 
    await page.waitForTimeout(2000);
})