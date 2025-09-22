const { test, expect } = require("@playwright/test");

// Hooks are of 4 types:-
 
// beforeAll() → Runs once before all tests (e.g., launch browser, create test data).
 
// beforeEach() → Runs before every test (e.g., login).
 
// afterEach() → Runs after every test (e.g., logout or cleanup).
 
// afterAll() → Runs once after all tests (e.g., close browser, delete test data).

// Hooks don’t support titles like test().
 
// beforeEach/afterEach → have access to { page }.
 
// beforeAll/afterAll → do not have access to page, but you can use { browser } or { context } if needed.
test.beforeAll('Run before all test', async() =>
{
    console.log('Hooks-Running before all test...!')
})

test.beforeEach('Run before each test', async({page}) =>
{
    console.log('Hooks-Running before each test...!')
 
    await page.goto('https://www.youtube.com/')    
})

test.afterEach('Run after each test', async({page}) =>
{
    console.log('Hooks-Running after each test...!')
})
 
test.afterAll('Run after all test', async() =>
{
    console.log('Hooks-Running after all test...!')
})
 
 
test('Hooks in playwright', async({page}) =>
{
    // await page.goto('https://www.youtube.com/')  
 
    await page.locator('#center > yt-searchbox > div.ytSearchboxComponentInputBox > form > input').click();
 
    await page.locator('#center > yt-searchbox > div.ytSearchboxComponentInputBox > form > input').fill('cypress Automation');
    
    console.log("Test 1 execution")

    await page.waitForTimeout(2000)
})
 
test('Hooks1 in playwright', async({page}) =>
{
    await page.locator('#center > yt-searchbox > div.ytSearchboxComponentInputBox > form > input').click();
   
    await page.locator('#center > yt-searchbox > div.ytSearchboxComponentInputBox > form > input').fill('Playwright Automation');
 
    console.log("Test 2 execution")

    await page.waitForTimeout(2000)  
})
 
 