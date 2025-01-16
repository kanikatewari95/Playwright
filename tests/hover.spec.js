const{ test,expect } = require('@playwright/test')

test("mouse hover", async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await expect(page.locator('div#narbar-menu')).toBeVisible({timeout:11000})

    await page.locator('ul.nav > li > a[href*="/desktops"]').hover()
    await page.locator('a[href*="/desktops"]  + div.dropdown-menu a:has-text("Mac (1)")').hover()

    await page.waitForTimeout(3000)
})