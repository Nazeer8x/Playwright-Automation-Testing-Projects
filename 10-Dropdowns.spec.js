const { test, expect } = require("@playwright/test");

test.only('Dropdown(static)-Methods', async ({page})=>
{
    await page.goto('https://demo.guru99.com/test/newtours/register.php');
 
     //Multiple ways to select option from dropdown
 
    await page.locator("[name='country']").selectOption('INDIA')  // By using Visible text
 
    await page.waitForTimeout(2000);
 
    await page.locator("[name='country']").selectOption({label:'BHUTAN'});  // By using Label
 
    await page.waitForTimeout(2000);
 
    await page.locator("[name='country']").selectOption({value: 'POLAND'});  // By using Value
 
    await page.waitForTimeout(2000);
 
    await page.locator("[name='country']").selectOption({index: 5});  // By using Index
 
    await page.waitForTimeout(2000);

    // Approach 1. Check number of options in a dropdown using option value
 
    const x = await page.locator("[name='country']");
 
    const y = await x.locator('option')
 
    const z = await y.count();
 
    console.log("Dropdown value count:-", z)

    await expect(y).toHaveCount(264);

    // Approach 2. Check number of options in a dropdown using $$
 
    const y1 = await page.$$('[name="country"] option') // $$ will return the items in the form of array.
 
    const z1 = y1.length
 
    console.log("Number of options available in country dropdown:-",z1)
   
    await expect(z1).toBe(264);

    // Approach 3. Check presence of value in the dropdown
 
    const t1 = await page.locator('[name="country"]').textContent()
 
    await expect(t1.includes('INDIA')).toBeTruthy();

    // Approach 4. Getting the dropdown values using loop
 
    const dv = await page.$$('[name="country"] option')
 
    for(const i of dv)
    {
       console.log("The options for countries are:", await i.textContent());
    }

})

test('Handle Dropdowns', async ({page})=>
    {
        await page.goto('https://testautomationpractice.blogspot.com');
   
        //Multiple ways to select option from dropdown
   
        await page.locator("#country").selectOption({label:'India'});  // By using Label
   
        await page.locator("#country").selectOption(('India'));  // By using Visible test
   
        await page.locator("#country").selectOption({value: 'uk'});  // By using Value

        await page.waitForTimeout(3000);

        await page.locator("#country").selectOption({index: 1});  // By using Index
   
        await page.selectOption("#country",'India');  // By using text
   
        await page.waitForTimeout(2000);
   
        // Assertions
   
        // Approach 1. Check number of options in a dropdown using option value
   
         const x = await page.locator('#country option')
   
         console.log("Dropdown value count:-", x)
   
         await expect(x).toHaveCount(10);
   
        // Approach 2. Check number of options in a dropdown using $$
   
         const y = await page.$$('#country option') // $$ will return the items in the form of array.
   
         console.log("Number of options available in country dropdown:-",y.length)
   
         await expect(y.length).toBe(10);
   
        // Approach 3. Check presence of value in the dropdown
   
         const x1 = await page.locator('#country').textContent()
   
         await expect(x1.includes('India')).toBeTruthy();
   
       // Approach 4. Getting the dropdown values using loop
   
        const dv = await page.$$('#country option')
   
        for(const z of dv)
        {
           console.log(await z.textContent());
        }
   
    })
 
 

