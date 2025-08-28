import{test,expect} from '@playwright/test'

test("Scroll down",{tag: '@sanity'},async({page})=>{
    await page.goto("https://commitquality.com/")
    await page.pause()
    await page.evaluate(() => {
        window.scrollBy(0,100)
    })
    await page.pause()
    const element = page.locator("//button[text()='Show More']")
    await element.scrollIntoViewIfNeeded();
    await page.pause()
})
test("keyboard Action test",{tag: '@sanity'},async({page})=>{
    await page.goto("https://www.google.com")
    await page.locator("//textarea[@name='q']").fill("utkarshaa academy")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Meta+A")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Meta+C")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Backspace")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Meta+V")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Enter")
})

test('Keyboard Events',{tag: '@regression'},async({page})=>{
    await page.goto("https://www.google.com")
    await page.locator("//textarea[@name='q']").focus()
    await page.waitForTimeout(2000)
    await page.keyboard.type("Utkarshaa Academy!")
    await page.waitForTimeout(2000)
    await page.keyboard.press("ArrowLeft")
    await page.waitForTimeout(2000)
    await page.keyboard.down("Shift")
    await page.waitForTimeout(2000)
    for(let i =0;i<7;i++){
        await page.waitForTimeout(2000)
        await page.keyboard.press("ArrowLeft")
    }
    await page.keyboard.up("Shift")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Backspace")
})