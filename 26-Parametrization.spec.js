const { test, expect } = require("@playwright/test");

//Parametrization:

const pm = ['playwright automation','cypress automation','selenium automation', 'Tosca automation'];
 
//To ensure each test title is unique, you need to use backticks (``) for string interpolation.
 
for (const x of pm)
{    
    test(`Parameterization of tests ${x}`, async({page}) =>
    {
        // Go to URL
        await page.goto('https://www.youtube.com/')
 
        await page.waitForTimeout(2000)
 
        // search with keywords
        await page.locator('#center > yt-searchbox > div.ytSearchboxComponentInputBox > form > input').click();
        await page.waitForTimeout(2000)
        await page.locator('#center > yt-searchbox > div.ytSearchboxComponentInputBox > form > input').fill(x)
        await page.locator('#center > yt-searchbox > div.ytSearchboxComponentInputBox > form > input').press('Enter');
 
        await page.waitForTimeout(5000);
 
    })
}