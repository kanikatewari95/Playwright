const{ test,expect } = require('@playwright/test')

test("right click", async({page})=>{
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
    await page.locator('span:has-text("right click me")').waitFor({state:'visible'})
    await page.locator('span:has-text("right click me")').click({button:'right'})
    await page.waitForTimeout(3000)
})

test("double click", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('button:has-text("Copy Text")').dblclick()

    const txt2 = await page.locator('input#field2')

    await expect(txt2).toHaveValue('Hello World!')
    await page.waitForTimeout(5000)
    
})