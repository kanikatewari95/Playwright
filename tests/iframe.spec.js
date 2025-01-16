const{test,expect} = require('@playwright/test')

test("iframe using frame locator", async({page})=>{
    
    await page.goto('http://autopract.com/selenium/iframe1/')

    //await page.pause()
    const myFrame = page.frameLocator('iframe#testframeid')
    await myFrame.locator('input.form-control').first().fill("Kanika")
})