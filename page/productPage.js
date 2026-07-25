


export class ProductPage{

    constructor(page){
        this.page = page;
        this.productsTxt = page.$$('[class="hrefch"]')
        this.product = page.locator('//a[text()="Sony xperia z5"]')
    }

    async productsValidation(){
        const productsList = await this.productsTxt

        for (const element of productsList) {
           const txt = await element.textContent()
           console.log(txt)
        }
    }

    async selectProduct(){
        //Sony xperia z5
        await this.product.click()
    }

}















