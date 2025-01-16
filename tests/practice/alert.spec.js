const{test,expect} = require('@playwright/test')

test.describe('alerts', () => {

    test("simple alert", async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/')

        page.on('dialog', (dialog)=>{
            console.log(dialog.type())
            console.log(dialog.message())
            dialog.accept()
        })

        await page.locator('button[onclick="myFunctionAlert()"]').click()

        await page.waitForTimeout(5000)

    })

    test("Confirm alert", async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/')

        page.on('dialog', (dialog)=>{
            console.log(dialog.type())
            console.log(dialog.message())
            dialog.accept()
            // dialog.dismiss()
        })

        await page.locator('button[onclick="myFunctionConfirm()"]').click()
        await page.waitForTimeout(3000)
        await expect(page.locator('p#demo')).toBeVisible()

    })

    test('Prompt alert',async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/')

        page.on('dialog', (dialog)=>{
            console.log(dialog.type())
            console.log(dialog.message())
            dialog.accept('Kanika')
        })

        await page.locator('button[onclick="myFunctionPrompt()"]').click()
        await page.waitForTimeout(3000)
        await expect(page.locator('p#demo')).toBeVisible()
    })

})