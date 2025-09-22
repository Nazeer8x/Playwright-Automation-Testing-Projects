const { test, expect } = require("@playwright/test");

test.skip('Radio Button Methods-1', async ({page})=>
{
       
    await page.goto('https://omayo.blogspot.com/');
 
    // Radiobutton visible or not
    const x = await page.isVisible('#radio1');
    console.log("Radiobutton visibility:-", x)
 
    // Radiobutton selected or not

    const y3 = await page.isChecked('#radio1');
    console.log("Radiobutton selected:-",y3);

 
    const y1 = await page.locator('#radio1');
    const y2 = await y1.isChecked();
    console.log("Radiobutton selected:-",y2)
 
    // For selecting the Radiobutton using click() method.
 
    await page.click('#radio1');

    // Radiobutton selected or not
 
    const z1 = await page.locator('#radio1');
    const z2 = await z1.isChecked();
    console.log("Radiobutton selected:-",z2)
 
    await page.waitForTimeout(2000);
})

 test.only('Radio button-Methods 2', async ({page})=>
    {
 
        await page.goto('https://omayo.blogspot.com/');
        //Assert that the checkboxes are visible on the webpage
        await expect(page.locator('#radio1')).toBeVisible()
 
        //Assert checkbox is un-checked
        expect(await page.isChecked('#radio1')).toBeFalsy()
 
        // For selecting the checkbox using check() method.
        await page.check('#radio1')
 
        await page.waitForTimeout(2000);
 
        //Assert checkbox is checked  
        expect(await page.isChecked('#radio1')).toBeTruthy();
   
    })
 
