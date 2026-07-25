
import {test , expect} from "@playwright/test"


test("Handling Date Picker" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    const dateInput = await page.locator('[id="datepicker"]')

    await dateInput.waitFor()
    await dateInput.click()

    //Selective 
    let date = "15"
    let month = "August"
    let year = "2028"

    //month & year

    while(true){
      const cMonth =  await page.locator('[class="ui-datepicker-month"]').textContent()
      const cYear = await page.locator('[class="ui-datepicker-year"]').innerText()

      if(cMonth === month && cYear === year){
        break
      }

      await page.click('//span[text()="Next"]')

    //   await page.click('//span[text()="Prev"]')

    }

    //date
    await page.locator(`//a[@class="ui-state-default" and text()="${date}"]`).click()
    await page.waitForTimeout(2000)
})


























































