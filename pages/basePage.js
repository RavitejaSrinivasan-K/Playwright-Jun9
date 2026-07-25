


export class BasePage {

    constructor(page){
        this.page = page;
    }

    async click(locator){
        await locator.click()
        // this.page.locator('').click()
    }

    async fill(locator, value){
        await locator.fill(value)
    }

    async getText(locator){
        return await locator.textContent()
    }

    // async isVisible(locator){
    //     return await locator.isVisible()
    // }

    async loadWait(){
        await this.page.waitForLoadState('load')
    }

    async waitForLocator(locator){
        return await locator.waitFor()
    }

    async waitForUrl(locator){
        return await this.page.waitForURL()
    }
}





