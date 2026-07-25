
import {test , expect} from "@playwright/test"


test('Handling Mouse Hover' , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/', {waitUntil : 'load'})

    //scroll
    await page.locator('[class="dropbtn"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //hover
    await page.locator('[class="dropbtn"]').hover()
    await page.waitForTimeout(2000)

    // click 
    await page.locator('//a[text()="Laptops"]').click()
    await page.waitForTimeout(2000)
})



test("Handling Mouse Double Click" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/', {waitUntil : 'load'})

    //scroll
    await page.locator('[id="field1"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //Clear
    await page.locator('[id="field1"]').clear()
    await page.waitForTimeout(2000)

    //Fill
    await page.locator('[id="field1"]').fill("Raviteja")
    await page.waitForTimeout(2000)

    //Double
    await page.locator('text=Copy Text').dblclick()
    //button:has-text('Copy Text')
    await page.waitForTimeout(2000) 

})



test("Handling Drag and Drop" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/', {waitUntil : 'load'})

    //scroll
    await page.locator('[id="draggable"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //drangAndDrop
    // await page.dragAndDrop('[id="draggable"]' , '[id="droppable"]')
    // await page.waitForTimeout(2000)

    //DragTo
    await page.locator('[id="draggable"]').dragTo(page.locator('[id="droppable"]'))
    await page.waitForTimeout(2000)


})


test("Handling Slider" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/', {waitUntil : 'load'})

    //scroll
    // await page.locator('text=Price range:').scrollIntoViewIfNeeded()
    await page.mouse.wheel(0, 2000)
    await page.waitForTimeout(2000)


    //Slider
  const leftSlider =  await page.locator('.ui-slider-handle').nth(0)

  const rightSlider =  await page.locator('.ui-slider-handle').nth(1)

  const box = await leftSlider.boundingBox()

    await page.mouse.move(box.x + box.width / 2 , box.y + box.height / 2)

    await page.mouse.down()

    await page.mouse.move(box.x + 50 , box.y + box.height / 2, {steps : 15})

    await page.mouse.up()

    await page.waitForTimeout(2000)

})



test("Handling KeyBoard Actions", async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.waitForTimeout(2000)

    //fill
    await page.locator('[id="name"]').fill('Playwright with Javascript')
  
    //All text
    await page.keyboard.press('Control+KeyA')
   
    //copy
    await page.keyboard.press('Control+KeyC')
  
    //tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //paste
    await page.keyboard.press('Control+V')

    //Refresh
    await page.reload()
  
    await page.locator('a:has-text("Online Trainings")').click()
    
    await page.waitForLoadState()

    //Go Back
    await page.goBack()

    //Go Forward
    await page.goForward()

    //Bring to front
    await page.bringToFront()
    
})































