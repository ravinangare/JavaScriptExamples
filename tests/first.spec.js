//const{ test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test';

test('My First Test',({page})=>{

    page.goto('https://www.google.com')
})

test('My First Test with async',async ({page})=>{

  await page.goto('https://www.google.com')
})

test('first test', async({page})=>{
    await page.goto('https://utkarshaaacademy.com')
    await expect(page).toHaveTitle('Software Testing')
    await page.getByRole('link',{name: 'Services'}).click()
    await expect(page).toHaveURL(/services/)
})

test('Google search test @sanity', async ({ page }) => {  
    await page.goto('https://www.google.com');  
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright');
    await page.getByText('playwright', { exact: true }).click();
    await page.keyboard.press('Enter');  
    await expect(page).toHaveTitle(/Playwright testing/);
});

test('example using context and page @regression', async ({ context, page }) => {
  // context is already created and isolated for this test
  const newPage = await context.newPage(); // can create more pages if needed
  await newPage.goto('https://utkarshaaacademy.com');
  await expect(newPage).toHaveTitle('Software Testing');
  await newPage.goto('https://www.google.com');
  await expect(newPage).toHaveTitle('Google')
});

test('Fixtures demo @regression',async({browser})=>{
    console.log(`Browser type : ${browser.browserType().name()}`)
})
