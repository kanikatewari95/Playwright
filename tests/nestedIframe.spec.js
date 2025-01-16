const{test,expect} = require('@playwright/test')

test("iframe using frame locator", async({page})=>{
    
    await page.goto('http://autopract.com/selenium/iframe1/')

    // Access the parent iframe
    const parentFrame = page.frameLocator('iframe#parent-frame');

    // Access the child iframe within the parent
    const childFrame = parentFrame.frameLocator('iframe#child-frame');

    // Interact with elements inside the child iframe
    await childFrame.locator('text="Click Me"').click();

})