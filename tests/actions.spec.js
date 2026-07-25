
import {test , expect} from '@playwright/test'


test("Handling Radio button" , async function ({page}) {
    
    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForTimeout(2000)

    //radio
    await page.locator('[id="female"]').check()
    await page.waitForTimeout(2000)

    //assert
    await expect(page.locator('[id="female"]')).toBeChecked()


    //radio
    await page.locator('//label[text() ="Male"]').click()
    await page.waitForTimeout(2000)

    //assert
    expect(await page.locator('//label[text() ="Male"]').isChecked()  ).toBeTruthy()
})




test("Handling CheckBox" , async function({page}){

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForTimeout(2000)

    //check
    await page.locator('id=sunday').check()
    await page.waitForTimeout(2000)

    //assert
    await expect(page.locator('id=sunday')).toBeChecked()

    //multiple check box
    const multiCheck = [
        page.locator('[id="tuesday"]') , page.locator('#thursday') , 
        page.locator('//input[@id="saturday"]')
    ]

    for (const element of multiCheck) {
        await element.check()
        expect(element).toBeChecked()
    }
    
    await page.waitForTimeout(2000)

     for (const element of multiCheck) {
        await element.uncheck()
        expect(element).not.toBeChecked()
    }
})



test("Handling Single DropDown" , async function({page}){

    //broswer
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Scroll
    await page.locator('text=Country:').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //Handle DropDown
    const dropDown =  page.locator('id=country')
    
    await dropDown.click()

    //Visible Text
    await dropDown.selectOption('India')
    await page.waitForTimeout(2000)

    //Label
    await dropDown.selectOption({label : 'China'})
    await page.waitForTimeout(2000)

    //Value
    await dropDown.selectOption({value : 'australia'})
    await page.waitForTimeout(2000)

    //Index
    await dropDown.selectOption({index : 3})
    await page.waitForTimeout(2000)
})




test("Handling Multiple DropDown" , async function({page}){

    //broswer
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Scroll
    await page.locator('label:has-text("Colors:")').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //Handle DropDown
    await page.locator('id=colors').selectOption(["Red" , "Green" , "Yellow" , "Red" , "Green"])
    await page.waitForTimeout(5000)

    //Dis Select
    await page.locator('id=colors').selectOption(["Yellow"])
    await page.waitForTimeout(5000)

    //Handle Duplicate
    await page.locator('id=colors')
    .selectOption([{label : 'Red'} , {value : 'green'} , {index : 4} , {index : 6}])

    await page.waitForTimeout(5000)
    
})



test("Handle Dynamic DropDown" , async function({page}){

    //browser
    await page.goto('https://www.amazon.in/')

    await page.waitForLoadState()

    //search a value
    await page.locator('[id="twotabsearchtextbox"]').fill('mobiles')

    //iterate values 
    await page.waitForSelector('[class="left-pane-results-container"]')

    //Multi web elements

  const resultText = await 
  page.$$('//div[@class="left-pane-results-container"]//div[contains(@aria-label,"mobiles")]')

    for (const element of resultText) {
      const text = await element.textContent()

      if(text.includes(' under 8000')){
        await element.click()
        break
      }
    }

    await page.waitForTimeout(3000)

})



