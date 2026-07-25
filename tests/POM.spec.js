
import {test , expect} from "@playwright/test"
import { LoginPage } from "../pages/loginPage"
import { HomePage } from "../pages/homePage"
import { CartPage } from "../pages/cartPage"



test("Validate Debo Blaze Functionality" , async ({page})=>{

    let lp = new LoginPage(page)

    await lp.navigate()
    await lp.login()

    let hp = new HomePage(page)

    await hp.productVisible()
    await hp.printProdText()

    let cp = new CartPage(page)

    await cp.selectProduct()
    await cp.addToCart()
    await cp.cartOption()

    await page.waitForTimeout(3000)
})











