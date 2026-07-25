import { BasePage } from "./basePage";
import { expect } from "@playwright/test";


export class HomePage extends BasePage{

    constructor(page){
        super(page)

        this.alProdImgs = page.locator('[class="card-img-top img-fluid"]')
        this.alProdtxt = page.$$('.hrefch')

    }

    async productVisible(){
        const count = await this.alProdImgs.count();

        for(let i=0; i < count; i++){
            await expect(this.alProdImgs.nth(i)).toBeVisible()
        }   
    }


    async printProdText(){
        const prodTxt = await this.alProdtxt;

        for (const element of prodTxt) {
          const txt = await this.getText(element)
          console.log(txt)
        }
    }




}























