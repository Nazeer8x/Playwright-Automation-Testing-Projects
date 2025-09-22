
const { test, expect } = require("@playwright/test");

test('Home Page', async ({page})=>
{
    await page.goto('https://www.demoblaze.com/index.html');
    
    const x = await page.title(); //To get title of page
    console.log('Page Title is:', x);
    
    await expect(page).toHaveTitle('STORE'); //Verify title of page (assert)

    const y = await page.url(); // to get page of url
    console.log('Page url is:', y);

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
    
    await page.close(); // To close window

})

