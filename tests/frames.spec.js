
import {test , expect} from "@playwright/test";


test('Handling Frames ' , async ({page})=>{

//browser
await page.goto('https://ui.vision/demo/webtest/frames/')

//count of frames
const frames = await page.frames()
console.log(frames.length)

await page.waitForTimeout(2000)

//hanlde 1st frame 
// const frame1 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'}).locator('[name="mytext1"]')
// await frame1.fill('JavaScript')


await page.frameLocator('//frame[@src="frame_1.html"]').locator('[name="mytext1"]').fill('JavaScript')
await page.waitForTimeout(2000)


await page.frameLocator('[src="frame_2.html"]').locator('[type="text"]').fill('Playwright')
await page.waitForTimeout(2000)


//Handle Child Frames
const frame3 = await page.frameLocator('[src="frame_3.html"]').frameLocator('//iframe[contains(@src,"https://docs.google.com/forms/")]')
await frame3.locator('//form[@id="mG61Hd"]//div[@class="AB7Lab Id5V1"]').first().click()

await page.waitForTimeout(2000)

const frame4 = await page.frameLocator('[src="frame_3.html"]').frameLocator('//iframe[contains(@src,"https://docs.google.com/forms/")]')
await frame4.locator('//form[@id="mG61Hd"]//div[@class="AB7Lab Id5V1"]').last().click()

await page.waitForTimeout(2000)

const frame5 = await page.frameLocator('[src="frame_3.html"]').frameLocator('//iframe[contains(@src,"https://docs.google.com/forms/")]')
await frame5.locator('//form[@id="mG61Hd"]//div[@class="AB7Lab Id5V1"]').nth(1).click()

await page.waitForTimeout(2000)

})


















