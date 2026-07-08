import { test } from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { SearchHotelPage } from '../page/SearchHotelPage'

test('Page Object Model', async ({ page }) => {
    const login = new LoginPage(page)

    await login.launchUrl()
    await login.enterUsername()
    await login.enterPassword()
    await login.clickLoginButton()

    const search = new SearchHotelPage(page)
    await search.selectLocation()
})
