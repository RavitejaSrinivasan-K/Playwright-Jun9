

import {test , expect, chromium, firefox, webkit} from "@playwright/test"

/**
 * Browser - It is Browser instance isolated. (Chromium, FireFox, WebKit)
 * 
 * Context - It is isolated Browser session like Incognito mode.
 *           It has its own cache, cookies, and local storage.
 * 
 * Page - A single tab or window within a context. 
 *        This is where you navigate to URLs and interact with the DOM.
 * 
 * Request - It is Fixture used for APIRequestContext.
 *           It is highly useful for backend testing
 */

test("Handling Multiple Windows" , async ({browser})=>{

 const context =  await browser.newContext({permissions : []})   //browser

 const page1 = await context.newPage()   // tab 1

 await page1.goto('https://www.amazon.in/')
 await page1.locator('[id="twotabsearchtextbox"]').fill('mobile')

 await page1.waitForSelector('//input[@id="twotabsearchtextbox"]//following::div[@class="s-suggestion-container"]')
 await page1.locator('//input[@id="twotabsearchtextbox"]//following::div[contains(@aria-label,"under 30000")]').click()  

 await page1.waitForTimeout(2000)



 const page2 = await context.newPage()    // tab 2

 await page2.goto('https://www.flipkart.com/')
 await page2.locator('//input[@placeholder="Search for Products, Brands and More" and not(@readonly)]').fill("mobile")   

 await page2.waitForTimeout(2000)

 await page2.keyboard.press('Enter')

})



test("Handling Multiple Tabs " , async ({})=>{

    const browser = await chromium.launch({slowMo : 2000, channel : "msedge" })

    const context = await browser.newContext()
    const page = await context.newPage()


    await page.goto('https://www.amazon.in/')


   const searchBar = page.locator('[id="twotabsearchtextbox"]')
   await searchBar.waitFor()
   await searchBar.fill('mobile')

   await page.locator('[id="nav-search-submit-button"]').click()
   //page.keyboard.press('Enter')

   const product = page.locator('//h2[contains(@aria-label, "OnePlus 15R | 12GB+256GB")  and contains(@class,"a-size-medium")]')

   const [newPage] = await Promise.all([
    context.waitForEvent('page') , 
    product.click()
   ])

   
//    const [newPage] = await Promise.all([
//     page.waitForEvent('popup') , 
//     product.click()
//    ])

   await newPage.waitForLoadState()

   await newPage.click('//span[@class="a-button a-spacing-small a-button-primary a-button-icon"]/child::span/input[@id="add-to-cart-button"]')

   await expect(newPage.locator('[name="proceedToRetailCheckout"]')).toBeVisible()


})

































































