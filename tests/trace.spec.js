const{ test,expect } = require('@playwright/test')
const { timeout } = require('../playwright.config')

test("view tracing ", async({page})=>{
    await page.goto('https://demoblaze.com/index.html')
    await expect(page.locator('ul.navbar-nav')).toBeVisible({timeout:11000})

    await page.locator('ul.navbar-nav a:has-text("Log in")').click()
    await page.locator('input#loginusername').click()
    await page.locator('input#loginusername').fill('pavanol')
    await page.locator('input#loginpassword').click()
    await page.locator('input#loginpassword').fill('test@123')
    await page.getByRole('button', { name:"Log in"}).click()

    await expect(page.locator('#logout2').toBeVisible({ timeout:18000 }))
   
    
})