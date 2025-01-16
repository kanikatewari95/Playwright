const{ test,expect } = require('@playwright/test')
test.use({
    
})

test("upload file with INPUT tag", async({page})=>{
    await page.goto('http://autopract.com/selenium/upload1/')

    // Locator for Add Files Button
    await page.locator("input[type='file']").setInputFiles('tests/uploadSample/sample1.pdf')

    // Locator for Start Upload Button
    await page.locator("button[type='submit']").click()
    

})


test.only("upload multiple files with INPUT tag", async({page})=>{
    await page.goto('http://autopract.com/selenium/upload1/')
    await page.pause()
    
    // Locator for Add Files Button
    await page.locator("input[type='file']").setInputFiles(['tests/uploadSample/sample1.pdf','tests/uploadSample/sample2.pdf'])

    // // To remove the files
    // await page.locator("input[type='file']").setInputFiles([])

    await page.waitForTimeout(5000)

    // Locator for Start Upload Button
    //await page.locator("button[type='submit']").click()
    
})

test("upload file without INPUT tag", async({page})=>{
    await page.goto('http://autopract.com/selenium/upload2/')

    const filechooserPromise = page.waitForEvent('filechooser')

    //click on select files
    await page.locator('a#pickfiles').click()

    const filechooser = await filechooserPromise

    await filechooser.setFiles('tests/uploadSample/sample2.pdf')

    //click on upload button

    await page.locator('a#uploadfiles').click()    

})

