const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page}) => {
  await page.goto('https://naveenautomationlabs.com/opencart/')

})

test.describe('Naveen Automation Lab E-Commerce ',() => {
  
  test("Login the Website", async ({ page }) => {

    // Click on 'My Account'
    await page.locator("a[title='My Account']").click()

    // Click on 'Login' option
    await page.locator("a[href='https://naveenautomationlabs.com/opencart/index.php?route=account/login']").click()

    // Fill in login form
    await page.locator('input[placeholder="E-Mail Address"]').fill("mohanadityajha@gmail.com")
    await page.locator('input[placeholder="Password"]').fill("Test@2024")

    // Click submit button
    await page.locator('input[type="submit"]').click()


    

  })
})
