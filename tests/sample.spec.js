import { test } from '@playwright/test'

test('validate amazon', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator('//input[@id="username"]').fill('student')
    await page.locator('//input[@id="password"]').fill('Password123')
    await page.locator('//button[text()="Submit"]').click()
})

//xpath(locator)-------->find address for the field

//id------------------>//input[@id="username"]
//name---------------->//input[@name="username"]
//class--------------->//button[@class="btn"]
//attribute and value-->//input[@type="password"]
//text----------------->//button[text()="Submit"]
