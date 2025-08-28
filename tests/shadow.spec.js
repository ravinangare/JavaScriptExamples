import{test, expect} from '@playwright/test'

test('Shadow Dom Element',async({page})=>{
//    await page.goto("https://selectorshub.com/xpath-practice-page/")
//    await page.locator("#kils").fill("welcome")
//    await page.goto("https://selectorshub.com/xpath-practice-page/")
// //   await page.locator("div#userPass",{hasText:"Password"})
// //   await page.locator("#pwd").fill("Password") 
   await page.goto('https://selectorshub.com/xpath-practice-page/');
   await page.getByRole('textbox', { name: 'user name field' }).click();
   await page.getByRole('textbox', { name: 'user name field' }).fill('ravinangre');
   await page.getByRole('textbox', { name: 'Enter pizza name' }).click();
   await page.getByRole('textbox', { name: 'Enter pizza name' }).fill('dosa pizza');
})
  test('slow test example', async ({ page }) => {
    test.slow(); // increases timeout
    await page.waitForTimeout(5000); // simulate slow test
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.getByRole('textbox', { name: 'user name field' }).click();
    await page.getByRole('textbox', { name: 'user name field' }).fill('ravinangre');
    await page.getByRole('textbox', { name: 'Enter pizza name' }).click();
    await page.getByRole('textbox', { name: 'Enter pizza name' }).fill('dosa pizza');
    expect(true).toBe(true);
  });


