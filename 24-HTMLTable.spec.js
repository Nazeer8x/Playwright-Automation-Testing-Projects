const { test, expect } = require("@playwright/test");

test('HTML Table - Capturing Header & Cell Names', async ({page})=>
{
   await page.goto("https://letcode.in/table/")
 
   const table = await page.locator("#shopping");
 
   // Getting Header Names
 
   const h1 = await page.locator('//*[@id="shopping"]/thead/tr/th[1]').textContent() ////*[@id="shopping"]/thead/tr/th[1]
   console.log("Header Name1:-",h1)
 
   const h2 = await page.locator("#shopping > thead > tr > th:nth-child(2)").textContent() ////*[@id="shopping"]/thead/tr/th[2]
   console.log("Header Name2:-",h2)
 
   // Getting Cell values
 
   const c1 = await page.locator("#shopping > tbody > tr:nth-child(2) > td:nth-child(1)").textContent()
   console.log("Items Name:-",c1)
 
   const c2 = await page.locator("#shopping > tbody > tr:nth-child(2) > td:nth-child(2)").textContent()
   console.log("Price Name:-",c2)
 
   const ft = await page.locator('//*[@id="shopping"]/tfoot/tr/td[1]/i[1]').textContent()
   console.log("Footer Name:-",ft)
})

//Table rows and columns count

test('HTML Table - Row & Column Count', async ({page})=>
{
  await page.goto("https://letcode.in/table/")
 
  const tab = await page.locator("#shopping");
 
  const hc = await tab.locator('thead tr th')
  console.log("Header Count:-", await hc.count())
 
  const rw = await tab.locator('tbody tr')
  console.log("Number of rows:-", await rw.count())
 
  const cc = await tab.locator('tbody tr td')
  console.log("Number of cells:-",await cc.count())
 
  // column count = No.of cells / rows
 
  const a = await cc.count();
  const b = await rw.count();
  const c1 = a/b;
  console.log("Columns Count:-", c1)
})

test('HTML Table - Selecting Checkbox in a row', async ({page})=>
{
    await page.goto("https://letcode.in/table/")
     
    const tab = await page.locator("#simpletable");
 
    await page.locator("#first").click()
 
    await page.waitForTimeout(2000)
 
    await page.locator("#third").click()
 
    await page.waitForTimeout(2000)
 })

 test('HTML Table - Calculation', async ({page})=>
{
  await page.goto("https://letcode.in/table/")
   
  const tab = await page.locator("#shopping");
 
  const rw = await tab.locator('tbody tr')
  const rc = await rw.count();
  console.log("Number of rows:-", rc)
 
  let total = 0;
 
  for(let i=0; i<rc; i++)
  {
     const row = tab.locator("tbody tr").nth(i);
     const price = await row.locator("td").last().textContent()
     total = total+Number(price);
  }
   console.log("Total Value:-", total)
 
   const ac = await tab.locator("tfoot td").last().textContent();
   //expect(Number(ac)).toBe(total)
 
   console.log("Actual Value:-",ac , "Total Value:-",total)
})

test('Web Table - Printing all rows', async ({page})=>
 {
   await page.goto("https://testautomationpractice.blogspot.com/")
 
   const tab = await page.locator('#productTable')
 
   const rows = await tab.locator('tbody tr')
 
   for(let i=0; i<await rows.count();i++)  // Outer for loop is representing the rows.
   {
     const cr = rows.nth(i)   // Here i = 0 means first row, i = 1 means second row
     const tds =cr.locator('td')
     //console.log("Number of columns in the selected row:-", await tds.count())
         
     // Inner for loop is representing the columns. // we dont require last column, so used -1.
     for(let j=0; j<await tds.count()-1;j++)
     {
        console.log(await tds.nth(j).textContent())
     }
   }
  })
 
  test('Web Table - Reading data from all pages', async ({page})=>
  {
    await page.goto("https://testautomationpractice.blogspot.com/")
   
    const tab = await page.locator('#productTable')
   
    const rows = await tab.locator('tbody tr')
             
    const pages =  await page.locator('.pagination li a')
       
    console.log("Number of pages in the table:-", await pages.count())
   
        for(let p=0; p< await pages.count();p++)
        {
            if(p>0)
            {
                await pages.nth(p).click()
            }
   
            for(let i=0; i<await rows.count();i++)  // Outer for loop is representing the rows.
            {
              const cr = rows.nth(i)   // Here i = 0 means first row, i = 1 means second row
              const tds =cr.locator('td')
              console.log("Number of columns in the selected row:-", await tds.count())
             
              // Inner for loop is representing the columns. we dont require last column, so used -1.
              for(let j=0; j<await tds.count()-1;j++)  
              {   
               console.log(await tds.nth(j).textContent())
              }
             
            }
         }
   
         await page.waitForTimeout(3000)
      })