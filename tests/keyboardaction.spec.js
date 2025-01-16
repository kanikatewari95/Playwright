const{ test,expect } = require('@playwright/test')

test("keyboard action", async({page})=>{
    await page.goto('https://www.google.com/')
    await page.pause()
   
    // await page.locator('textarea[title="Search"]').click();
    // await page.locator('textarea[title="Search"]').fill('playwright')
    await page.locator('textarea[title="Search"]').focus()
    await page.keyboard.type('playwright automation')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Control+V')
    await page.keyboard.press('ArrowLeft')
    
})
