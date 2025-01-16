const{test,expect} = require('@playwright/test')

test("Try Checkbox", async({page})=>{
    await page.goto('http://autopract.com/selenium/form5/')

    await page.pause()
    await expect(page).toHaveTitle(/Contact Form/i)
    await expect(page.locator('div.groupname:has-text("Select Value")')).toBeVisible({timeout:15000})

    await expect(page.locator('input[value="one"]')).toBeChecked()
    await page.locator('input[value="one"]').click()
    await expect(page.locator('input[value="one"]')).not.toBeChecked()

    await page.locator('input[value="three"]').check()
    await page.locator('input[value="three"]').uncheck()
    await expect(page.locator('input[value="three"]')).not.toBeChecked()
    
})

test.only("Try Radio Button", async({page})=>{
    await page.goto('http://autopract.com/selenium/form5/')

    await page.pause()
    await expect(page).toHaveTitle(/Contact Form/i)
    await expect(page.locator('div.groupname:has-text("Select Your Country")')).toBeVisible({timeout:15000})

    await page.locator('input[value="CA"]').click()
    await expect(page.locator('input[value="CA"]')).toBeChecked()
    await page.locator('input[value="IN"]').check()
    await expect(page.locator('input[value="CA"]')).not.toBeChecked()

    
    
})