const{ test,expect } = require('@playwright/test')

test("upload file with INPUT tag", async({page})=>{
    await page.goto('http://autopract.com/selenium/upload1/')

    // Locator for Add Files Button
    await page.locator("input[type='file']").setInputFiles('tests/uploadSample/sample1.pdf')

    // Locator for Start Upload Button
    await page.locator("button[type='submit']").click()
    

})


test.only("upload file without INPUT tag", async({page})=>{
    await page.goto('http://autopract.com/selenium/upload2/')

    const filechooserPromise =    page.waitForEvent('filechooser')
    await page.locator('a#pickfiles').click()
    const filechooser = await filechooserPromise

    await filechooser.setFiles('tests/uploadSample/sample1.pdf')


})

