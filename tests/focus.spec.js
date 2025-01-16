const{ test,expect } = require('@playwright/test')

test("focus on input field",async({page})=>{
    
    await page.goto('http://autopract.com/selenium/focus1/')
    await page.pause();
    await page.locator('//input[@type="text"]').focus(); //to focus
    await page.locator('//input[@type="text"]').click()
    await page.locator('//input[@type="text"]').fill('Kanika')
})
