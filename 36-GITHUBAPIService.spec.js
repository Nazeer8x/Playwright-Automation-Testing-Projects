const { test, expect } = require("@playwright/test");

test("Get List of Repositories", async ({ request }) =>
{
    const x = await request.get("https://api.github.com/users/Nazeer8x/repos",
    {
       headers:
       {
         Authorization: `token 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`,  // Token goes here
         Accept: "application/vnd.github+json"   // Required for GitHub API
       },
 
    });
 
    // console.log(await x.json());
 
      const repos = await x.json();
 
    // Print only repo names
    const repoNames = repos.map(repo => repo.name);
 
    console.log("Repository Names:", repoNames);
   
});

test("Create Repository", async ({ request }) =>
{
  const response = await request.post("https://api.github.com/user/repos",
  {
    headers:
    {
      Authorization: `token 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`,  // Token goes here
      Accept: "application/vnd.github+json"   // Required for GitHub API
    },
    data:
    {
      name: "Playwright API Service",
      description: "This is your first API repo!",
      homepage: "https://github.com",
      private: false,
      is_template: true
    }
  });
 
  // Assert status
  expect(response.status()).toBe(201);
 
  // Print JSON body
  const res = await response.json();
  console.log("Repository Created:", res.full_name);
 
  // Extract repo ID
  console.log("Repo ID:", res.id);
});

/* the PUT method is usually used with GitHub API for actions like:
 
    ⭐ Starring a repository
 
    👁️ Watching (subscribing) a repository
 
    ➕ Adding collaborators
 
If you want to update a repository, GitHub uses PATCH, not PUT. */
 
test("Put Method - Star a Repository", async ({ request }) =>
{
  const response = await request.put("https://api.github.com/user/starred/Nazeer8x/Playwright-API-Service",
  {
    headers:
    {
         Authorization: `token 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`,  // Token goes here
         Accept: "application/vnd.github+json"   // Required for GitHub API
    }
  });
 
  // GitHub returns 204 No Content if successful
  expect(response.status()).toBe(204);
  console.log("Repository starred successfully!");
});

test("Update Repository", async ({ request }) =>
{
  const response = await request.patch("https://api.github.com/repos/Nazeer8x/Playwright-API-Service",
  {
    headers:
    {
      Authorization: `token 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`,
      Accept: "application/vnd.github+json"
    },
    data:
    {
      description: "Updated description via Playwright API",
      homepage: "https://playwright.dev",
      private: false
    }
  });
 
  expect(response.status()).toBe(200);
 
  const res = await response.json();
 
  // console.log("Updated Repo:", res);
 
    //  Print only repository name and updated description
 
  console.log({ name: res.name, description: res.description })
});

test("Delete Repository", async ({ request }) =>
{
    const x = await request.delete("https://api.github.com/repos/Nazeer8x/Playwright-API-Service",
    {
       headers:
       {
         Authorization: `token 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`,  // Token goes here
         Accept: "application/vnd.github+json"   // Required for GitHub API
       },
 
    });
 
    console.log("Delete Response Status:", x.status());
    expect(x.status()).toBe(204);
 
});
 
 
 
 
 
