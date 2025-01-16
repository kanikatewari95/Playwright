const{test,expect} = require('@playwright/test')
import { loginpage } from '../pom/loginpage'

test('test', async({page})=>{

    //LogIn
    const login = new loginpage(page)
    await login.gotoLoginPage();

    await login.login('pavanol', 'test@123')

    await page.waitForTimeout(3000)

    //HomePage
    
})