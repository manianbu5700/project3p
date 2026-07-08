export class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('//input[@id="username"]')
        this.password = page.locator('//input[@id="password"]')
        this.loginButton = page.locator('//input[@id="login"]')

    }
    async launchUrl() {
        await this.page.goto('https://adactinhotelapp.com/')
    }
    async enterUsername() {
        await this.username.fill('elamuhil')
    }
    async enterPassword() {
        await this.password.fill('Duke@015')
    }
    async clickLoginButton() {
        await this.loginButton.click()
    }
}

