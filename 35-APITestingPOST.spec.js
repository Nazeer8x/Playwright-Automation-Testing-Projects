const { test, expect } = require("@playwright/test");

test("API Post", async ({ request }) =>
{
  const x = await request.post('https://dummyjson.com/posts/add',
  {
     headers: { 'Content-Type': 'application/json'},
 
     data:JSON.stringify(
     {
      title: "Test User",
      userId: 40
 
     })
  });
 
    console.log(await x.json())
 
    expect(x.status()).toBe(201)
 
    var res = await x.json()
 
    console.log(res)
 
  // Check everything
 
  console.log("Status:", x.status());
 
  const text = await x.text();
  console.log("Raw response:", text);
 
   // console.log("Headers:", x.headers());
 
});
