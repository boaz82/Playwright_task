import { expect, Locator, Page } from "@playwright/test";

export class UserProfile {
    // Define selectors
    readonly page: Page
    readonly allBoards: Locator
    readonly userSettings: Locator
    readonly logoutBtn: Locator
    readonly submitLogoutBtn: Locator
    readonly loginBtn: Locator

    // Init selectors using constructor
    constructor(page: Page) {
        this.page = page
        this.allBoards = page.locator('.all-boards')
        this.userSettings = page.locator(`//div[@title='Automation Test (user92864824)']`)
        this.logoutBtn = page.locator('text=Log out')
        this.submitLogoutBtn = page.locator('#logout-submit')
        this.loginBtn = page.locator(`//a[contains(@class, 'Buttonsstyles__Button') and text()='Log in']`)
    }
    // Define home page methods

    async logout() {
        await this.userSettings.click()
        await this.logoutBtn.click()
        await this.submitLogoutBtn.waitFor({state: "visible"})
        await this.submitLogoutBtn.click()
    }

    async verifyLogoutSuccess() {
        await this.loginBtn.waitFor({state: "visible"})
        await expect(this.loginBtn).toBeVisible()
    }
}