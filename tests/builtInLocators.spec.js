

import {test , expect} from "@playwright/test"


test("Handle BuiltIn Locators" , async function({page, context}){

    //browser
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //alt
   const logo = await page.getByAltText('company-branding')
   await expect(logo).toBeVisible()


    //placeholder
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')


    //role
    await page.getByRole('button' , {name : ' Login '}).click()
    await page.waitForTimeout(3000)

    //Text
   const userName = await page.locator('[class="oxd-userdropdown-name"]').textContent()

   await expect(page.getByText(userName)).toBeVisible()


   //label
    await expect(page.getByLabel('Sidepanel')).toBeVisible()

   //title
    // await page.getByTitle('Help').click()

   //test id
   //playwright.dev

    const [newPage] =   await Promise.all([
        context.waitForEvent('page') ,
        page.getByTitle('Help').click()
    ])


    // await newPage.getByTestId(/data-testId/).fill()
    await page.waitForTimeout(4000)

})


















