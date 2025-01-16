// @ts-check
const{test, expect} = require('@playwright/test')

test('Try Playwright Test', async ({page}) => {
await page.goto('https://playwright.dev/')
await expect(page).toHaveTitle(/Playwright/)
})


test.only('new test', async({page})=>{
await page.goto('https://www.google.com/')
await expect(page).toHaveTitle('Google')
await page.locator('textarea[title="Search"]').click();
await page.locator('textarea[title="Search"]').fill('playwright')
await expect(page.locator('div[role="presentation"] >>nth=0')).toBeVisible({ timeout:25000})
})