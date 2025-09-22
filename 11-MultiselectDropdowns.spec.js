const { test, expect } = require("@playwright/test");

test('MultiSelect dropdown', async ({page})=>
{
    await page.goto('https://omayo.blogspot.com/');
   
    // Select multiple options from multi select dropdown
   
    await page.selectOption('#multiselect1',['Swift'])
           
    await page.waitForTimeout(2000);
 
    await page.selectOption('#multiselect1',['Audi','Volvo'])
 
    await page.waitForTimeout(2000);

    // Assertions
 
    // 1. Check number of options in the multiselect dropdown
 
    const x = await page.locator('//*[@id="multiselect1"]');
 
    const y = await x.locator('option');
 
    const c = await y.count();
 
    console.log("Multiselect Dropdown value count:-", c)
 
    await expect(y).toHaveCount(4);

    // 2. Getting the multiselect dropdown values using loop
 
    const mv = await page.$$('#multiselect1 option')
 
    for(const z of mv)
    {
      console.log(await z.textContent());
    }

})

test.only('Handle MultiSelect dropdown', async ({page})=>
{
 
    await page.goto('https://testautomationpractice.blogspot.com');
 
    // Select multiple options from multi select dropdown
 
    await page.selectOption('#colors',['Blue','Red','Yellow'])
 
   
    await page.waitForTimeout(5000);
 
    // Assertions
 
    // 1. Check number of options in multiselect dropdown
 
    const x = await page.locator('#colors option')
 
    console.log("Multiselect Dropdown value count:-", x)
 
    //await expect(x).toHaveCount(5);
 
    // 2. Check number of options in dropdown using JavaScript array
 
    const y = await page.$$('#colors option')
   
    console.log('Number of values in multi-select dropdown:-',y.length)
    await expect(y.length).toBe(7);
   
    // 3. Check presence of value in the multiselect dropdown
 
    const x1 = await page.locator('#colors').textContent()
 
    await expect(x1.includes('Red')).toBeTruthy();
 
    // 4. Getting the multiselect dropdown values using loop
 
    const mv = await page.$$('#colors option')
 
    for(const z of mv)
    {
       console.log(await z.textContent());
    }
 
})
 