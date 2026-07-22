//DropDown
import { test } from '@playwright/test'

test('Validate Dropdown', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    const singleDrop = await page.locator('//select[@id="fruits"]')
    await singleDrop.selectOption({ label: "Mango" })
    const text = await singleDrop.locator('option:checked').textContent()
    console.log("Selected:", text)

    const multiDropdown = await page.locator('//select[@id="superheros"]')
    await multiDropdown.selectOption([{ index: 1 }, { value: "bp" }, { label: "Thor" }])
    const text1 = await multiDropdown.locator('option:checked').allTextContents()
    console.log("Selected SuperHeros:", text1)
})

//Dropdown method

//index---->{index:3}
//value----->{value:"4"}
//label------>{label:"Mango"}
