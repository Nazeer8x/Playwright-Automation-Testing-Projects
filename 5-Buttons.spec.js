const { test, expect } = require("@playwright/test");

test.only('Button methods', async ({page})=>
{
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill("standard_user"); 

    await page.locator('#password').fill("secret_sauce"); 

    await page.waitForTimeout(3000);

    //checking button visibility

    const y = await page.isVisible("#login-button");

    console.log("Button Visibility:", y);

    //Checking button enabled or not - isEnabled method used on buttons etc.

    const a = await page.isEnabled("#login-button");

    console.log("Button enabled:", a);

    //Getting button name using Inner text method

    const btn = await page.locator("#login-button").inputValue();
;
 
   // const b1 = await btn.inputValue();

   
    console.log("Login button name:-", btn);


    //Button access - click()


 
    await page.locator('#login-button').click();

    const x = await page.title(); //To get title of page

    await page.waitForTimeout(3000);


    console.log('Page Title is:', x);

})

test.fail('Button Methods-2', async ({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   
    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder('Password').fill("admin123")
 
    const btn = await page.locator('[type="submit"]');
 
    const b1 = await btn.innerText();
   
    console.log("Login button name:-", b1)
 
    await page.locator('[type="submit"]').click();
 
    const pt = await page.title();
    console.log('Page title is:-',pt);
 
})