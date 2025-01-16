const{ test,expect } = require('@playwright/test')

test("Open link in popup form", async({page})=>{

    await page.goto('http://autopract.com/selenium/popup/')

    // const [newPopup] = await Promise.all([
    //     page.waitForEvent('popup'),
    //     page.locator('a:has-text("Open Link in Popup")').click()

    // ])
    const newPopupPromise = page.waitForEvent('popup')
    await page.locator('a:has-text("Open Link in Popup")').click()
    const newPopup = await newPopupPromise

    await newPopup.waitForLoadState();
    await expect(newPopup.locator('a[class*="site-logo"]')).toBeVisible({ timeout:15000 })


})

test.only("Modal based popup", async({page})=>{
    await page.goto('http://autopract.com/selenium/popup/')

    await page.locator('a.open-button').click()
    await expect(page.locator('div[class="popup-content"]')).toBeVisible({ timeout: 11000 })
    await page.locator('a.close-button').click()

})