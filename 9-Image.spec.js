const { test, expect } = require("@playwright/test");

test('Image Logo Methods', async ({page})=>
{
    await page.goto('https://google.com/');
 
    const x = await page.locator('body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > svg').getAttribute('aria-label')
    console.log("Attribute value of alt is :-", x)
   
    const y = await page.locator('body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > svg').getAttribute('height')
    console.log("Attribute value of height is :-", y)
 
    const z = await page.locator('body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > svg').getAttribute('width')
    console.log("Attribute value of width is :-", z)
})

test('Image Button Methods', async ({page})=>
{
    await page.goto('https://demos.lightstreamer.com/');
   
    const x1 = await page.locator('body > div > div.content-wrap > div.header > a > img').getAttribute('alt')
    console.log("Attribute value of alt is :-", x1)
 
    await page.locator('body > div > div.content-wrap > div.header > a > img').click();
 
    await page.waitForTimeout(2000);
 
    const pt = await page.title();
    console.log('Page title is:-',pt);
})

test.only('Image Link Methods', async ({page})=>
{
    await page.goto('https://www.microfocus.com/en-us/legal#privacy');
       
    const x1 = await page.locator('#iw_comp1635425551077 > nav > div > div > div > a > svg').getAttribute('height')
    console.log("Attribute value of height is :-", x1)
 
    const x2 = await page.locator('#iw_comp1635425551077 > nav > div > div > div > a > svg').getAttribute('width')
    console.log("Attribute value of width is :-", x2)

    await page.waitForTimeout(3000);

   
    const x3 = await page.locator('#iw_comp1635425551077 > nav > div > div > div > a > svg');
    await expect(x3).toBeVisible();
    await x3.click();
   
    await page.waitForTimeout(3000);
   
    const pt1 = await page.title();
    console.log('Page title is:-',pt1);
})

