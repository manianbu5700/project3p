// @ts-check
import { test } from '@playwright/test';

test('validate facebook application', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  console.log("Hii Buddy")
});

