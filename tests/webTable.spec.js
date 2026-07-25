

import {test , expect} from "@playwright/test";


test("Handling Web Table" , async ({page})=>{

    //browser
    await page.goto('https://testautomationpractice.blogspot.com/')

    //column
   const colunmsCount = await page.$$('//table[@id="productTable"]//thead//tr/th')   //4
   console.log(await colunmsCount.length)

   for(const cc of colunmsCount){
      const txt = await cc.textContent()
        console.log(txt)
   }

    //rows
    const rowsCount = await page.locator('//table[@id="productTable"]//tbody//tr')    //5
    console.log(await rowsCount.count())

    //1 Select a product
    const selectProd =  await rowsCount.filter({
    has : page.locator('td') ,  hasText : 'Tablet'
    })

   await selectProd.locator('input').click()
   await page.waitForTimeout(3000)


    //2 Select multiple products

    async function multiProd(prod){
    const selectProd =  await rowsCount.filter({
    has : page.locator('td') ,  hasText : prod
    })

    await selectProd.locator('input').click()
  
    }

    await multiProd('Smartphone')
    await multiProd('Wireless Earbuds')

    await page.waitForTimeout(3000)


    //3 Read first page datas

    for(let i= 0; i < await rowsCount.count() ; i++){    //row  0<5  -- table//tbody//tr
    const tds = await rowsCount.nth(i).locator('td')
    // console.log(await tds.allTextContents())

        for(let j=0; j < await tds.count(); j++){       //colunm  0<20
          const prods = await tds.nth(j).textContent()
          console.log(prods)
        }
    }

    //4 Read / Navigate all pages

   const pagesCount = await page.locator('[id="pagination"] > li > a')

   for(let k=0; k < await pagesCount.count() ; k++){   //0<4

        if(k > 0){
            await pagesCount.nth(k).click()
        }

        for(let i= 0; i < await rowsCount.count() ; i++){    //row   table//tbody//tr
       const tds = await rowsCount.nth(i).locator('td')
       // console.log(await tds.allTextContents())

        for(let j=0; j < await tds.count(); j++){       //colunm
          const prods = await tds.nth(j).textContent()
          console.log(prods)
        }
    }


   }


})









































