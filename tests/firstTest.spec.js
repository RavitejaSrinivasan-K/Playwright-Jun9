

import {test , expect} from "@playwright/test"


test('Validate LoginPage functionality' , async function ({page}){

   //browser
   await page.goto('https://www.saucedemo.com/')

   //title & url
   const pageTitle = await page.title()

   console.log(await page.url())

   //assert title & url
   await expect.soft(page).toHaveTitle(/Swag Labs/)

   await expect(page).toHaveURL('https://www.saucedemo.com/')

   //username & password
   await page.locator('[id="user-name"]').fill('standard_user')

   await page.locator('[name="password"]').fill('secret_sauce')

   //login
   await page.locator('[data-test="login-button"]').click()

   //validate dashboard
   await expect(page.locator('[class="app_logo"]')).toBeVisible()

})































