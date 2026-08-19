import { Base } from "./BasePage"


export class LoginPage extends Base
{
    private readonly usernameInput = "Username"
    private readonly passwordInput = "Password"
    private readonly loginbtn = "input#login-button"
    private readonly errormsg="//h3[@data-test='error']" 

    async login(username: string, password: string) {
        await this.page.getByPlaceholder(this.usernameInput).fill(username)
        await this.page.getByPlaceholder(this.passwordInput).fill(password)
        await this.page.locator(this.loginbtn).click()
    }
    async getErrorMessage()
    {
        return await this.page.locator(this.errormsg).textContent()
    }
}