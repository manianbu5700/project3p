//FrameHandling
import { test } from '@playwright/test'
test('Frame Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html')
    const singleFrame = await page.frameLocator('//iframe[@id="singleframe"]')
    await singleFrame.locator('//input[@type="text"]').fill('Hii Bro')
    // await page.waitForTimeout(3000)
    await page.locator('//a[text()="Iframe with in an Iframe"]').click()

    const outerFrame = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
    const innerFrame = await outerFrame.frameLocator('//iframe[@src="SingleFrame.html"]')
    await innerFrame.locator('//input[@type="text"]').fill("Hii Buddy")


})
