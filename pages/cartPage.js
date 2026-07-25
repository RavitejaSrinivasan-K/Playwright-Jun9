import { BasePage } from "./basePage";
import { HomePage } from "./homePage";
import { expect } from "@playwright/test";
const { productDetails } = require("../testData/testData2.json")


export class CartPage extends HomePage{
    
    constructor(page){
        super(page)
        this.addToCartBtn = page.locator('//a[text()="Add to cart"]')
        this.cartLinkTxt = page.locator('#cartur')
    }

    async selectProduct(){
        const productTxt = await this.alProdtxt

        for (const element of productTxt) {
           const txt = await this.getText(element)
           if(txt.includes(productDetails.prodName)){
            await this.click(element)
            break;
           }
        }

        await this.loadWait()
    }


    async addToCart(){
    await this.waitForLocator(this.addToCartBtn)
    
    await this.page.once('dialog' , async (alert)=>{
        await expect(alert.message()).toContain('Product added')
        await alert.accept()
    })
    await this.click(this.addToCartBtn)
    }

    async cartOption(){
        await this.click(this.cartLinkTxt)
        await expect(this.page).toHaveURL(/cart.html/)
    }
}































