const{ test,expect } = require('@playwright/test')

test("visible page screenshot ", async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await expect(page.locator('div#narbar-menu')).toBeVisible({timeout:11000})
    await page.screenshot({path:'tests/screenshot/visiblePage.png'})
    
})

test("full page screenshot ", async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await expect(page.locator('div#narbar-menu')).toBeVisible({timeout:11000})
    await page.screenshot({path:'tests/screenshot/fullPage.png', fullPage:true})
    
})

test.only("element screenshot ", async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await expect(page.locator('div#narbar-menu')).toBeVisible({timeout:11000})
    await page.locator('div.product-thumb >>nth=0').screenshot({path:'tests/screenshot/element1.png'})

    
})