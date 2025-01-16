// @ts-check

const{test,expect}=require('@playwright/test')

test('testing', async({page})=>{

    await page.goto('')

    const filechooserpromise = page.waitForEvent('filechooser')
    await page.locator('').click()
    const filechooserEve = await filechooserpromise

    await filechooserEve.setFiles('')
   
    
})