const{test,expect} = require('@playwright/test')

test("date picker", async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const year = '2024'
    const month = 'March'
    const date = '17'
    await page.locator('input[id="datepicker"]').click()


    while(true){
        const currentMonth = await page.locator('span[class="ui-datepicker-month"]').textContent()
        const currentYear = await page.locator('span[class="ui-datepicker-year"]').textContent()

        if(currentYear==year&&currentMonth==month){
            break;
        }
        await page.locator('a[title="Next"]').click()

    }
    
    //since we are getting element in the form of array
    const dates = await page.$$('a[class*="ui-state-default"]')

    //date selection using loop
    for(const dt of dates){
        if(await dt.textContent()==date){
            await dt.click()
            break;
        }
    }
    
    
    
    await page.waitForTimeout(3000)

    

    

})

