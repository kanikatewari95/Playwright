// const{test,expect} = require('@playwright/test')

// test.afterAll('do this after all test ends', async () => {
//     console.log('I am here after all test')
// });

// test.afterEach('do this after all test ends', async ({ page }) => {
//     console.log('I will execute after each test')
// });

// test.beforeAll(async()=>{
//     console.log('I am here before all tests')
// }) 

// test.beforeEach(async({page})=>{
//     console.log('I will execute before each test')
// }) 

// test("test1", async({page})=>{
//     await page.goto('http://autopract.com/selenium/form5/')    
    
// })

// test ("test2", async({page})=>{
//     await page.goto('http://google.com/')
// })

const{ test,expect } = require('@playwright/test')

test.beforeEach(async({page})=>{
    await page.goto('https://letcode.in/alert')
    await expect(page).toHaveTitle(/letcode/i)
}) 

test.beforeAll(async()=>{
    console.log('Hello')
}) 

test.afterAll(async()=>{
    console.log('Bye')
}) 

test.afterEach(async({page})=>{
    await page.goto('https://google.com')
}) 

test.skip("simple alert",async({page})=>{
    const button1 = await page.locator('button#accept');

    page.on('dialog', (dialog)=>{
        console.log(dialog.message());  // shows the message in the dialog modal
        console.log("Type of alert is : " + dialog.type()); // shows the type of alert
        dialog.accept(); // to click on OK button of alert
    })

    await button1.click();
})

test.only("confirm alert",async({page})=>{
    const button2 = await page.locator('button#confirm')

    page.on('dialog',(dialog)=>{
        console.log(dialog.message)
        console.log("Type of alert is : "+dialog.type())

        dialog.accept()
        //dialog.dismiss()

    })
    await button2.click();

})


test("modern/sweet alert",async({page})=>{
    const button4 = await page.locator('button#modern')

    await button4.click();
    await expect(page.locator('p.title')).toBeVisible();
    await page.locator('button.modal-close').click();
})