const{ test,expect } = require('@playwright/test')

test("check assertions", async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register')
    
    await expect(page).toHaveURL(/.*\/register/)

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    await expect(page.locator('div.header-logo')).toBeVisible()

    await expect(page.locator('input#small-searchterms')).toBeEnabled()

    await expect(page.locator('input#gender-female')).not.toBeChecked()
    await page.locator('input#gender-female').click()
    await expect(page.locator('input#gender-female')).toBeChecked()

    await expect(page.locator('button#register-button')).toHaveAttribute('type','submit')

    await expect(page.locator('div.page-title > h1')).toHaveText('Register') //exact match

    await expect(page.locator('div.page-title > h1')).toContainText('Reg') //partial match

    await page.locator('input#FirstName').fill('kanika')
    const inputValue = await page.locator('input#FirstName').inputValue()
    console.log(inputValue)
    await expect(page.locator('input#FirstName')).toHaveValue('kanika')

    //to get the url of page
    console.log(page.url())


})