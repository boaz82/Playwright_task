import { expect, Locator, Page } from "@playwright/test";

export class UserProfile {
    // Define selectors
    readonly page: Page
    readonly allBoards: Locator
    readonly userSettings: Locator
    readonly logoutBtn: Locator
    // readonly submitLogoutBtn: Locator
    submitLogoutBtn = `#logout-submit`
    readonly loginBtn: Locator
    loginPageHeader = `//button[text()='Sign up - it’s free']`

    // Init selectors using constructor
    constructor(page: Page) {
        this.page = page
        this.allBoards = page.locator('.all-boards')
        this.userSettings = page.locator(`//div[@title='Automation Test (user92864824)']`)
        this.logoutBtn = page.locator('text=Log out')
        // this.submitLogoutBtn = page.locator('#logout-submit')
        this.loginBtn = page.locator(`//a[contains(@class, 'Buttonsstyles__Button') and text()='Log in']`)
    }
    // Define home page methods

    async logout() {
        await this.userSettings.click()
        await this.logoutBtn.click()
        const submitLogoutBtnSelector = this.page.locator(this.submitLogoutBtn)
        // await this.submitLogoutBtn.waitFor({state: "visible"})
        await this.page.waitForSelector(this.submitLogoutBtn)
        // await this.submitLogoutBtn.click()
        await submitLogoutBtnSelector.click()
    }

    async verifyLogoutSuccess() {
        await this.page.waitForSelector(this.loginPageHeader)
        expect(await this.page.isVisible(this.loginPageHeader))
    }
}