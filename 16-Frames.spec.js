const { test, expect } = require("@playwright/test");

test('Frame Locators', async ({page})=>
{
   await page.goto('https://ui.vision/demo/webtest/frames/');
 
   const frame1 = page.frameLocator("html > frameset > frame:nth-child(1)")
 
   await frame1.locator("[name='mytext1']").type("PLAYWRIGHT SCRIPTS - Frame1")
 
   await page.waitForTimeout(6000);
 
   const frame2 = page.frameLocator("frame[src='frame_2.html']")
   
   await frame2.locator("[name='mytext2']").type("PLAYWRIGHT SCRIPTS - Frame2")
 
   await page.waitForTimeout(5000);
})

//Inner frames

test('Inner Frames', async ({page})=>
{
   await page.goto('https://ui.vision/demo/webtest/frames/');
 
   // Approach - Using frame name or URL
 
    const f3 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
   
    // for child frames, we should always give URL or Name of the frame
 
    await page.waitForTimeout(3000);
 
    await f3.locator("[name='mytext3']").type('Welcome to Inner Frames')
 
    //Nested frame
 
    const cf = await f3.childFrames()
 
    console.log('Number of child frames:', cf.length);
 
    await page.waitForTimeout(3000);
 
    await cf[0].locator('#i6 > div.vd3tt > div').click()
 
     await page.waitForTimeout(3000);
 
     await cf[0].locator('#i12 > div.vd3tt > div').click()
 
     await page.waitForTimeout(3000);
 
     await cf[0].locator('#i21 > div.uHMk6b.fsHoPb').check();
 
     await cf[0].locator('#i24 > div.uHMk6b.fsHoPb').check();
 
     await page.waitForTimeout(3000);
})

// Frame count in page

test.only('Frames-Count', async ({page})=>
{
   await page.goto('https://ui.vision/demo/webtest/frames/');
 
   // Get total number of frames
 
    const x = await page.frames();
    const y = x.length;
    console.log("Number of frames:-",y)
 
    for (let i = 0; i < y; i++)
    {
        console.log(x[i].url());
    }
})


 