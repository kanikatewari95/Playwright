const{ test,expect } = require('@playwright/test')

test("drag and drop", async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await expect(page.locator('div#mainContainer h2')).toBeVisible({timeout:11000})

    await page.locator('div#box3').dragTo(page.locator('div#box103'))

    await page.waitForTimeout(5000)

})