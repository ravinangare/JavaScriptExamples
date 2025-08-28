// page.getByAltText() to locate an element, usually image, by its text alternative.

// page.getByPlaceholder() to locate an input by placeholder.

// page.getByRole() to locate by explicit and implicit accessibility attributes.

// page.getByText() to locate by text content.

// page.getByLabel() to locate a form control by associated label's text.

// page.getByTitle() to locate an element by its title attribute.

// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

import {test,expect} from '@playwright/test'

test('playwright locators test',async({page})=>{

   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   const logo = await page.getByAltText('company-branding')
   await expect(logo).toBeVisible()

   await page.getByPlaceholder("Username").fill("Admin")
 //  await page.getByPlaceholder("Password").fill("admin123")

   await page.getByRole('textbox',{name:'Password'}).fill('admin123')

   await page.getByRole('button',{ type : 'submit' }).click()

  // await expect(page.getByText('manda user')).toBeVisible()

   const name = await page.locator("//p[@class='oxd-userdropdown-name']")
   await expect(name).toBeVisible();

   await expect(page.getByText('Punched Out',{ exact: true })).toBeVisible()


   page.goto('file:///Users/ravinangare/JavaScriptExamples/tests/abc.html')

   await page.getByLabel('UserName').fill('Admin');
   await page.getByLabel('Password').fill('secret');

   await expect(page.getByTitle('Issues count')).toHaveText('25 issues');
//    await page.goto("https://kite.zerodha.com/")
//    const logo1 = await page.getByAltText("Kite logo")
//    await expect(logo1).toBeVisible()

await page.goto('https://www.facebook.com/')
await page.getByTestId('royal-login-button').click()
})