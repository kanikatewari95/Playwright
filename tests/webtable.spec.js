const{test,expect} = require('@playwright/test')

test("web table", async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('table[id="productTable"]')

    //total number of columns
    const columns = await page.locator('table[id="productTable"] thead tr th')
    console.log("Total number of columns: " + columns.count())
    expect(await columns.count()).toBe(4)

    //total number of rows
    const rows = await page.locator('table[id="productTable"] tbody try')
    console.log("Total number of rows: " + rows.count())
    expect(await rows.count()).toBe(5)

    //select checkbox for Smartwatch
    const matchedRow = rows.filter({
        has: page.locator('td'),hasText:'Smartwatch'
    })

    await matchedRow.locator('input').check()
    await page.waitForTimeout(5000)

    

})

