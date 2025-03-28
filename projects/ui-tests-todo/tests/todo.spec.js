import { test, expect } from '@playwright/test';

test('should add and complete a todo', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    await page.locator('.new-todo').fill('Learn QA');
    await page.locator('.new-todo').press('Enter');
    await expect(page.locator('.todo-list li')).toContainText('Learn QA');
    await page.locator('.toggle').click();
    await expect(page.locator('.todo-list li')).toHaveClass(/completed/);
});
