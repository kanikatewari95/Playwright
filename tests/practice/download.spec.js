const{ test,expect } = require('@playwright/test')

test("download file", async({page})=>{
    await page.goto('https://demo.automationtesting.in/FileDownload.html')
    await expect(page.locator('div.container h1')).toBeVisible({timeout:11000})

    const downloadFile= page.waitForEvent('download')

    await page.locator('a.btn-primary').click()
    const download = await downloadFile

   // console.log(await download.path())

    await download.saveAs('tests/practice/downloadfile.txt')




   
})