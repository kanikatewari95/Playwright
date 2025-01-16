const{ test,expect } = require('@playwright/test')

test("download file", async({page})=>{
    await page.goto('https://demo.automationtesting.in/FileDownload.html')
    await expect(page.locator('div.container h1')).toBeVisible({timeout:11000})

    // Start waiting for download before clicking. No await will be used.
    const downloadFile = page.waitForEvent('download')
    await page.locator("a[type='button']").click()
    const download = await downloadFile

    // Wait for the download process to complete
    console.log(await download.path())

    // Save downloaded file somewhere
    await download.saveAs('tests/practice/downloadfile.txt')

})