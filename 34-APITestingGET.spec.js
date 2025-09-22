const { test, expect } = require("@playwright/test");

test.only("Get users-Page 2", async ({ request }) => {
    const x = await request.get('https://reqres.in/api/users?page=2')
 
    console.log(await x.json()) 
 
    expect(x.status()).toBe(200)
 
    const x1 = await x.text();
 
    expect(x1).toContain('Lindsay')
 
})

test("Get users-Page 1", async ({ request }) => {
    const x = await request.get('https://reqres.in/api/users?page=1');
 
    console.log(await x.json())
 
    expect(x.status()).toBe(200)
 
    const x1 = await x.text();
 
    expect(x1).toContain('Tracey')
 
})

test("Get Method", async ({ request }) =>
{
  // Send GET request
  const response = await request.get("https://dummyjson.com/posts/1");
 
  // Assert status code
  expect(response.status()).toBe(200);
 
  // Parse JSON
  const resBody = await response.json();
 
  // Print full response (same as fetch output)
  console.log(resBody);
 
  // Optional: Assert a few fields
  expect(resBody.id).toBe(1);
  expect(resBody).toHaveProperty("title");
  expect(resBody.reactions).toHaveProperty("likes");
});