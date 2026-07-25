
import {test , expect} from "@playwright/test"



test.skip("Take ScreenShot Visible Page" , async ({page})=>{

    //browser
    await page.goto('https://www.amazon.in/')

    //wait 
    await page.waitForTimeout(5000)

    //screenshot
    await page.screenshot({path : "tests/images" + "/visiblePage.png"})
})



test.skip("Take ScreenShot Full Page" , async ({page})=>{

    //browser
    await page.goto('https://www.amazon.in/')

    //wait 
    await page.waitForTimeout(5000)

    //screenshot
    await page.screenshot({path : "tests/images" + "/fullPage.jpg" , fullPage : true})
})



test("Take ScreenShot Specific Page" , async ({page})=>{

    //browser
    await page.goto('https://www.amazon.in/')

    //wait 
    await page.waitForTimeout(5000)

    //screenshot
    await page.locator('[id="nav-logo-sprites"]')
    .screenshot({path : "tests/images" + "/specificPage.jpeg"})
})



try{
    //broswer
    //search
    //select a product
    //add to cart
    //checkout
}catch(e){
    //screenshot
}


