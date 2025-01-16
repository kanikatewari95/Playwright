exports.loginpage = 
class loginpage {

    constructor(page){
        this.page = page;
        this.loginLink = 'a#login2';
        this.username = 'input#loginusername';
        this.password = 'input#loginpassword';
        this.loginButton = 'button[onclick="logIn()"]';
    }

    async gotoLoginPage(){
        await this.page.goto('https://demoblaze.com/index.html');
    }

    async login(username, password){
        await this.page.locator(this.loginLink).click()
        await this.page.locator(this.username).click()
        await this.page.locator(this.username).fill(username)
        await this.page.locator(this.password).click()
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.loginButton).click()
    }


}