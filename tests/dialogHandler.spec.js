
import {test , expect} from "@playwright/test"


test("Simple Alert" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/', {waitUntil : 'load'})

    //scroll
    await page.locator('[id="alertBtn"]').scrollIntoViewIfNeeded()

    await page.waitForTimeout(3000)

    //event listner
    await page.on('dialog' , async (a)=>{
        expect(a.type()).toEqual('alert')
        expect(a.message()).toContain('I am an alert box!')
        await page.waitForTimeout(2000)
        await a.accept()
    })
   
    //click
    await page.locator('[id="alertBtn"]').click()
    await page.waitForTimeout(2000)
})





test.only("Confirm Alert" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/', {waitUntil : 'load'})

    //scroll
    await page.locator('[id="confirmBtn"]').scrollIntoViewIfNeeded()

    await page.waitForTimeout(3000)

    //event listner
    await page.once('dialog' , async (b)=>{
        expect(b.type()).toEqual('confirm')
        expect(b.message()).toContain('Press a button!')
        await page.waitForTimeout(2000)
        // await b.accept()
        await b.dismiss()
    })
   
    //click
    await page.locator('[id="confirmBtn"]').click()
    await page.waitForTimeout(2000)


    //event listner
    await page.on('dialog' , async (c)=>{
        expect(c.type()).toEqual('prompt')
        expect(c.message()).toContain('Please enter your name:')
        expect(c.defaultValue()).toContain('Harry Potter')
        await page.waitForTimeout(2000)
        await c.accept("Raviteja")
        await page.waitForTimeout(2000)
    })

    //click
    await page.click('[id="promptBtn"]')
    await page.waitForTimeout(2000)
})





























































