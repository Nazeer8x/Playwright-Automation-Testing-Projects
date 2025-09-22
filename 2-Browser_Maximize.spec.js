const { test, expect } = require("@playwright/test");

test.use({viewport:{width:1528,height:834}}); //www.whatismyviewport.com - to find out our laptop screen size

test('Browser Maximize - View Port', async ({page})=>
{
        await page.goto('https://www.demoblaze.com/index.html');
        
        console.log("Width of the browser:-", await page.viewportSize().width);
        console.log("Height of the browser:-", await page.viewportSize().height);

    
})
