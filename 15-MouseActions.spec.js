// Mouse Clicks in Playwright - Right Click, Shift Click, Double Click, Normal Click, Mouse Hover & drag and drop

const { test, expect } = require("@playwright/test");

test('Mouse Right Click', async ({page})=>
{
      await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

      await page.waitForTimeout(3000)

   
      const btn = await page.locator("//span[@class='context-menu-one btn btn-neutral']")
   
      await btn.click({button: 'right'})  //Performing right click
   
      await page.waitForTimeout(3000)
})

test('Mouse Double Click', async ({page})=>
{
      await page.goto('https://testautomationpractice.blogspot.com/');
   
      const ct = await page.locator("//button[normalize-space()='Copy Text']"); //copy text button

      await page.waitForTimeout(5000)

   
      await ct.dblclick()  // Performing double click
   
      const f2 = await page.locator('#field2')  // Capturing Field 2 locator using id.
   
      await expect(f2).toHaveValue('Hello World!')
   
      await page.waitForTimeout(5000)
 })

 // Shift + Click 

 test('Shif Click', async ({page})=>
 {
      await page.goto('https://the-internet.herokuapp.com/shifting_content');
 
      await page.getByText('Example 1: Menu Element').click({modifiers: ["Shift"] });
      // Shift + Click - opens the page in a new window.
     
      await page.waitForTimeout(3000)
 })

 // Mouse hover

 test('Mouse Hover', async ({page})=>
{
   await page.goto('https://www.gumtree.com/for-sale?adRemoved=true');
 
   await page.locator('//*[@id="content"]/header/div/div[1]/div/div[1]/div/div/div/ul/li[1]/div/a/span').hover()
 
   await page.waitForTimeout(2000)
 
   await page.locator('//*[@id="content"]/header/div/div[2]/div[2]/div/div[1]/div/div[2]/ul/li[3]/a').click()
 
   await page.waitForTimeout(2000)
 
   const x = await page.title();
   console.log('Page title is:-',x);
 
   const y = await page.url();
   console.log('Page URL is:-',y);
})

//Drag and drop

test.only("Drag and Drop", async ({ page }) => {
  // Navigate to the target webpage with drag-and-drop functionality
  await page.goto("https://testautomationpractice.blogspot.com/");
  
  // Locate the draggable element
  const draggable = await page.locator("#draggable");
  
  // Locate the droppable area
  const droppable = await page.locator("#droppable");
  
  // Perform the drag-and-drop action
  await draggable.dragTo(droppable);
  
  // Wait for a moment to observe the result
  await page.waitForTimeout(3000);
})
 