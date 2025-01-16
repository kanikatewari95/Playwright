const{ test,expect } = require('@playwright/test')

test("multiple tab", async({context})=>{
    const page = await context.newPage();
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const newPagePromise = context.waitForEvent('page') //it'll open a blank tab in the  browser until the next click action is performed

    await page.locator('a[href*="facebook"] >>nth=0').click()

    const newPage = await newPagePromise

    await newPage.waitForLoadState() //wait for the new tab to load completly

    await expect(newPage.locator('span:has-text("See more on Facebook") >>nth=0')).toBeVisible({ timeout:15000 })

    console.log(await page.title())
    console.log(await newPage.title())
   


})