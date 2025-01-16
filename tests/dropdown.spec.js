const{test,expect} = require('@playwright/test')

test("dropdown test", async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await expect(page.locator('h1.title:has-text("Dropdown")')).toBeVisible()

    await page.pause() //to debug the test

    // dropdown with "Select" tag
    await page.locator('select#fruits').selectOption({value:'2'})
    await page.locator('select#superheros').selectOption({label:'Captain Marvel'})
    await page.locator('select#lang').selectOption({index:3})
    await page.locator('select#country').selectOption({value:'Ecuador'})

})

test.only("Dynamic Dropdown", async({page})=>{

    await page.goto("http://autopract.com/selenium/dropdown4/")
    await page.pause()
    //dropdown without "Select" tag
    await page.locator('button[class*="dropdown-toggle"]').click()
    await expect(page.locator('div[class="dropdown-menu open"]')).toBeVisible()
    
    //await page.locator('ul.dropdown-menu').locator('li').filter({ hasText:/^India$/ }).click()
    await page.locator('ul.dropdown-menu span:has-text("Argentina")').click()
})