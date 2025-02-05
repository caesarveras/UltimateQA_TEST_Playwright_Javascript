// @ts-check
import { test, expect } from '@playwright/test';

test('Home Page', async ({ page }) => {
  await page.goto('https://ultimateqa.com/automation');

  
  await expect(page).toHaveTitle(/Automation Practice/);
});

test('test login page - ok', async ({ page }) => {
  await page.goto('https://ultimateqa.com/automation');
  //site
  await page.getByRole('link', { name: 'Login automation' }).click();
  //área de login

  await expect(page).toHaveTitle(/Sign In - UltimateQA/);
  //confirma página de login

  //await expect(page).toHaveTitle('Welcome Back').toBeVisible();


  await page.getByLabel('email').fill('Test-email@email.com');
  await page.getByLabel('Password').fill('secret-password');
  await page.getByRole('link', { name: 'Sign in' }).click();
  //preenche e clica
});
