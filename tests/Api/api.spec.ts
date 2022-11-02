import { test, expect } from '@playwright/test'
import axios from 'axios'
import { ApiPage } from '../../Pages/API/ApiPage'
import * as data from "../../config/data.json"

test.describe('API testing', () => {
    let apiPage: ApiPage
    test.beforeEach(async ({ page }) => {
        apiPage = new ApiPage(page)
    })
    const baseUrl = data.API.baseUrl
    const key = data.API.key
    const token = data.API.token
    let boardId: string
    test('Create new board', async () => {
        const resp = await axios.post(`${baseUrl}/1/boards/?name=my%20board%20name&key=${key}&token=${token}`)
        expect(resp.status).toBe(200)
        boardId = resp.data.id
        const boardName = resp.data.name
        expect(boardName).toBe('my board name')      
    })

    test('Delete board', async () => {
        let resp = await axios.delete(`${baseUrl}/1/boards/${boardId}?key=${key}&token=${token}`)
        expect(resp.status).toBe(200)
        resp = await axios.get(`${baseUrl}/1/members/me/boards?key=${key}&token=${token}`)
        const isBoardExist = await apiPage.checkBoardDelete(resp.data, boardId)
        expect(isBoardExist).toBeFalsy()
    })
})