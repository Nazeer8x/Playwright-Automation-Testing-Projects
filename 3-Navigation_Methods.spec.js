const { test, expect } = require("@playwright/test");

test('Navigation_Methods', async ({page})=>
{
    await page.goto('https://demos.lightstreamer.com/');

    const x = await page.title(); //To get title of page
    console.log('Page Title is:', x);

    await page.waitForTimeout(3000);

    await page.goto('https://www.demoblaze.com/index.html');
    const y = await page.title(); //To get title of page
    console.log('Page Title is:', y);
    
    await page.waitForTimeout(3000);

    //Navigating back to light streamer

        await page.goBack();

    await page.waitForTimeout(3000);

    //Navigating forward to demoblaze

        await page.goForward();

    await page.waitForTimeout(3000);

    //Reloading the page

    await page.reload();

    console.log('Page got refreshed')




})

/* Navigation Methods Used
    page.goto(url): Navigates to the specified URL.
    page.goBack(): Navigates back to the previous page in the browser's history.
    page.goForward(): Navigates forward to the next page in the browser's history.
    page.reload(): Reloads the current page. */

