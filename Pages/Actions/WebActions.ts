import { Locator, Page } from "playwright";

export class WebActions {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    } 

    async getLocator(identifier: string) {
        // const locator: Locator = await this.getAllLocators(identifier)
        // const locatorFirst = locator.first()
        console.log(identifier);
        
        const selector = this.page.locator(identifier)
        return selector
    }

    async getAllLocators(identifier: string) {

    }
}
