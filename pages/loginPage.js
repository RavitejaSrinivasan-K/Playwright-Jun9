
const {BasePage} = require('./basePage')
const {userDetails} = require('../testData/testData1')

import { expect } from '@playwright/test'


export class LoginPage extends BasePage{

    constructor(page){
      super(page)

      this.loginLink = page.locator('[id="login2"]')
      this.username = page.locator('[id="loginusername"]')
      this.password = page.locator('[id="loginpassword"]')
      this.loginBtn = page.locator('//button[text()="Log in"]')
      this.logout = page.locator('[id="logout2"]')
    }

    async navigate(){
      await this.page.goto("https://www.demoblaze.com/")
    }

    async login(){
      await this.click(this.loginLink)
      await this.fill(this.username , userDetails.user )
      await this.fill(this.password, userDetails.pass)
      await this.click(this.loginBtn)

      await expect(this.logout).toBeVisible()

    }
}




// module.exports = LoginPage;

