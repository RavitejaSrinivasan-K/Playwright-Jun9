import { expect } from "@playwright/test";

export class LoginPage{

    constructor(page){
        this.page = page;
        this.loginLinkTxt = '[id="login2"]'
        this.username = '[id="loginusername"]'
        this.password = '[id="loginpassword"]'
        this.loginBtn = '//button[text()="Log in"]'
        this.logoutLinkTxt = '[id="logout2"]'
    }

    async browserLaunch(){
        await this.page.goto('https://www.demoblaze.com/')
    }

    async loginCredentials(){
        await this.page.locator(this.loginLinkTxt).click()

        await this.page.locator(this.username).fill("Raviteja18")
        await this.page.locator(this.password).fill("Trend@123")

        await this.page.locator(this.loginBtn).click()
    }

    async logoutValidation(){
        await expect(this.page.locator(this.logoutLinkTxt)).toBeVisible()
    }
}








