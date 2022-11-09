import { expect, Locator, Page } from "@playwright/test";
import * as data from "../config/data.json"
import { WebActions } from "./Actions/WebActions";

export class LoginPage {
    // Define selectors
    readonly page: Page
    // readonly usernameInput: Locator
    webActions: WebActions
    usernameInput = `#user`
    // readonly passwordInput: Locator
    passwordInput = `#password`;
    readonly submitLoginBtn: Locator
    readonly errorMessage: Locator
    // readonly allBoards: Locator
    allBoards = `.all-boards`

    // Init selectors using constructor
    constructor(page: Page) {
        this.page = page
        this.webActions = new WebActions(this.page)
        // this.usernameInput = page.locator('#user')
        // this.passwordInput = page.locator('#password')
        this.submitLoginBtn = page.locator(`//input[@id='login'] | //button[@id='login-submit']`)
        this.errorMessage = page.locator('#error')
        // this.allBoards = page.locator('.all-boards')
    }
    // Define login page methods
    async gotoTrelloLoginPage() {        
        await this.page.goto(data.UI.trelloLoginUrl)
    }

    async login(username: string, password: string) {
        await this.page.waitForSelector(this.usernameInput)
        const userInputSelector = this.page.locator(this.usernameInput)
        await userInputSelector.type(username)
        // await this.usernameInput.type(username)
        await this.submitLoginBtn.click()
        await this.page.waitForSelector(this.passwordInput)
        const selector = this.page.locator(this.passwordInput)
        await selector.type(password)
        // const passwordLocator = await this.webActions.getLocator(this.passwordInput)
        // await passwordLocator.type(password)
        
        // await this.passwordInput.type(password)
        await this.submitLoginBtn.click()
    }

    async assertErrorMessage() {
        await this.errorMessage.waitFor({state: "visible"})
        await expect(this.errorMessage).toContainText(`You don't have a Trello account. Would you like to create one using your `)
    }

    async verifyLoginSuccess() {
        const allBoardsSelector = this.page.locator(this.allBoards)
        await this.page.waitForSelector(this.allBoards)
        await expect(allBoardsSelector).toBeVisible()
        // await this.allBoards.waitFor({state: "visible"})
        // await expect(this.allBoards).toBeVisible()
    }
}